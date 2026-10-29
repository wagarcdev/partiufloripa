# QA de navegador - 2026-10-29

## Comparativo cartografico
Teste realizado em Chrome headless via Playwright contra GitHub Pages, sem login e sem alterar dados.

- Viewport mobile 390 x 844: HTTP 200, 2 camadas selecionaveis, mapa Leaflet presente, alternancia para OpenStreetMap com atribuicao exibida, zero erros de pagina e sem rolagem horizontal.
- Viewport desktop 1440 x 900: mesmos resultados.
- No dia selecionado automaticamente, 1 evento e 1 regiao foram mapeados no teste. Sem inferir precisao de endereco ou qualidade final da densidade.
- Nao equivale a aprovacao visual ou teste em Android fisico. Nao houve captura aprovada para design.
- Fonte e termos do tile OSM: https://operations.osmfoundation.org/policies/tiles/

## Detalhes internos
- Refinamento implementado como rascunho: horarios de abertura e atracao separados, alertas de dados ausentes, fonte contestada sem CTA e aviso de catalogo experimental.
- Validacao estrutural de JS executada; navegador real sera testado separadamente antes de homologacao.

## Testes posteriores de detalhes no Chrome (2026-10-29)
- Daniel Duncan: URL amigavel HTTP 200, abertura 19:00 e inicio de atracao 21:00 exibidos separadamente, CTA presente.
- Armandinho e Vitor Kley: URL HTTP 200, aviso de horario nao confirmado, CTA presente.
- Show de Fresno: URL HTTP 200, aviso de fonte sob revisao e CTA externo ausente.
- Nos tres testes, viewport mobile 390 x 844, sem erro JavaScript e sem rolagem horizontal.
- Deploy GitHub Pages do commit a7024ab: concluido com sucesso. E evidência funcional limitada, nao aceite visual.
