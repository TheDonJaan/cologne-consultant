const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');

const baseline = 'e8e7a729603ef7c0a089cc874290b6d2ba2dc9be';
const priorHtml = execFileSync('git', ['show', baseline + ':index.html'], { maxBuffer: 4e6 }).toString();
const html = readFileSync('index.html', 'utf8');
const dataset = text => JSON.parse(text.match(/^<script>const DB=(.*);/m)[1]);
const prior = dataset(priorHtml);
const current = dataset(html);
const retired = [
  'P-0101', 'P-0102', 'P-0110', 'T-0901', 'AZ2-007', 'FG2-007', 'LB2-007',
  'N2-017', 'P-0079', 'P-0108', 'P-0109', 'Q-0362', 'AU4-001',
  'AUD-T26-Q02', 'AZ4-0669', 'TX-003', 'TX-004',
].sort();

for (const [, source] of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) new vm.Script(source);
assert.equal(current.guideVersion, '3.1.1');
assert.deepEqual(current.records, prior.records);
assert.deepEqual(current.quickMap, prior.quickMap);
assert.deepEqual(current.categoryLabels, prior.categoryLabels);
assert.deepEqual(current.wardrobe.filter(b => b.n !== 7), prior.wardrobe.filter(b => b.n !== 7));
assert.deepEqual(current.wardrobe.find(b => b.n === 7), {
  ...prior.wardrobe.find(b => b.n === 7), lifecycle: 'SOLD — RETIRED — NOT OWNED', retiredOn: '2026-11-13',
});
assert.equal(new Set(current.records.map(r => r.id)).size, 553);

const lifecycle = html.slice(html.indexOf('const RETIRED_BOTTLE='), html.indexOf('const seasons='));
const partition = vm.runInNewContext(lifecycle + `
  JSON.stringify({
    bottles: activeWardrobe.map(b => b.n),
    current: currentRecords.map(r => r.id),
    retired: DB.records.filter(isRetiredFormula).map(r => r.id).sort()
  })
`, { DB: current });
const active = JSON.parse(partition);
assert.equal(active.bottles.length, 27);
assert(!active.bottles.includes(7) && active.bottles.includes(8) && active.bottles.includes(9));
assert.deepEqual(active.retired, retired);
assert.equal(active.current.length, 536);
const records = current.records.filter(r => active.current.includes(r.id));
assert(records.every(r => !r.bottles.includes(7)));
assert(records.some(r => r.bottles.includes(8)));
assert.deepEqual(records.filter(r => r.lab).map(r => r.id).sort(), ['FG2-024', 'FG4-0504']);
const actionable = records.filter(r => !r.lab);
assert.equal(actionable.length, 534);
const counts = (items, key) => items.reduce((out, item) => {
  const value = item[key];
  out[value] = (out[value] || 0) + 1;
  return out;
}, {});
assert.deepEqual(counts(actionable, 'type'), { Parent: 460, 'Q-ID': 2, 'Q-TECH': 18, ARCH: 33, TECH: 21 });
const canonical = actionable.filter(r => r.registry === 'Canonical');
assert.equal(new Set(canonical.map(r => r.setkey)).size, 480);
assert.deepEqual(counts(canonical, 'score'), { '11.0': 78, '10.9': 210, '10.8': 119, '10.7': 73 });

console.log('Verified 536 current records and 17 archived records against the baseline, with every formula field preserved.');
console.log('Verified active wardrobe, taxonomy, canonical score distribution, exact archive IDs, and both Labs.');
