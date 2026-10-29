# PartiuFloripa — ALS: decisões, ações e artefatos

Estado: **PROPOSTO / AGUARDANDO DECISÃO DO CLIENTE**. Atualizado em 2026-10-29. Fonte canônica: este repositório. O dashboard é projeção derivada, não fonte independente. Não converter CI, commits ou testes em aceite do Cliente.

## Governança e contrato
- Padrão: **Archersland Standard (ALS)**; departamentos `rnd`, `product`, `ux`, `engineering`, `qa`, `growth`, `operations`. Financeiro/BI e governança transversais.
- Três classes: **rotina operacional** (executar com evidência, sem novo aceite), **decisão estratégica** (solicitar escolha explícita), **entrega sujeita a aceite** (pacote verificável e aceite formal exclusivo do Cliente).
- Pacote de decisão: solicitado/entregue, alternativas, critérios e verificações, evidências e links, limitações, riscos, pendências, recomendação e decisão. Sem resposta = pendente.
- Solicitação multimídia: H-APPROVAL-001; requestId, projectId, revision/hash, artefatos, seleção, ações permitidas e idempotência; publicação no dashboard **não confirmada** sem gateway autenticado e leitura de retorno. Nenhuma imagem aprovada automaticamente.
- R&D sob demanda; não iniciar pesquisas recorrentes, agentes contínuos nem promoção automática de backlog.

## Pipeline e próximos artefatos

| Área | Ação | Artefato e critério | Tipo / estado |
| --- | --- | --- | --- |
| P&D | Verificar fontes de eventos, cobertura, atualização, expiração, regras de acesso e licenças | Matriz de fontes com proveniência e viabilidade, sem scraping não autorizado | Pesquisa **sob demanda**, pendente |
| Produto | Consolidar categorias, público e política editorial; definir limite entre balada/show/festival | Taxonomia v1 + critérios de classificação + PRD/AC reconciliados | **Decisão estratégica** pendente de aceite formal |
| UX | Validar cards, emojis, fallback de imagem, calendário e mapa no Android físico | Capturas e checklist de legibilidade, responsividade e acessibilidade | **Entrega sujeita a aceite**, pendente |
| Engenharia | Definir pipeline determinístico para ingestão, atualização, remoção de eventos e origem dos dados | Especificação de dados e proposta técnica; implementação só após decisão relevante | **Decisão estratégica** pendente |
| QA | Auditar individualmente 56 ocorrências, horários, localizações, links e direitos das imagens | Relatório com evidência por ocorrência; não inventar horário nem coordenada | **Rotina operacional** pendente; bloqueio de qualidade |
| Growth | Avaliar SEO, analytics, política de privacidade e critérios para AdSense web | Checklist de elegibilidade e medição, sem ativar monetização | **Decisão estratégica futura**, não autorizada agora |
| Operações | Documentar publicação, rollback, monitoramento e manutenção editorial | Runbook e gates verificáveis de beta | **Entrega sujeita a aceite**, pendente |

## Fatos observados (não são aceite)
- 56 ocorrências no catálogo; 8 sem horário; 31 com região genérica. Links HTTP 200 não comprovam evento correspondente.
- Imagens restantes sem validação completa de licença e correspondência. Reuso do logo de casa não comprova autorização comercial.
- Mapa com Esri e calor por região aproximada, não pessoas nem localização exata das casas.
- Calendário nativo e categorias com emoji implementados. QA no dispositivo Android físico e aceite formal da entrega ainda não registrados.

## Pacotes de decisão a apresentar ao Cliente
1. **PF-DEC-001 — Taxonomia v1**: aprovar/rejeitar/pedir mudanças à distinção Baladas, Shows, Humor, Teatro, Cinema, Dança, Festivais, Feiras e Cultura. Evidência: `events.json`, `index.html`, `docs/DECISIONS.md`. A conversa aprovou o uso operacional das categorias, mas não equivale a aceite formal ALS.
2. **PF-DEC-002 — Política de imagens**: escolher critérios de fallback e autorização (cartaz validado → imagem da casa identificada → arte da categoria). Exigir proveniência/licença para uso comercial. Evidência: `docs/SOURCES-AND-RIGHTS.md` e código.
3. **PF-DEC-003 — Política de dados**: definir a estratégia de curadoria/automação e requisitos mínimos antes de publicar eventos como verificados. Dependência: matriz de fontes e auditoria editorial.
4. **PF-ACC-001 — Beta web**: aceite somente após evidências QA, correção de dados e critérios do produto. Não antecipar aceite por deploy.

## Integração ao dashboard
- Projeto ID `partiufloripa`; fonte: `https://github.com/wagarcdev/partiufloripa`.
- Os registros devem aparecer por área da pipeline como **pendente/bloqueado/em revisão**, com link para issue/artefato e CTA contextual **revisar / aprovar / rejeitar / solicitar alterações** somente quando houver gateway seguro e decisão auditável.
- Estados ALS permitidos: `unknown`, `pending`, `active`, `approved`, `blocked`, `waived`. Nunca marcar `approved` sem evidência HTTPS e decisão formal. Projeção determinística via fontes versionadas, sem IA atualizando o dashboard.
- Se o gateway não estiver operacional, manter pacotes no repositório e sinalizar **entrega ao dashboard pendente**, sem simular botões funcionais.

## Próxima execução segura
1. Completar auditoria editorial, QA visual e matriz de fontes (somente quando a pesquisa for acionada).
2. Reconciliar evidências com requisitos e critérios de aceite.
3. Submeter pacotes ao Cliente no centro de aprovações, quando o gateway estiver validado; registrar decisão exata e acknowledgement.
4. Atualizar read model determinístico do dashboard e verificar leitura de retorno.

## Detalhamento do Figma e dos gates por area
- IDs, classes, criterios, dependencias e status de dashboard: [PIPELINE-ALS-2026-10-29.md](PIPELINE-ALS-2026-10-29.md#complemento--figma-decisoes-e-dashboard-2026-10-29).
- Gateways ainda PENDING; nenhuma decisao do Client foi inferida.
