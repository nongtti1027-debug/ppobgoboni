// Minimal Compound File Binary Format (MS-CFB) reader + HWP v5 BodyText
// record scanner, built to extract full paragraph text from old-format
// .hwp files (which store content as zlib-deflated binary records inside
// an OLE container, unlike .hwpx which is just a zip of XML).
const fs = require("fs");
const zlib = require("zlib");

function readCFB(buf) {
  const sig = buf.readBigUInt64BE(0);
  if (sig !== 0xd0cf11e0a1b11ae1n) throw new Error("Not a CFB file");

  const sectorShift = buf.readUInt16LE(30);
  const miniSectorShift = buf.readUInt16LE(32);
  const numFatSectors = buf.readUInt32LE(44);
  const firstDirSector = buf.readUInt32LE(48);
  const miniStreamCutoff = buf.readUInt32LE(56);
  const firstMiniFatSector = buf.readUInt32LE(60);
  const firstDifatSector = buf.readUInt32LE(68);

  const sectorSize = 1 << sectorShift;
  const miniSectorSize = 1 << miniSectorShift;

  const sectorOffset = (id) => (id + 1) * sectorSize;
  const readSector = (id) => buf.subarray(sectorOffset(id), sectorOffset(id) + sectorSize);

  // Build DIFAT (first 109 entries in header, then chained DIFAT sectors)
  const difat = [];
  for (let i = 0; i < 109; i++) {
    const v = buf.readUInt32LE(76 + i * 4);
    if (v !== 0xffffffff) difat.push(v);
  }
  let difatSector = firstDifatSector;
  while (difatSector !== 0xfffffffe && difatSector !== 0xffffffff) {
    const sec = readSector(difatSector);
    const entriesPerSector = sectorSize / 4;
    for (let i = 0; i < entriesPerSector - 1; i++) {
      const v = sec.readUInt32LE(i * 4);
      if (v !== 0xffffffff) difat.push(v);
    }
    difatSector = sec.readUInt32LE((entriesPerSector - 1) * 4);
  }

  // Build FAT array
  const fat = [];
  for (const fatSecId of difat.slice(0, numFatSectors)) {
    const sec = readSector(fatSecId);
    for (let i = 0; i < sectorSize / 4; i++) fat.push(sec.readUInt32LE(i * 4));
  }

  const FREESECT = 0xffffffff,
    ENDOFCHAIN = 0xfffffffe,
    FATSECT = 0xfffffffd,
    DIFSECT = 0xfffffffc;

  function readChain(startSector, size) {
    const chunks = [];
    let id = startSector;
    let remaining = size;
    while (id !== ENDOFCHAIN && id !== FREESECT && remaining > 0 && id < fat.length) {
      const sec = readSector(id);
      const take = Math.min(sectorSize, remaining);
      chunks.push(sec.subarray(0, take));
      remaining -= take;
      id = fat[id];
    }
    return Buffer.concat(chunks);
  }

  // Directory entries (128 bytes each), stored in the dir stream via FAT chain.
  // We don't know the dir stream's total size ahead of time, so walk the FAT
  // chain sector-by-sector until ENDOFCHAIN.
  const dirSectors = [];
  {
    let id = firstDirSector;
    while (id !== ENDOFCHAIN && id !== FREESECT && id < fat.length) {
      dirSectors.push(readSector(id));
      id = fat[id];
    }
  }
  const dirBuf = Buffer.concat(dirSectors);
  const entries = [];
  for (let off = 0; off + 128 <= dirBuf.length; off += 128) {
    const nameLen = dirBuf.readUInt16LE(off + 64);
    if (nameLen === 0) continue;
    const name = dirBuf.subarray(off, off + nameLen - 2).toString("utf16le");
    const type = dirBuf.readUInt8(off + 66);
    const startSector = dirBuf.readUInt32LE(off + 116);
    const sizeLow = dirBuf.readUInt32LE(off + 120);
    entries.push({ name, type, startSector, size: sizeLow });
  }

  const root = entries.find((e) => e.type === 5);
  let miniStreamData = null;
  if (root && firstMiniFatSector !== ENDOFCHAIN) {
    miniStreamData = readChain(root.startSector, root.size);
  }

  // Mini FAT (for streams smaller than miniStreamCutoff)
  const miniFat = [];
  if (firstMiniFatSector !== ENDOFCHAIN && firstMiniFatSector !== FREESECT) {
    // remaining=MAX_SAFE_INTEGER: the loop still stops correctly once the FAT
    // chain hits ENDOFCHAIN/FREESECT, this just avoids cutting it short.
    const miniFatBuf = readChain(firstMiniFatSector, Number.MAX_SAFE_INTEGER);
    for (let i = 0; i < miniFatBuf.length / 4; i++) miniFat.push(miniFatBuf.readUInt32LE(i * 4));
  }

  function readMiniChain(startSector, size) {
    const chunks = [];
    let id = startSector;
    let remaining = size;
    while (id !== ENDOFCHAIN && id !== FREESECT && remaining > 0) {
      const off = id * miniSectorSize;
      const take = Math.min(miniSectorSize, remaining);
      chunks.push(miniStreamData.subarray(off, off + take));
      remaining -= take;
      id = miniFat[id];
    }
    return Buffer.concat(chunks);
  }

  function getStreamData(entry) {
    if (entry.size < miniStreamCutoff) {
      return readMiniChain(entry.startSector, entry.size);
    }
    return readChain(entry.startSector, entry.size);
  }

  return { entries, getStreamData };
}

function isCompressed(fileHeaderBuf) {
  // FileHeader stream: byte 36 is a bit flags field; bit 0 = compressed
  const flags = fileHeaderBuf.readUInt32LE(36);
  return (flags & 1) === 1;
}

function extractParaTextRuns(sectionBuf) {
  const texts = [];
  let off = 0;
  while (off + 4 <= sectionBuf.length) {
    const header = sectionBuf.readUInt32LE(off);
    const tagId = header & 0x3ff;
    let size = (header >> 20) & 0xfff;
    off += 4;
    if (size === 0xfff) {
      if (off + 4 > sectionBuf.length) break;
      size = sectionBuf.readUInt32LE(off);
      off += 4;
    }
    if (off + size > sectionBuf.length) break;
    const payload = sectionBuf.subarray(off, off + size);
    if (tagId === 67 /* HWPTAG_PARA_TEXT */) {
      // Decode as UTF-16LE. Inline-object control chars (tables, fields,
      // etc.) don't get their reserved extra WCHARs skipped here, so they
      // decode into stray codepoints — most land in the CJK Unified
      // Ideographs block (real Chinese characters basically never appear
      // in these documents), so we drop that whole block plus other
      // non-Korean/non-ASCII ranges rather than trying to precisely
      // recompute each control char's skip width.
      const evenLen = payload.length - (payload.length % 2);
      const text = payload.subarray(0, evenLen).toString("utf16le");
      const cleaned = Array.from(text)
        .filter((ch) => {
          const cp = ch.codePointAt(0);
          if (cp < 0x20) return ch === "\n" || ch === "\t";
          if (cp >= 0x4e00 && cp <= 0x9fff) return false; // CJK Unified Ideographs (hanja garbage)
          if (cp >= 0x3400 && cp <= 0x4dbf) return false; // CJK Ext A
          if (cp >= 0xe000 && cp <= 0xf8ff) return false; // Private Use Area
          if (cp >= 0xf900 && cp <= 0xfaff) return false; // CJK Compatibility Ideographs
          return true;
        })
        .join("");
      texts.push(cleaned);
    }
    off += size;
  }
  return texts.join("\n");
}

function extractHwpText(filePath) {
  const buf = fs.readFileSync(filePath);
  const { entries, getStreamData } = readCFB(buf);

  const fileHeaderEntry = entries.find((e) => e.name === "FileHeader");
  if (!fileHeaderEntry) throw new Error("FileHeader stream not found");
  const fileHeaderBuf = getStreamData(fileHeaderEntry);
  const compressed = isCompressed(fileHeaderBuf);

  const sectionEntries = entries
    .filter((e) => /^Section\d+$/.test(e.name))
    .sort((a, b) => parseInt(a.name.slice(7)) - parseInt(b.name.slice(7)));

  if (sectionEntries.length === 0) throw new Error("No BodyText/Section streams found");

  let fullText = "";
  for (const entry of sectionEntries) {
    let data = getStreamData(entry);
    if (compressed) {
      try {
        data = zlib.inflateRawSync(data);
      } catch (e) {
        throw new Error(`inflate failed for ${entry.name}: ${e.message}`);
      }
    }
    fullText += extractParaTextRuns(data) + "\n";
  }
  return fullText;
}

module.exports = { extractHwpText };

// CLI usage: node hwp_parser.js <file.hwp>
if (require.main === module) {
  const filePath = process.argv[2];
  const text = extractHwpText(filePath);
  process.stdout.write(text);
}
