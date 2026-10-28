# Arquitetura — realidade e evolução

**Atual:** site estático HTML/CSS/JS em `index.html`; `events.json` com objeto `{updated,events}`; cartazes `images/*.webp`; `coastline.geojson` com contornos municipais; Leaflet + leaflet.heat sob demanda via CDN; deploy GitHub Actions/Pages em `main`. Sem backend.

**Contrato atual de evento:** `date` YYYY-MM-DD, `time` HH:MM, `title`, `venue`, `category`, `source` URL, `region`, `note`, `image` (opcional). Os sete primeiros são essenciais para exibição. Não alterar silenciosamente o contrato.

**Estado observado em 2026-10-28:** 56 ocorrências, 14 arquivos de imagem locais. Correspondência, licenças e horários não foram auditados integralmente.

**Mapa:** contorno municipal real; nomes de regiões por coordenadas aproximadas; calor agregado por região de eventos noturnos, não localização precisa de cada casa nem fluxo de pessoas.

**Contrato proposto, ainda NÃO implementado:** `id` estável; `sourceUrl`, `lastVerifiedAt`, `status` (draft/verified/cancelled/expired), `collectionMethod`, `scrapingPermission`, `imageSourceUrl`, `imageLicense`, `imagePermissionEvidence`, `venueId`, coordenadas verificadas; `affiliateUrl` somente em fase comercial.

**Dívidas:** JS/CSS/HTML monolíticos; testes UI ausentes; dados sem proveniência estruturada; `Object.groupBy` requer teste em Android antigo; CDN externo; sem pipeline de ingestão. Preferir alterações reversíveis e sem custo fixo.
