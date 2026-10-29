#!/usr/bin/env node
// Offline deterministic review queue builder. NEVER modifies events.json.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const [candidatesPath,reportPath]=process.argv.slice(2);
if(!candidatesPath||!reportPath){
  console.error('Usage: node scripts/prepare-review-queue.cjs candidates.json queue.json');
  process.exit(2);
}
const registry=JSON.parse(fs.readFileSync(path.join(root,'data/source-registry.json'),'utf8'));
if(registry.defaultPolicy!=='deny'||!Array.isArray(registry.sources))throw Error('invalid source registry');
const payload=JSON.parse(fs.readFileSync(candidatesPath,'utf8'));
if(!Array.isArray(payload.candidates))throw Error('candidates must be an array');
const normalize=s=>String(s??'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim();
const queue=payload.candidates.map((candidate,index)=>{
  const reasons=[];let hostname=null;
  try{const source=new URL(candidate.sourceUrl);if(source.protocol!=='https:')reasons.push('source_not_https');hostname=source.hostname.toLowerCase();}
  catch{reasons.push('invalid_source_url');}
  const source=registry.sources.find(s=>s.hostname===hostname);
  if(!source)reasons.push('source_not_registered');
  else{
    if(source.trust==='quarantined')reasons.push('source_quarantined');
    if(source.collectionPermission!=='approved')reasons.push('collection_permission_not_approved');
    if(!source.enabled)reasons.push('source_disabled');
  }
  for(const field of ['title','date','venue'])if(!String(candidate[field]??'').trim())reasons.push('missing_'+field);
  if(candidate.date&&!/^\d{4}-\d{2}-\d{2}$/.test(candidate.date))reasons.push('invalid_date');
  if(candidate.openingTime&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(candidate.openingTime))reasons.push('invalid_opening_time');
  if(candidate.showTime&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(candidate.showTime))reasons.push('invalid_show_time');
  if(!candidate.observedAt)reasons.push('missing_observation_timestamp');
  const rawId=[candidate.sourceUrl,candidate.title,candidate.date,candidate.venue].map(normalize).join('|');
  const id=crypto.createHash('sha256').update(rawId).digest('hex').slice(0,16);
  return {id:'review-'+id,sourceId:source?.id??null,index,status:'needs_human_review',reasons:[...new Set(reasons)].sort(),evidence:{sourceUrl:candidate.sourceUrl??null,observedAt:candidate.observedAt??null},proposed:{title:candidate.title??null,date:candidate.date??null,venue:candidate.venue??null,openingTime:candidate.openingTime??null,showTime:candidate.showTime??null}};
});
const seen=new Set();
for(const record of queue){if(seen.has(record.id))record.reasons.push('duplicate_candidate');seen.add(record.id)}
const report={schemaVersion:1,requiresExplicitHumanApproval:true,items:queue};
fs.mkdirSync(path.dirname(reportPath),{recursive:true});
fs.writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
console.log('Prepared '+queue.length+' items for human review; catalogue unchanged.');
