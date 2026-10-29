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

## Link de prévia direto
- `?view=map&date=2026-10-29&popup=floripa-comedy-club` abre o mapa Esri na data indicada e mostra diretamente o mini-card do Floripa Comedy Club (Daniel Duncan) para avaliação visual.
- Parâmetros `date` e `popup` têm formato validado; data só é aplicada dentro dos limites do calendário. Depois de abrir, alterações normais do usuário no mapa continuam livres, sem forçar novamente a prévia.

## QA no site publicado
- Commits: `b72c1e5` (cards), `90c61d6` (largura mobile), `8f1c683` (zoom/contraste), `a2ed9d4` (link de prévia). O deploy final foi concluído com sucesso: https://github.com/wagarcdev/partiufloripa/actions/runs/40972823372
- Chrome em viewports 390×844 e 1440×900, contra site público: HTTP 200, popup do Daniel Duncan com fotografia Pexels licenciada, título, data e dois horários, CTA válido; 0 erros JS, sem scroll horizontal.
- Popup único renderizado com largura 302 px; controle de zoom no canto inferior direito, sem sobreposição no título. Inspeção da captura mobile: contraste e dimensões adequados.
- Cenário simulado de 3 eventos no mesmo ponto: 3 mini-cards e rolagem interna funcional em ambos os tamanhos; conteúdo e links separados, nenhum evento eliminado.
- URL `/?view=map&date=2026-10-29&popup=floripa-comedy-club` validada no navegador: abre automaticamente o mapa Esri em 29/10 e o mini-card do Floripa Comedy Club, foto carregada, controle de zoom correto.
- Visualização não comprova licença de cartazes específicos; segue usando seletor determinístico atual e imagens permitidas.
