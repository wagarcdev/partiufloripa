const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'data/image-rights.json'),'utf8'));
assert.equal(data.policy,'deny-unless-approved-with-rights-evidence');
for(const a of data.assets)assert(a.rightsStatus!=='approved'||(a.rightsEvidenceUrl&&a.license));
for(const n of ['baladas','shows','humor','teatro','cinema','danca','festivais','feiras','cultura']){
 const svg=fs.readFileSync(path.join(root,'assets/covers',n+'.svg'),'utf8');
 assert(svg.startsWith('<svg ')&&svg.includes('</svg>')&&!svg.includes('<image '));
}
console.log('Image rights and original covers tests passed');
