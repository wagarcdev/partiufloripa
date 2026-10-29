const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),assert=require('node:assert/strict'),{spawnSync}=require('node:child_process');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'pf-candidates-'));
try{
 const examples={candidates:[
 {title:'MUNDO M',venue:'Stage Music Park',date:'2026-11-13',openingTime:'22:00',sourceUrl:'https://www.pensanoevento.com.br/eventos/109366/mundo-m-florianopolis',observedAt:'2026-10-29T12:00:00-03:00',sourcePolicy:'approved'},
 {title:'Unconfirmed',venue:'Unknown',date:'2026-11-21',sourceUrl:'https://example.test/e',observedAt:'2026-10-29',sourcePolicy:'pending'},
 {title:'New Event',venue:'Test Venue',date:'2026-11-22',sourceUrl:'https://example.test/new',observedAt:'2026-10-29',sourcePolicy:'approved'}
 ]};
 const input=path.join(tmp,'candidates.json');fs.writeFileSync(input,JSON.stringify(examples));
 const r=spawnSync(process.execPath,[path.join(__dirname,'reconcile-candidates.cjs'),input],{encoding:'utf8'});
 assert.equal(r.status,0,r.stderr);
 const report=JSON.parse(r.stdout);
 assert.equal(report.summary.total,3);assert.equal(report.summary.needsReview,1);
 assert.equal(report.summary.matched,1);assert.equal(report.summary.newCandidates,1);
 assert.equal(report.items[1].status,'needs_review');
 console.log('Candidate reconciliation tests passed');
}finally{fs.rmSync(tmp,{recursive:true,force:true})}
