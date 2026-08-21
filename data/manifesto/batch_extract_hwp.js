const fs = require("fs");
const path = require("path");
const { extractHwpText } = require("./hwp_parser.js");

const root = path.join(__dirname, "extracted");
const outDir = path.join(__dirname, "text_full");
fs.mkdirSync(outDir, { recursive: true });

function findHwpFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(findHwpFiles(full));
    else if (entry.name.toLowerCase().endsWith(".hwp")) results.push(full);
  }
  return results;
}

function cleanText(text) {
  // Strip null bytes and other non-printable control chars (leftover from
  // inline-object placeholder codepoints we didn't specially handle), but
  // keep newlines.
  return text
    .split("\n")
    .map((line) =>
      line
        .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, "")
        .trim(),
    )
    .filter((line) => {
      if (line.length === 0) return false;
      // Bullet marker with nothing (or only punctuation) after it
      if (/^[❍○●◦·\-\*]+\s*$/.test(line)) return false;
      // A bare year (table column header leaked from a flattened schedule
      // table, e.g. "2026", "2030", "2030 이후") with no other content
      if (/^20\d\d(\s*년)?(\s*이후)?\s*$/.test(line)) return false;
      // Bare 1-2 char table-header fragments like "우선"/"순위"/"공약명" that
      // leak out when a table row gets flattened one cell per line
      if (/^(우선|순위|공약명|재원조달|이행|기간|추진|주체)$/.test(line)) return false;
      return true;
    })
    .join("\n");
}

const files = findHwpFiles(root);
console.log(`hwp 파일 ${files.length}개 발견`);

let ok = 0;
let fail = 0;
for (const f of files) {
  const region = path.basename(path.dirname(f));
  const base = path.basename(f, ".hwp");
  const outPath = path.join(outDir, `${region}__${base}.txt`);
  try {
    const raw = extractHwpText(f);
    const cleaned = cleanText(raw);
    fs.writeFileSync(outPath, cleaned, "utf-8");
    ok++;
  } catch (e) {
    console.log(`  [실패] ${base}: ${e.message}`);
    fail++;
  }
}
console.log(`완료: 성공 ${ok}, 실패 ${fail}`);
