from pathlib import Path
p=Path(__file__).resolve().parent.parent/'index.html'
s=p.read_text(encoding='utf-8')
start=s.index('function card(e){')
end=s.index('function filtered(){',start)
new=r'''function card(e,variant="search"){const symbol=categoryIcons[e.category]||"📅";const fallback=venueImages[e.venue]||"";const imageSrc=e.image||fallback;const isVenueImage=!e.image&&!!fallback;const dt=new Date(e.date+"T12:00:00Z");const day=new Intl.DateTimeFormat("pt-BR",{weekday:"short",timeZone:"UTC"}).format(dt).replace(".","").toUpperCase();const dateLabel=day+", "+dateShort.format(dt).toUpperCase().replace(".","");const hour=e.time?e.time.slice(0,5).replace(":00","H"):"Horário a confirmar";const tag='<span class="event-category"><span aria-hidden="true">'+symbol+'</span> '+esc(e.category)+'</span>';const dateTag='<span class="event-date"><span aria-hidden="true">▦</span> '+esc(dateLabel)+' <em>'+esc(hour)+'</em></span>';const graphic='<div class="event-art"><span class="event-art-symbol" aria-hidden="true">'+symbol+'</span></div>';const image=imageSrc?'<img src="'+esc(imageSrc)+'" alt="'+(isVenueImage?'Identidade visual de '+esc(e.venue):'Imagem de divulgação do evento')+'" loading="lazy" onerror="this.hidden=true;this.parentElement.classList.add(\'image-failed\')">':'';const media='<div class="event-media'+(isVenueImage?' venue-art':'')+'" data-cat="'+esc(e.category)+'">'+image+graphic+(variant==="featured"?'<div class="event-overlays">'+tag+dateTag+'</div>':'')+'</div>';const place='<div class="event-place"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg><div><strong>'+esc(e.venue||"Local a confirmar")+'</strong><small>'+esc(e.region||"Florianópolis")+' · Florianópolis</small></div></div>';const price=e.price!=null&&String(e.price).trim()?'<span class="event-price">A partir de <strong>'+esc(e.price)+'</strong> <span aria-hidden="true">💵</span></span>':'<span class="event-price event-price-unknown">Consultar valores</span>';return '<article class="feature event-card '+(variant==="featured"?'event-featured':'event-search')+'">'+media+'<div class="event-info">'+(variant==="search"?'<div class="event-meta">'+tag+dateTag+'</div>':'')+'<h3>'+esc(e.title)+'</h3>'+place+'<div class="event-bottom">'+price+'<a class="event-action" href="'+esc(e.source)+'" target="_blank" rel="noopener noreferrer" aria-label="Ver detalhes de '+esc(e.title)+' na fonte">↗</a></div></div></article>'}
'''
s=s[:start]+new+s[end:]
s=s.replace('featured.map(card).join("")','featured.map(e=>card(e,"featured")).join("")')
css=r'''
/* A1.10 — approved event cards: featured landscape / search horizontal */
.feature.event-card{background:#151b25;color:#fff;border:1px solid #343d4a;border-radius:16px;overflow:hidden;display:flex;min-width:0;box-shadow:none}
.feature.event-featured{flex:0 0 clamp(310px,31%,370px);flex-direction:column;padding:12px;gap:0}
.feature.event-search{flex-direction:row;padding:10px;gap:12px;min-height:148px}
.event-media{position:relative;overflow:hidden;border-radius:10px;background:linear-gradient(135deg,#1d365d,#7555a0);isolation:isolate}
.event-featured .event-media{width:100%;aspect-ratio:16/9}
.event-search .event-media{flex:0 0 132px;align-self:stretch;min-height:128px}
.event-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1}
.event-art{position:absolute;inset:0;display:grid;place-items:center}
.event-art-symbol{font-size:54px;opacity:.75}
.event-media.venue-art img{object-fit:contain;padding:12px;background:#102e35}
.event-overlays{position:absolute;z-index:2;inset:0 0 auto;display:flex;justify-content:space-between;align-items:flex-start;gap:6px;padding:9px;background:linear-gradient(#0008,transparent)}
.event-category,.event-date{display:inline-flex;align-items:center;gap:5px;border-radius:6px;padding:5px 7px;font-size:11px;font-weight:750;white-space:nowrap;line-height:1.3}
.event-category{background:#263e32ed;color:#c9f48a}
.event-date{background:#15221de8;border:1px solid #8ead62;color:#fff}
.event-date em{color:#c9f48a;font-style:normal}
.event-info{display:flex;flex-direction:column;min-width:0;flex:1}
.event-featured .event-info{padding:12px 1px 0}
.event-search .event-info{padding:2px 0}
.event-card .event-info h3{font-size:17px;font-weight:750;line-height:1.3;color:#fff;margin:0 0 10px;letter-spacing:-.25px}
.event-search .event-info h3{font-size:15px;margin:7px 0}
.event-meta{display:flex;justify-content:space-between;flex-wrap:wrap;gap:5px}
.event-search .event-category,.event-search .event-date{font-size:10px;padding:4px 6px}
.event-place{display:flex;align-items:center;gap:10px;min-width:0;margin-bottom:10px}
.event-place svg{width:24px;height:24px;flex:none;color:#c9f48a}
.event-place div{display:flex;flex-direction:column;min-width:0;gap:2px}
.event-place strong{font-size:13px;color:#f0f3f7;line-height:1.2}
.event-place small{font-size:11px;color:#aeb9c8;line-height:1.3}
.event-bottom{margin-top:auto;border-top:1px solid #343d4a;padding-top:10px;display:flex;align-items:center;justify-content:space-between;gap:8px}
.event-price{font-size:13px;color:#fff}.event-price strong{color:#b7dc91;font-weight:750}.event-price-unknown{color:#aeb9c8}
.event-action{color:#c9f48a;font-size:20px;font-weight:700;text-decoration:none;line-height:1}
.cards{grid-template-columns:repeat(2,minmax(0,1fr))}
@media(max-width:850px){.cards{grid-template-columns:1fr}.event-featured.feature{flex-basis:clamp(300px,68%,370px)}}
@media(max-width:570px){.event-featured.feature{flex:0 0 min(88vw,350px)}.feature.event-featured .event-info h3{font-size:17px}.feature.event-search{gap:9px;padding:8px}.event-search .event-media{flex-basis:100px;min-height:122px}.event-search .event-info h3{font-size:13px}.event-search .event-place svg{width:20px;height:20px}.event-search .event-place strong{font-size:11px}.event-search .event-place small{font-size:10px}.event-search .event-category,.event-search .event-date{font-size:9px;padding:3px 5px}.event-search .event-price{font-size:11px}.event-search .event-info{padding:0}}
'''
s=s.replace('</style>',css+'</style>',1)
p.write_text(s,encoding='utf-8')
print('Updated',p)
