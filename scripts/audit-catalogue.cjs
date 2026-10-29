#!/usr/bin/env node
// Deterministic snapshot of catalogue QA defects. Never changes the catalogue.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const today=process.argv[2];
if(!/^\d{4}-\d{2}-\d{2}$/.test(today||''))throw Error('Usage: node scripts/audit-catalogue.cjs YYYY-MM-DD [report.md]');
const out=process.argv[3];
const events=JSON.parse(fs.readFileSync(path.join(root,'events.json'),'utf8')).events;
const summary={total:events.length,missingTime:0,genericRegion:0,quarantined:0,pastDate:0,unreviewed:0,hasImage:0};
const rows=events.map(e=>{
 const issues=[];
 if(!e.time){issues.push('hour_missing');summary.missingTime++}
 if(!e.region||e.region==='Florianópolis'){issues.push('region_generic');summary.genericRegion++}
 if(e.sourceReview==='quarantined'){issues.push('source_quarantined');summary.quarantined++}
 if(e.date<today){issues.push('date_in_past');summary.pastDate++}
 if(e.status!=='verified'){issues.push('not_editorially_verified');summary.unreviewed++}
 if(e.image)summary.hasImage++;
 return {date:e.date,title:e.title,id:e.id,issues};
});
const esc=s=>String(s??'').replace(/\|/g,'\\|').replace(/\r?\n/g,' ');
const lines=[
 '# Auditoria deterministica de catalogo - '+today,
 '',
 'Instantaneo da qualidade dos dados. Nao representa verificacao de fontes individuais ou aprovacao de publicacao.',
 '',
 '| Medida | Ocorrencias |','|---|---:|',
 ...Object.entries(summary).map(([k,v])=>'| '+esc(k)+' | '+v+' |'),
 '',
 '## Registros prioritarios de revisao',
 '',
 '| Data | Evento | ID | Pendencias |','|---|---|---|---|',
 ...rows.filter(e=>e.issues.some(x=>x!=='not_editorially_verified')).sort((a,b)=>a.date.localeCompare(b.date)).map(e=>'| '+esc(e.date)+' | '+esc(e.title)+' | '+esc(e.id)+' | '+esc(e.issues.join(', '))+' |'),
 '',
 'A ausencia de horarios ou bairros nao deve ser corrigida por inferencia. Consultar a pagina individual, guardar evidencias e encaminhar para revisao humana.',
 ''
];
const result=lines.join('\n');
if(out){fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,result)}else process.stdout.write(result);
