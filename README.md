# PartiuFloripa

Portal web, mobile-first, para descobrir eventos e entretenimento em Florianópolis.

**Produto em Discovery/MVP.** O catálogo atual é experimental: datas, horários, imagens, permissões e links ainda exigem auditoria. Não confundir publicação técnica com lançamento comercial.

- Produção: https://wagarcdev.github.io/partiufloripa/
- Código: https://github.com/wagarcdev/partiufloripa
- Stack: HTML/CSS/JS estático, `events.json`, Leaflet + leaflet.heat, GeoJSON local e GitHub Pages.
- Sem backend, login, bilheteria ou processamento de pagamentos.

## Por onde começar
1. [AGENTS.md](AGENTS.md) — protocolo curto para agentes.
2. [docs/PRODUCT.md](docs/PRODUCT.md) — visão, escopo e usuários.
3. [docs/REQUIREMENTS.md](docs/REQUIREMENTS.md) — requisitos e aceite.
4. [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — implementação e contrato de dados.
5. [docs/ROADMAP.md](docs/ROADMAP.md) — prioridades e gates.
6. [docs/OPERATIONS.md](docs/OPERATIONS.md) — rotina, testes, publicação e incidentes.
7. [docs/SOURCES-AND-RIGHTS.md](docs/SOURCES-AND-RIGHTS.md) — coleta, proveniência e direitos.
8. [docs/DECISIONS.md](docs/DECISIONS.md) — decisões e motivos.
9. [docs/OPEN-QUESTIONS.md](docs/OPEN-QUESTIONS.md) — hipóteses não confirmadas.

## Estado real (2026-10-28)
- Agenda com 56 ocorrências em `events.json`; filtros, busca e carrossel.
- Mapa vetorial municipal simplificado, rótulos de regiões aproximados e calor agregado por região, **não** densidade real de pessoas.
- 14 arquivos de imagens locais, associados a parte dos eventos; licenças e correspondência ainda não verificadas individualmente.
- Deploy automático ao atualizar `main`.
- Não há métricas de audiência, AdSense ativo, programa de afiliados, aprovação comercial ou direitos de imagem documentados.

## Desenvolvimento
Abrir `index.html` via servidor HTTP local (não via `file://`, porque há `fetch` de arquivos JSON). Exemplo: `python -m http.server 8000`. Verificação básica: `node scripts/validate-events.cjs`. Alterações entram por commit e deploy do GitHub Actions.

## Governança
Este repositório é a fonte da verdade **do PartiuFloripa**. Mudanças de escopo, arquitetura, conformidade ou estratégia devem atualizar a documentação correspondente no mesmo commit. Não presumir que documentos de outros projetos se aplicam aqui.
