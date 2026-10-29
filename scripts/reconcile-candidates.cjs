#!/usr/bin/env node
// PartiuFloripa: deterministic, non-publishing candidate reconciliation.
// Usage: node scripts/reconcile-candidates.cjs path/to/candidates.json [output.json]
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const [input,output]=process.argv.slice(2);
if(!input){console.error('Usage: node scripts/reconcile-candidates.cjs candidates.json [report.json]');process.exit(2)}
const current=JSON.parse(fs.readFileSync(path.join(root,'events.json'),'utf8')).events;
const payload=JSON.parse(fs.readFileSync(input,'utf8'));
if(!Array.isArray(payload.candidates))throw Error('candidates must be an array');
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').trim().toLowerCase().replace(/\s+/g,' ');
const normalizedUrl=s=>{try{const u=new URL(s);if(u.protocol!=='https:')return null;u.hash='';return u.toString()}catch{return null}};
const key=e=>[norm(e.title),norm(e.venue),e.date].join('|');
const byKey=new Map(current.map(e=>[key(e),e]));
const byUrl=new Map(current.map(e=>[normalizedUrl(e.source),e]).filter(([u])=>u));
const rows=[];
for(const [index,c] of payload.candidates.entries()){
 const reasons=[];const link=normalizedUrl(c.sourceUrl);
 if(!link)reasons.push('missing_secure_source_url');
 if(!/^\d{4}-\d{2}-\d{2}$/.test(c.date||''))reasons.push('missing_or_invalid_date');
 if(!String(c.title||'').trim())reasons.push('missing_title');
 if(!String(c.venue||'').trim())reasons.push('missing_venue');
 if(c.openingTime&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(c.openingTime))reasons.push('invalid_opening_time');
 if(c.showTime&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(c.showTime))reasons.push('invalid_show_time');
 if(!c.observedAt)reasons.push('missing_observation_timestamp');
 if(!c.sourcePolicy||c.sourcePolicy!=='approved')reasons.push('source_not_approved');
 const match=(link&&byUrl.get(link))||byKey.get(key(c));
 if(match&&c.date!==match.date)reasons.push('date_conflict');
 if(match&&c.openingTime&&match.time&&c.openingTime!==match.time)reasons.push('time_conflict');
 if(match&&c.venue&&norm(c.venue)!==norm(match.venue))reasons.push('venue_conflict');
 const status=reasons.length?'needs_review':match?'matched':'new_candidate';
 rows.push({candidateIndex:index,matchId:match?.id||null,status,reasons,sourceUrl:link,title:c.title||null,date:c.date||null});
}
const report={schemaVersion:1,generatedFrom:{catalogue:'events.json',candidates:path.basename(input)},summary:{total:rows.length,needsReview:rows.filter(x=>x.status==='needs_review').length,newCandidates:rows.filter(x=>x.status==='new_candidate').length,matched:rows.filter(x=>x.status==='matched').length},items:rows};
const result=JSON.stringify(report,null,2)+'\n';
if(output){fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,result)}else process.stdout.write(result);
// Never modify events.json or auto-publish; a matched record is NOT editorial approval.
