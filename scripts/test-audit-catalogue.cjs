const assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs'),{execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..'),data=JSON.parse(fs.readFileSync(path.join(root,'events.json'),'utf8')).events;
const output=execFileSync(process.execPath,[path.join(__dirname,'audit-catalogue.cjs'),'2026-10-29'],{encoding:'utf8'});
for(const [field,expected] of Object.entries({
 total:data.length,
 missingTime:data.filter(e=>!e.time).length,
 genericRegion:data.filter(e=>!e.region||e.region==='Florianópolis').length,
 quarantined:data.filter(e=>e.sourceReview==='quarantined').length,
 unreviewed:data.filter(e=>e.status!=='verified').length
})){
 const found=output.match(new RegExp('^\\| '+field+' \\| (\\d+) \\|$','m'));
 assert(found,field+' missing');
 assert.equal(Number(found[1]),expected,field+' mismatch');
}
console.log('Catalog audit test passed');
