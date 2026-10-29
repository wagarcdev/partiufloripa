# Popup editorial do mapa — 2026-10-29

Implementação do pedido para que o balão do mapa Esri seja um mini-card visual e siga o design editorial aprovado.

## Comportamento
- 1 evento no local: sem cabecalho externo; um card com foto a esquerda, nome da casa acima da categoria, titulo, horarios e link.
- Varios eventos no mesmo local/regiao: cada minicard mostra nome da casa antes da categoria e seu proprio link, com lista rolavel e sem cabecalho externo.
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

## Refinamento compacto, a pedido do cliente
- Feedback: o popup anterior ocupava grande parte do mapa porque tinha card externo com cabeçalho e card interno. Solução: retirar o cabeçalho inteiro para eventos únicos; o mini-card passa a ocupar o popup todo, sem perder categoria, foto, nome, data, horário, local aproximado ou CTA.
- Para múltiplos eventos no ponto, mantém apenas uma linha de contexto da casa e uma lista rolável compacta; nenhum registro é suprimido.
- Implementação commit `d0cf261`, GitHub Pages Actions `40973973013` com jobs validate e deploy concluídos com sucesso.
- QA Chrome no site publicado: 390x844 e 1440x900, popup do Daniel Duncan em 29/10 com **284 px de largura e 132 px de altura**; anteriormente tinha aproximadamente 302 px de largura e mais de 200 px de altura. Foto carregada, nome, dois horários, casa e link presentes, sem erros JavaScript nem transbordamento horizontal. Screenshot mobile inspecionada e legível.
- Teste de três eventos simulados no mesmo local: três mini-cards preservados, lista com rolagem interna; 220 px de altura no mobile e 246 px no desktop. Este cenário está validado com fixture, não é um trio de eventos reais do catálogo de 29/10.
- Contraste e legenda de mídia continuam conforme as regras já aprovadas. Mapa-base Esri e heatmap não alterados.

## Ajuste visual solicitado em 29/10/2026
- Removidas as linhas superiores do popup. Nome da casa movido para a coluna da direita, acima da categoria, inclusive em pontos com varios eventos.
- Legenda de precisao geografica removida da area visual do card, preservada em title e aria-label. O mapa continua informando que os pontos sao aproximados.
- Card unico: 284 x 122 px, incluindo bordas; imagem preservada, CTA e horarios visiveis.
- QA real em Chrome headless: viewports 390x844 e 1440x900, temas claro e escuro, sem erros JS, sem transbordamento, 3 eventos ficticios para validar lista e rolagem.
- Testes: node scripts/test-map-popup.cjs, node scripts/check-site.cjs e node --check scripts/map-popup.js aprovados. validate-events.cjs aponta 14 problemas preexistentes de horario em 7 eventos, nao relacionados ao popup.
