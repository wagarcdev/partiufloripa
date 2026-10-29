(function(root){
 "use strict";
 const escape=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const validPhoto=file=>typeof file==="string"&&/^\.\/(?:assets\/(?:photos|covers|event-artists)\/[a-z0-9-]+\.(?:webp|svg)|images\/[\w.-]+\.webp)$/.test(file);
 function render(pos,items,selectMedia){
  if(!items?.length)return "";
  const venue=pos.venue||pos.region||"Localização aproximada";
  const label=pos.precision==="region_centroid"?"Ponto aproximado do bairro":"Local aproximado da casa";
  const heading=items.length===1?"1 evento":items.length+" eventos";
  const cards=items.map(e=>{
   const image=selectMedia(e);
   const src=validPhoto(image?.file)?image.file:"./assets/covers/cultura.svg";
   const alt=image?.kind==="artist"?"Foto de arquivo do artista":image?.kind==="event"?"Imagem licenciada do evento":image?.kind==="illustrative"?"Fotografia ilustrativa": "Arte de categoria";
   const hint=image?.kind==="artist"?"Foto do artista · arquivo":image?.kind==="illustrative"?"Foto ilustrativa":image?.kind==="cover"?"Arte ilustrativa":"";
   const date=/^\d{4}-\d{2}-\d{2}$/.test(e.date||"")?e.date.slice(8,10)+"/"+e.date.slice(5,7):"Data a confirmar";
   const time=/^([01]\d|2[0-3]):[0-5]\d$/.test(e.time||"")?e.time:"A confirmar";
   const show=/^([01]\d|2[0-3]):[0-5]\d$/.test(e.showTime||"")?'<span> · show '+escape(e.showTime)+'</span>':"";
   const venueName=pos.venue?"":'<span class="pf-map-venue">'+escape(e.venue||"Local a confirmar")+'</span>';
   const href=typeof e.slug==="string"&&/^[a-z0-9-]+$/.test(e.slug)?"./evento/"+encodeURIComponent(e.slug)+"/":"./index.html";
   return '<article class="pf-map-event"><img class="pf-map-photo" src="'+escape(src)+'" alt="'+escape(alt)+'" loading="eager">'+
    '<div class="pf-map-event-body"><span class="pf-map-category">'+escape(e.category||"Evento")+'</span>'+
    '<div class="pf-map-event-title">'+escape(e.title||"Evento")+'</div>'+
    '<div class="pf-map-meta">'+escape(date)+' · '+escape(time)+show+'</div>'+venueName+
    (hint?'<span class="pf-map-photo-hint">'+escape(hint)+'</span>':"")+
    '<a class="pf-map-event-link" href="'+escape(href)+'" aria-label="Ver detalhes de '+escape(e.title||"evento")+'">Ver evento <span aria-hidden="true">↗</span></a></div></article>';
  }).join("");
  return '<section class="pf-map-card" aria-label="Eventos em '+escape(venue)+'">'+
   '<header class="pf-map-header"><div class="pf-map-overline">PARTIUFLORIPA · '+escape(heading)+'</div>'+
   '<div class="pf-map-heading">'+escape(venue)+'</div><div class="pf-map-location">'+escape(label)+'</div></header>'+
   '<div class="pf-map-events'+(items.length>2?" pf-map-events-scroll":"")+'">'+cards+'</div></section>';
 }
 const api={render};
 if(typeof module!=="undefined"&&module.exports)module.exports=api;
 if(root)root.PartiuMapPopup=api;
})(typeof window!=="undefined"?window:null);
