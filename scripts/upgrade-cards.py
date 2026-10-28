from pathlib import Path
import re
root=Path(__file__).resolve().parent.parent
p=root/'index.html'
s=p.read_text(encoding='utf-8')
s=s.replace('const venueImages={"Bar do Espartano":"./images/66b79f7b747f8c3c.webp"};', 'const venueImages={"Bar do Espartano":"./images/66b79f7b747f8c3c.webp"};function eventUrl(e){return "./evento.html?date="+encodeURIComponent(e.date)+"&title="+encodeURIComponent(e.title)+"&venue="+encodeURIComponent(e.venue)};')
s=s.replace("const media='<div class=\"event-media'+(isVenueImage?' venue-art':'')+'\"","const media='<div class=\"event-media'+(isVenueImage?' venue-art':'')+'\"")
s=s.replace("const graphic='<div class=\"event-art\"><span class=\"event-art-symbol\" aria-hidden=\"true\">'+symbol+'</span></div>';","const graphic='<div class=\"event-art\"><span class=\"event-art-symbol\" aria-hidden=\"true\">'+symbol+'</span><span class=\"event-art-venue\">'+esc(e.venue||'Local a confirmar')+'</span></div>';")
s=s.replace("const image=imageSrc?'<img src=\"'+esc(imageSrc)+'\" alt=\"'+(isVenueImage?'Identidade visual de '+esc(e.venue):'Imagem de divulgação do evento')+'\" loading=\"lazy\" onerror=\"this.hidden=true;this.parentElement.classList.add(\\'image-failed\\')\">':'';","const image=imageSrc?'<img src=\"'+esc(imageSrc)+'\" alt=\"'+(isVenueImage?'Identidade visual de '+esc(e.venue):'Imagem de divulgação do evento')+'\" loading=\"lazy\" onerror=\"this.hidden=true;this.parentElement.classList.add(\\'image-failed\\')\">':'';")
s=s.replace("+(variant===\"featured\"?'<div class=\"event-overlays\">'+tag+dateTag+'</div>':'')+'</div>';","+(isVenueImage?'<span class=\"event-venue-photo-label\">Imagem da casa</span>':'')+(variant===\"featured\"?'<div class=\"event-overlays\">'+tag+dateTag+'</div>':'')+'</div>';")
old="return '<article class=\"feature event-card '+(variant===\"featured\"?'event-featured':'event-search')+'\">'+media+'<div class=\"event-info\">'"
new="return '<a class=\"feature event-card '+(variant===\"featured\"?'event-featured':'event-search')+'\" href=\"'+esc(eventUrl(e))+'\" aria-label=\"Ver detalhes de '+esc(e.title)+'\">'+media+'<div class=\"event-info\">'"
assert old in s
s=s.replace(old,new)
s=s.replace("'<a class=\"event-action\" href=\"'+esc(e.source)+'\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Ver detalhes de '+esc(e.title)+' na fonte\">↗</a></div></div></article>'","'<span class=\"event-action\" aria-hidden=\"true\">↗</span></div></div></a>'")
# Ensure no nested anchor remains in card
assert "aria-label=\"Ver detalhes de '+esc(e.title)+' na fonte\"" not in s
css="""
/* A1.11: fully clickable cards and safe image framing */
a.event-card{text-decoration:none;color:#fff;cursor:pointer}
a.event-card:focus-visible{outline:3px solid #c9f48a;outline-offset:3px}
a.event-card:hover{border-color:#8ead62}
.event-media img{object-fit:contain;background:#10232b}
.event-media.venue-art img{object-fit:contain}
.event-art{flex-direction:column;gap:7px;padding:12px;text-align:center}
.event-art-venue{font-size:11px;font-weight:750;color:#e6f5f1;overflow-wrap:anywhere;line-height:1.25}
.event-venue-photo-label{position:absolute;z-index:2;bottom:7px;left:7px;padding:3px 6px;background:#0b2029e8;border-radius:5px;color:#fff;font-size:10px}
.event-info h3{overflow-wrap:anywhere;hyphens:auto}
.event-date{white-space:normal}
.event-overlays{flex-wrap:wrap}
.event-featured .event-media{min-height:170px}
@media(max-width:570px){.event-featured .event-media{min-height:150px}.event-search .event-media{min-height:126px}}
"""
s=s.replace("</style>",css+"</style>",1)
p.write_text(s,encoding='utf-8')
print('updated',p)
