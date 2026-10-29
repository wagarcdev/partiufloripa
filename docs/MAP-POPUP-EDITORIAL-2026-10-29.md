# Popup editorial do mapa — 2026-10-29

Implementação do pedido para que o balão do mapa Esri seja um mini-card visual e siga o design editorial aprovado.

## Comportamento
- 1 evento no local: cabeçalho com casa ou bairro, fotografia licenciada/arquivo, categoria, título, dia, horário e link direto para a página de detalhes.
- Vários eventos no mesmo local/região: mesmo cabeçalho com contador e lista de mini-cards rolável (sem cortar eventos), imagens e links individuais.
- Imagens são selecionadas com `PartiuMedia.select`, o mesmo seletor do catálogo, com as mesmas regras de prioridade, licença e imagem consistente por casa.
- Se a casa não tiver coordenada precisa, a legenda distingue localização aproximada da casa e ponto genérico do bairro. Nunca inferir endereço mais específico do que o registrado.
- Escape em textos e validação local do caminho da imagem e slug; navegação preserva URL SEO existente.
- Layout compacto responsivo em dispositivos móveis, contraste escuro/verde petróleo com detalhes dourados, sem modificar o mapa-base Esri nem a camada de calor.

## Testes
- `node scripts/test-map-popup.cjs`: versão com evento único, múltiplos eventos, descrições, labels, rota, sanitização de textos/URLs e imagem segura.
- `node scripts/check-site.cjs`: JS embutido da página estática.
- Workflow GitHub Pages executa teste novo junto dos testes de catálogo/mídia.
- Chrome/Playwright contra site publicado deve validar abertura do balão, render de imagem e link do evento em viewport mobile/desktop, e cenário de múltiplos eventos; testes de navegador devem ser documentados após deploy.
