const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),{spawnSync}=require('node:child_process');
const root=path.resolve(__dirname,'..'),dir=fs.mkdtempSync(path.join(os.tmpdir(),'pf-review-'));
try{
 const input=path.join(dir,'candidates.json'),output=path.join(dir,'review.json');
 fs.writeFileSync(input,JSON.stringify({candidates:[
 {title:'MUNDO M',date:'2026-11-13',venue:'Stage Music Park',sourceUrl:'https://www.pensanoevento.com.br/eventos/example',openingTime:'22:00',observedAt:'2026-10-29'},
 {title:'Fresno',date:'2026-11-06',venue:'',sourceUrl:'https://emfloripa.ia.br/agenda/'},
 {title:'Untrusted',date:'2026-11-07',venue:'Place',sourceUrl:'http://unknown.invalid/'},
 {title:'MUNDO M',date:'2026-11-13',venue:'Stage Music Park',sourceUrl:'https://www.pensanoevento.com.br/eventos/example',openingTime:'22:00',observedAt:'2026-10-29'}
 ]}));
 const result=spawnSync(process.execPath,[path.join(root,'scripts/prepare-review-queue.cjs'),input,output],{encoding:'utf8'});
 assert.equal(result.status,0,result.stderr);
 const queue=JSON.parse(fs.readFileSync(output,'utf8'));
 assert.equal(queue.items.length,4);
 assert.equal(queue.requiresExplicitHumanApproval,true);
 assert(queue.items.every(x=>x.status==='needs_human_review'));
 assert(queue.items[0].reasons.includes('collection_permission_not_approved'));
 assert(queue.items[1].reasons.includes('source_quarantined'));
 assert(queue.items[2].reasons.includes('source_not_registered'));
 assert(queue.items[2].reasons.includes('source_not_https'));
 assert(queue.items[3].reasons.includes('duplicate_candidate'));
 console.log('Review queue tests passed');
}finally{fs.rmSync(dir,{recursive:true,force:true})}
