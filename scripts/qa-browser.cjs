#!/usr/bin/env node
// Browser smoke tests run ONLY in GitHub Actions PR review. No AI, tracking or site runtime dependency.
const {chromium}=require('playwright');
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const events=require('../events.json').events;
const root='http://127.0.0.1:8765/';
const out=path.join(__dirname,'..','out','browser-qa');
fs.mkdirSync(out,{recursive:true});
function expectedToday(){
 return new Intl.DateTimeFormat('en-CA',{year:'numeric',month:'2-digit',day:'2-digit',timeZone:'America/Sao_Paulo'}).format(new Date());
}
(async()=>{
 const browser=await chromium.launch({headless:true});
 try{
  for(const [label,viewport] of [['mobile',{width:390,height:844}],['desktop',{width:1440,height:900}]]){
   const page=await browser.newPage({viewport,deviceScaleFactor:1});
   const errors=[];
   page.on('pageerror',e=>errors.push(e.message));
   const response=await page.goto(root+'index.html',{waitUntil:'domcontentloaded',timeout:25000});
   assert.equal(response.status(),200,'homepage response');
   await page.waitForFunction(()=>!document.getElementById('agenda').textContent.includes('Carregando programação'),null,{timeout:25000});
   const today=expectedToday();
   const expected=events.filter(e=>e.date>=today&&e.status==='verified'&&e.sourceReview!=='quarantined'&&/^https:\/\//.test(e.source)).length;
   const real=await page.evaluate(()=>events.length);
   assert.equal(real,expected,'only reviewed, unexpired events reach browser');
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
   assert.ok(overflow<=3,'no horizontal page overflow: '+overflow);
   const firstImage=page.locator('#featured img').first();
   if(expected>0){
    await firstImage.scrollIntoViewIfNeeded();
    const works=await firstImage.evaluate(img=>img.complete&&img.naturalWidth>0);
    assert.ok(works,'first featured cover image loads');
   }
   await page.screenshot({path:path.join(out,label+'-agenda.png'),fullPage:true});
   const link=page.locator('a[href="./privacidade.html"]').first();
   assert.ok(await link.count(),'privacy/corrections link exists');
   // Month and filter smoke: switching to November does not throw.
   await page.locator('button[data-month="2026-11"]').click();
   assert.ok((await page.locator('#count').textContent()).includes('eventos encontrados'));
   const search=page.locator('#search');
   await search.fill('um-evento-que-nao-existe-12345');
   assert.ok((await page.locator('#count').textContent()).includes('0 eventos encontrados'));
   await search.fill('');
   await page.locator('#tab-map').click();
   assert.equal(await page.locator('#night-date').getAttribute('type'),'date');
   assert.equal(await page.locator('#map-panel').isVisible(),true);
   if(expected>0){
    await page.waitForSelector('#night-map.leaflet-container',{timeout:40000});
    await page.waitForTimeout(2000);
    await page.screenshot({path:path.join(out,label+'-mapa.png'),fullPage:true});
   }
   assert.deepEqual(errors,[],'zero uncaught JS exceptions');
   await page.close();
  }
  const page=await browser.newPage({viewport:{width:390,height:844}});
  const pagePrivacy=await page.goto(root+'privacidade.html',{waitUntil:'domcontentloaded'});
  assert.equal(pagePrivacy.status(),200,'privacy page');
  assert.match(await page.locator('h1').textContent(),/Privacidade/);
  assert.ok(await page.getByRole('link',{name:/Abra uma solicitação pública no GitHub/}).count());
  const event=events.find(e=>e.status==='verified'&&e.date>=expectedToday())||events.find(e=>e.status==='verified');
  if(event){
   const detail=await page.goto(root+'evento/'+encodeURIComponent(event.slug)+'/',{waitUntil:'domcontentloaded'});
   assert.equal(detail.status(),200,'generated event detail');
   await page.waitForSelector('#event-title',{timeout:20000});
   assert.equal(await page.locator('#event-title').textContent(),event.title);
   assert.ok(await page.getByRole('link',{name:/Privacidade, contato e correções/}).count());
   await page.screenshot({path:path.join(out,'mobile-detalhe.png'),fullPage:true});
  }
  await page.close();
  console.log('Browser QA passed: mobile, desktop, source gate, image, filters, map, privacy and detail.');
 } finally {await browser.close()}
})().catch(err=>{console.error(err);process.exitCode=1});
