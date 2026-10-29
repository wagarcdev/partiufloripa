# Checkpoint de implementacao - 2026-10-29

## Entregas deste incremento
- Conector de feed JSON HTTPS com execucao manual e validacao de permissao no registro de fontes.
- Protecoes contra SSRF: URL fixa por fonte, hostname exato, DNS IPv4 validado e fixado na requisicao TLS, sem redirects, timeout, limite de resposta, content-type JSON e formato de evento limitado.
- Workflow Actions `collect-approved-feed.yml` aceita um ID de fonte, gera tres artefatos (candidatos, reconciliacao e fila de revisao) e nao escreve no catalogo. Nao ha agendamento nem aprovacao automatica.
- Testes deterministas sem acesso a rede das regras de seguranca e do contrato de feed.
- Pagina de comparacao `map-compare.html`: Esri Light Gray vs OpenStreetMap Standard com os mesmos dados, marcadores e calor por regiao. Mapa principal preservado. Compare visual com QA real antes de homologar.
- Atualizacao da verificacao de sintaxe JS do site para incluir o comparativo.

## Evidencias e limitacoes
- O registro `data/source-registry.json` permanece com `enabled=false` e `collectionPermission=unverified` para todas as fontes. Portanto nao existe coletor de dados reais ativo.
- Para ativar um feed: documentar autorizacao, URL fixa de feed JSON, data e evidencia da revisao, ativar controle no registro, e executar workflow manual sob supervisao. Scraping HTML ou login nao estao implementados.
- OpenStreetMap tile.openstreetmap.org: uso interativo leve com atribuicao obrigatoria; nao fazer prefetch nem scans. Politica oficial: https://operations.osmfoundation.org/policies/tiles/
- CARTO foi evitado como comparacao porque seus termos de set/2026 passaram a exigir chave emitida pelo provedor para camadas gratuitas. https://carto.com/legal/basemap-terms/
- O mapa compara *posicoes regionais aproximadas*, nunca endereco exato da casa nem movimentacao de pessoas. Revisao de licenca Esri continua necessaria.
- Nada aqui representa publicacao de novos eventos, QA mobile fisico ou aceite de UX.

## Pendencias organizadas
- **Fontes:** revisar autorizacoes e contratos das primeiras APIs/feeds; conectores reais ainda bloqueados por falta de evidencia.
- **Editorial:** revisao individual do catalogo, horarios de abertura vs atracao, evidencias, cancelamentos e expiracao; excecoes sao encaminhadas ao humano.
- **UX:** aprovar entre Esri/OSM ou nova alternativa, refinar pagina de detalhe e Design System, testar em Android real.
- **Beta:** a estrategia aprovada e beta fechado com subconjunto validado, mas o GitHub Pages atual e publico tecnicamente e nao possui controle de acesso.
- **Governanca:** homologacao ALS do design, fontes, mapa e criterios de beta; dashboard gateway ainda nao comprovado.
- **Automacao periodica:** nao ativa. Considerar somente apos aprovar primeira fonte e validar uma execucao sob demanda.

## Complemento de auditoria e UI
- Pagina de detalhe refinada: separa horario de abertura e atracao, sinaliza dados ausentes, informa catalogo experimental, retira CTA de fontes em quarentena e evita tratar qualquer fonte como oficial sem prova. Commit a7024ab; QA mobile tres casos com sucesso.
- Auditoria deterministica gerou snapshot de 56 registros: 7 sem horario, 30 bairros/regioes genericos, 5 com fonte em quarentena, 12 com arquivos de imagem ainda nao autorizados e nenhum status individualmente verificado. Nao publicar dados como aprovados.
- Workflow audit-catalogue.yml: relatorio sob demanda como artefato do GitHub Actions, sem servidor local, sem cron e sem alterar o catalogo.
