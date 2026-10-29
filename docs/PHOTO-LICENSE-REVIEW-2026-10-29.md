# Foto editorial: autorização geral vs cartaz de evento

**Decisão operacional:** fotos genéricas de bancos com licença válida podem aparecer no portal como *fotos ilustrativas da categoria*; não declarar que retratam artistas, casas ou shows específicos. Os cartazes das páginas oficiais continuam pendentes de evidências de direitos individuais.

## Fontes jurídicas verificadas em 2026-10-29
- Pexels permite reprodução e modificação inclusive comercial sob a Pexels License: https://www.pexels.com/pt-br/licenca/
- FAQ de uso comercial: https://help.pexels.com/hc/pt/articles/360042295214-Posso-usar-as-fotos-e-os-v%C3%ADdeos-em-um-projeto-comercial
- Termos: https://www.pexels.com/pt-br/terms-of-service/ (não implicar endosso de pessoas/marcas, não vender ou redistribuir fotos isoladas)
- Unsplash é alternativa sob sua licença: https://unsplash.com/pt-br/licen%C3%A7a (crédito cortesia; restrição a replicar concorrente de fotos)
- Guia de direitos autorais do Senado: https://www12.senado.leg.br/manualdecomunicacao/guia-de-direitos-autorais — imagem publicada em site ou perfil público não significa licença de reprodução comercial.
- Wikimedia Commons/Openverse são candidatos para fotos de artistas específicos, mas cada arquivo deve ter licença livre verificável (inclusive comercial), atribuição e requisitos de compartilhamento respeitados.

## Versão implementada para avaliação
- 6 arquivos WebP locais em `assets/photos/`, baixados individualmente de páginas Pexels e otimizados a 1200x675; aproximadamente 240 KB no total.
- Registro em `data/licensed-category-photos.json` com foto, autor, URL original, URL da licença, categoria e SHA-256.
- Categorias: Humor (microfone e palco), Baladas (globo espelhado), Shows (palco e público em silhueta), Teatro (cortina e palco), Cinema (poltronas) e Festivais (evento genérico).
- Cards apresentam o selo **Foto ilustrativa**. Página `creditos.html` exibe o fotógrafo e link para cada origem. Outras categorias continuam com ilustrações próprias em SVG.
- Pipeline tem prioridade: **foto do evento somente com licença comprovada** > foto genérica da categoria com licença e metadados > SVG próprio.
- Fotos antigas de cartazes em `images/` permanecem com `rightsStatus=pending`; não liberadas pela licença Pexels.
- O enquadramento evita identificar artista ou casa em material genérico. Nenhum direito de imagem de terceiro não verificável está presumido.
- Este não é um parecer jurídico; qualquer denúncia/restrição de direitos exige nova revisão e possível remoção.

## QA e gates
- `node scripts/test-licensed-photos.cjs` verifica hash, existência, autoria, proveniência e tamanho.
- Testar carregamento dos cards no Chrome, legenda ilustrativa, link para créditos e regressão do mapa antes de declarar deploy concluído.

## Visual polish: multiple alternatives per category
- Expanded to 11 individually sourced Pexels stock photographs: four Humor, two Baladas, two Shows, one each for Teatro/Cinema/Festivais. Each additional item has separate photographer, license link, original photo page and file hash.
- The displayed photo for each event is chosen deterministically using its stable event ID. This reduces repeated imagery without inventing an event-specific photo or claiming any person depicted is participating in that event.
