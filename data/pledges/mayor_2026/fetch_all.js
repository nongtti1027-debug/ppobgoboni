const fs = require('fs');
const path = require('path');

const KEY = process.env.NEC_API_SERVICE_KEY;
if (!KEY) {
  console.error('Set NEC_API_SERVICE_KEY env var (URL-encoded key)');
  process.exit(1);
}

const list = JSON.parse(fs.readFileSync('mayor_list.json', 'utf-8'));
const parsedDir = path.join(__dirname, 'parsed');
const rawDir = path.join(__dirname, 'raw');
fs.mkdirSync(parsedDir, { recursive: true });
fs.mkdirSync(rawDir, { recursive: true });

function splitSections(cont) {
  const re = /□\s*(목\s*표|이행방법|이행기간|재원조달방안\s*등|재원조달방안)\s*:?\s*/g;
  const matches = [];
  let m;
  while ((m = re.exec(cont)) !== null) {
    const key = m[1].replace(/\s/g, '');
    let norm = 'other';
    if (key.includes('목표')) norm = 'goal';
    else if (key.includes('이행방법')) norm = 'method';
    else if (key.includes('이행기간')) norm = 'timeline';
    else if (key.includes('재원조달방안')) norm = 'funding';
    matches.push({ norm, start: m.index, contentStart: re.lastIndex });
  }
  const result = { goal: '', method: '', timeline: '', funding: '' };
  for (let i = 0; i < matches.length; i++) {
    const cur = matches[i];
    const nextStart = i + 1 < matches.length ? matches[i + 1].start : cont.length;
    const text = cont.substring(cur.contentStart, nextStart).trim();
    if (result[cur.norm] !== undefined) result[cur.norm] = text;
  }
  return result;
}

function safeName(s) {
  return s.replace(/[^\w가-힣]/g, '');
}

async function fetchOne(entry, idx) {
  const url = `https://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire?serviceKey=${KEY}&sgId=20260603&sgTypecode=4&cnddtId=${entry.huboid}&pageNo=1&numOfRows=10&resultType=json`;
  const res = await fetch(url);
  const json = await res.json();

  const fname = `${safeName(entry.sggName)}_${safeName(entry.name)}`;
  fs.writeFileSync(path.join(rawDir, `${fname}.json`), JSON.stringify(json), 'utf-8');

  const item = json?.response?.body?.items?.item?.[0];
  if (!item) {
    console.log(`[${idx}] ${entry.sggName} ${entry.name} - NO DATA (resultCode=${json?.response?.header?.resultCode})`);
    return;
  }

  const count = parseInt(item.prmsCnt, 10) || 0;
  const pledges = [];
  for (let i = 1; i <= count; i++) {
    const title = item[`prmsTitle${i}`];
    if (!title) continue;
    const realm = item[`prmsRealmName${i}`] || '';
    const cont = item[`prmmCont${i}`] || item[`prmsCont${i}`] || '';
    const sections = splitSections(cont);
    pledges.push({
      id: `mayor-${fname}-${String(i).padStart(2, '0')}`,
      order: i,
      realm,
      title,
      goal: sections.goal,
      method: sections.method,
      timeline: sections.timeline,
      funding: sections.funding,
    });
  }

  const output = {
    politician: item.krName,
    hanja_name: item.cnName,
    party: item.partyName,
    office: item.sggName,
    sido: item.sidoName,
    election: '제9회 전국동시지방선거',
    election_date: '2026-06-03',
    sgId: item.sgId,
    sgTypecode: item.sgTypecode,
    cnddtId: item.cnddtId,
    pledge_count: pledges.length,
    pledges,
  };
  fs.writeFileSync(path.join(parsedDir, `${fname}.json`), JSON.stringify(output, null, 2), 'utf-8');
  console.log(`[${idx}/${list.length}] ${entry.sggName} ${entry.name} - ${pledges.length}개`);
}

async function main() {
  for (let i = 0; i < list.length; i++) {
    try {
      await fetchOne(list[i], i + 1);
    } catch (e) {
      console.error(`[${i + 1}] ${list[i].sggName} ${list[i].name} - ERROR: ${e.message}`);
    }
  }
  console.log('done');
}

main();
