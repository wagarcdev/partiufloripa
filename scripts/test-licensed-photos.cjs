const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),data=JSON.parse(fs.readFileSync(path.join(root,'data/licensed-category-photos.json'),'utf8'));
const seen=new Set();
assert.equal(data.schemaVersion,1);
assert(data.items.length>=4);
for(const a of data.items){
 assert(!seen.has(a.file));seen.add(a.file);
 assert.equal(a.rightsStatus,'approved');
 assert.equal(a.license,'Pexels License');
 assert.equal(a.rightsEvidenceUrl,'https://www.pexels.com/license/');
 assert(/^https:\/\/www\.pexels\.com\/photo\/[a-z\d-]+-\d+\/$/.test(a.sourcePageUrl));
 assert(/^\.\/assets\/photos\/[a-z0-9-]+\.webp$/.test(a.file));
 assert(a.photographer&&a.usage==='illustrative_category_not_event_photo');
 const buffer=fs.readFileSync(path.join(root,a.file));
 assert.equal(crypto.createHash('sha256').update(buffer).digest('hex'),a.sha256);
 assert(buffer.length<175000,'Photo too heavy '+a.category);
}
const catalog=JSON.parse(fs.readFileSync(path.join(root,'data/image-rights.json'),'utf8'));
assert(catalog.assets.every(a=>a.rightsStatus!=='approved'||(a.rightsEvidenceUrl&&a.license)),'specific event posters still gated');
console.log('Licensed stock photos QA: '+seen.size+' licensed files, rights metadata and hashes verified');
