#!/usr/bin/env node
// Fetch a single explicitly approved JSON feed. No scraping, no arbitrary URLs,
// no automatic publication. Source registry is deny-by-default.
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const https=require('node:https');
const dns=require('node:dns').promises;
const net=require('node:net');
const root=path.resolve(__dirname,'..');
const MAX_BYTES=1024*1024;
function isPublicIPv4(ip){
  if(net.isIP(ip)!==4)return false;
  const [a,b,c]=ip.split('.').map(Number);
  if(a===0||a===10||a===127||a>=224)return false;
  if(a===100&&b>=64&&b<=127)return false;
  if(a===169&&b===254)return false;
  if(a===172&&b>=16&&b<=31)return false;
  if(a===192&&(b===168||b===0&&c===0||b===0&&c===2))return false;
  if(a===198&&(b===18||b===19||b===51&&c===100))return false;
  if(a===203&&b===0&&c===113)return false;
  if(a===192&&b===88&&c===99)return false;
  return true;
}
function approvedConfig(registry,id){
  if(!registry||registry.defaultPolicy!=='deny'||!Array.isArray(registry.sources))throw Error('registry_invalid');
  const source=registry.sources.find(s=>s.id===id);
  if(!source)throw Error('source_not_registered');
  if(source.enabled!==true||source.collectionPermission!=='approved'||source.trust!=='approved')throw Error('source_not_authorized');
  if(!source.permissionEvidenceUrl||!source.permissionReviewedAt)throw Error('permission_evidence_required');
  const u=new URL(source.feedUrl);
  if(u.protocol!=='https:'||u.username||u.password||u.port||u.hash||u.hostname!==source.hostname||net.isIP(u.hostname))throw Error('unsafe_feed_url');
  if(source.feedFormat!=='json-v1')throw Error('unsupported_feed_format');
  return {source,url:u};
}
function normalizeFeed(data,source,observedAt){
  if(!data||!Array.isArray(data.events)||data.events.length>300)throw Error('invalid_feed_schema');
  const candidates=data.events.map((e,i)=>{
    if(!e||typeof e!=='object'||Array.isArray(e))throw Error('invalid_event_'+i);
    const get=k=>typeof e[k]==='string'?e[k].trim():'';
    const sourceUrl=get('sourceUrl');
    let u;
    try{u=new URL(sourceUrl)}catch{throw Error('invalid_event_url_'+i)}
    if(u.protocol!=='https:'||u.hostname!==source.hostname||u.username||u.password)throw Error('external_event_url_'+i);
    for(const field of ['title','date','venue'])if(!get(field))throw Error('missing_'+field+'_'+i);
    if(!/^\d{4}-\d{2}-\d{2}$/.test(get('date')))throw Error('invalid_date_'+i);
    for(const field of ['openingTime','showTime'])if(get(field)&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(get(field)))throw Error('invalid_'+field+'_'+i);
    return {title:get('title').slice(0,200),date:get('date'),venue:get('venue').slice(0,200),openingTime:get('openingTime')||undefined,showTime:get('showTime')||undefined,sourceUrl:u.href,observedAt,sourcePolicy:'approved',sourceId:source.id};
  });
  return {schemaVersion:1,candidates};
}
async function readApprovedJson(url,options={}){
  const lookup=options.lookup||dns.lookup;
  // Resolve and pin the validated address to prevent DNS rebinding during the TLS connection.
  const found=await lookup(url.hostname,{all:true,family:4});
  if(!Array.isArray(found)||!found.length||found.some(r=>!isPublicIPv4(r.address)))throw Error('unsafe_resolved_address');
  const address=found[0].address;
  return new Promise((resolve,reject)=>{
    const req=https.get(url,{headers:{'Accept':'application/json','User-Agent':'PartiuFloripaFeed/1.0 (+https://github.com/wagarcdev/partiufloripa)'},timeout:8000,lookup:(host,opts,done)=>done(null,address,4)},res=>{
      if(res.statusCode!==200){res.resume();return reject(Error('http_'+res.statusCode))}
      if(!/application\/(?:[\w.-]+\+)?json/i.test(res.headers['content-type']||'')){res.resume();return reject(Error('not_json'))}
      if(Number(res.headers['content-length'])>MAX_BYTES){res.destroy();return reject(Error('body_too_large'))}
      const chunks=[];let count=0;
      res.on('data',chunk=>{count+=chunk.length;if(count>MAX_BYTES){res.destroy(Error('body_too_large'));return}chunks.push(chunk)});
      res.on('end',()=>{try{resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')))}catch(e){reject(Error('invalid_json'))}});
      res.on('error',reject);
    });
    req.on('timeout',()=>req.destroy(Error('timeout')));
    req.on('error',reject);
  });
}
async function main(){
  const [id,output]=process.argv.slice(2);
  if(!id||!output)throw Error('Usage: node scripts/collect-approved-feed.cjs SOURCE_ID OUTPUT_FILE');
  const registry=JSON.parse(fs.readFileSync(path.join(root,'data/source-registry.json'),'utf8'));
  const {source,url}=approvedConfig(registry,id);
  const data=await readApprovedJson(url);
  const normalized=normalizeFeed(data,source,new Date().toISOString());
  fs.mkdirSync(path.dirname(output),{recursive:true});
  fs.writeFileSync(output,JSON.stringify(normalized,null,2)+'\n',{flag:'wx'});
  console.log('Generated '+normalized.candidates.length+' candidates; no events were published.');
}
if(require.main===module)main().catch(e=>{console.error('Collection denied/failed: '+e.message);process.exitCode=1});
module.exports={approvedConfig,normalizeFeed,isPublicIPv4,readApprovedJson};
