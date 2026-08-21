const fs = require('fs');
const pages = ['winners_p1.json', 'winners_p2.json', 'winners_p3.json'];
let all = [];
for (const f of pages) {
  const d = JSON.parse(fs.readFileSync(f, 'utf-8'));
  const items = d.response.body.items.item;
  all = all.concat(Array.isArray(items) ? items : [items]);
}
console.log('total winners:', all.length);
const list = all.map(w => ({
  name: w.name,
  huboid: w.huboid,
  sdName: w.sdName,
  sggName: w.sggName,
  party: w.jdName,
}));
fs.writeFileSync('mayor_list.json', JSON.stringify(list, null, 2), 'utf-8');
console.log('wrote mayor_list.json');
