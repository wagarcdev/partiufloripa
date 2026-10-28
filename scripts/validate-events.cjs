const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const raw = JSON.parse(fs.readFileSync(path.join(root, 'events.json'), 'utf8'));
const events = raw.events;
if (!Array.isArray(events)) throw Error('events.json must have an events array');
const errors = [], warnings = [], seen = new Set();
const required = ['date','time','title','venue','category','source','region'];
for (const [i, e] of events.entries()) {
  const ref = 'events[' + i + ']';
  for (const k of required) if (typeof e[k] !== 'string' || !e[k].trim()) errors.push(ref + ': missing ' + k);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(e.date || '') || Number.isNaN(Date.parse(e.date + 'T12:00:00'))) errors.push(ref + ': invalid date');
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(e.time || '')) errors.push(ref + ': invalid time');
  try { if (!['https:','http:'].includes(new URL(e.source).protocol)) throw Error(); } catch { errors.push(ref + ': invalid source URL'); }
  if (e.image && !fs.existsSync(path.resolve(root, e.image))) errors.push(ref + ': missing local image ' + e.image);
  const key = [e.date,e.time,e.title,e.venue].map(x=>String(x||'').toLowerCase().trim()).join('|');
  if (seen.has(key)) warnings.push(ref + ': possible duplicate ' + key);
  seen.add(key);
  if (e.region === 'Florianópolis') warnings.push(ref + ': generic region, cannot map precisely');
}
console.log('Checked ' + events.length + ' events; ' + errors.length + ' errors; ' + warnings.length + ' warnings.');
for (const x of errors) console.error('ERROR', x);
for (const x of warnings) console.warn('WARN', x);
if (errors.length) process.exitCode = 1;
