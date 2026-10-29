# Registro de decisÃµes â€” ADR leve

**ADR-001 Portal web primeiro â€” aceito.** App e social apenas se o portal demonstrar traÃ§Ã£o.

**ADR-002 Stack estÃ¡tica â€” aceito.** GitHub Pages, HTML/CSS/JS, JSON e GeoJSON. Baixo custo; contrapartida: atualizaÃ§Ã£o editorial manual.

**ADR-003 Sem pagamentos â€” aceito.** O PartiuFloripa encaminha para bilheterias oficiais e jamais processa pagamento de ingressos.

**ADR-004 Mapa esquemÃ¡tico â€” aceito.** Contornos municipais reais, referÃªncias regionais aproximadas e calor de eventos cadastrados; nÃ£o Ã© presenÃ§a real de pessoas.

**ADR-005 Comercial adiado â€” aceito.** NÃ£o iniciar prospecÃ§Ã£o, afiliados ou negociaÃ§Ã£o agora. AdSense web somente apÃ³s validaÃ§Ã£o e aprovaÃ§Ã£o; AdMob Ã© para apps.

**ADR-006 Direitos e proveniÃªncia â€” aceito como polÃ­tica.** NÃ£o presumir autorizaÃ§Ã£o por robots.txt ou por conteÃºdo pÃºblico; auditar imagens e dados.

**ADR-007 Harness versionado â€” aceito.** AGENTS.md conciso, docs por tema, Git como fonte da verdade deste projeto.

**Novo ADR:** tÃ­tulo, data, contexto, decisÃ£o, alternativas, consequÃªncias, evidÃªncia e status. NÃ£o reescrever decisÃµes histÃ³ricas silenciosamente.

**ADR-008 Mapa pronto e densidade mÃ­nima â€” aceito (2026-10-28).** ApÃ³s reprovaÃ§Ã£o visual em Android, substituir contornos municipais e rÃ³tulos manuais pelo Esri World Light Gray Canvas. Se houver menos de 3 regiÃµes com eventos na data, exibir apenas marcadores, sem simular calor. Rever condiÃ§Ãµes de uso do provedor antes de monetizaÃ§Ã£o.

**ADR-009 Imagens nÃ£o especÃ­ficas â€” aceito (2026-10-28).** Remover das 13 ocorrÃªncias os dois arquivos idÃªnticos que exibem apenas a marca da casa, nÃ£o cartazes especÃ­ficos. Preservar arquivos para anÃ¡lise, sem considerÃ¡-los licenciados.

**ADR-010 Calor mesmo com evento único — aceito (2026-10-28).** Manter heatmap em toda noite com eventos mapeados, inclusive uma única região, usando halo pequeno e intensidade proporcional, com marcador clicável. Não representar presença de pessoas.


**ADR-011 Seletor de data nativo — aceito (2026-10-28).** Substituir lista de datas por input date nativo, usando calendário do navegador/Android. Permitir dias sem eventos e exibir estado vazio; restringir ao intervalo das noites conhecidas. Não depende de biblioteca externa.


**ADR-012 Categorias por experiência — aceito (2026-10-28).** Baladas = DJs, pista, festas noturnas; Dança = espetáculo coreográfico; Shows = música ao vivo; Humor, Teatro, Cinema, Festivais culturais, Feiras e Cultura permanecem distintos. Folianópolis e set de DJ Blancah passam a Baladas para atender intenção de descoberta noturna. Cards exibem emoji + texto independentemente de cartaz; filtros também exibem emoji. Revisão editorial futura pode reclassificar eventos com evidência.


**ADR-013 Fallback visual por casa — aceito (2026-10-28).** Hierarquia de capa: cartaz do evento quando disponível, depois identidade visual da casa já existente no repositório, depois arte neutra da categoria com emoji. No fallback da casa, exibir aviso 'Imagem da casa' para não apresentar logotipo como cartaz específico. O logo local do Bar do Espartano é reutilizado nas ocorrências sem cartaz. Outros locais continuam com arte de categoria até se obter imagem de casa adequada e autorização de uso. Não confundir reutilização técnica com licença comercial.


**ADR-014 Automated collection with exception review - accepted (2026-10-29).** Automate event discovery and updates only from permitted sources. Route ambiguous data, conflicting changes, and rights issues to manual review. Source list, frequency, and exact rules are still pending. No implementation or QA acceptance is implied.

**ADR-015 Stable event IDs, readable URLs and SEO in web MVP - accepted (2026-10-29).** Add persistent event identifiers, readable shareable URLs, and event-level SEO/indexing in the current phase. Preserve old links and compatibility with static GitHub Pages. Scope decision only: implementation and acceptance remain pending.

**ADR-016 Publicacao de eventos incompletos apos revisao humana - aceita (2026-10-29).** Eventos com informacoes faltantes podem ser publicados apenas apos revisao humana explicita do registro, com aviso claro dos campos ausentes ou nao confirmados. A revisao deve consultar a pagina especifica e fontes confiaveis quando disponiveis; nao inventar dados. Ausencia de dados nao implica aprovacao automatica de publicacao. Campos minimos, processo detalhado de revisao e QA continuam pendentes. Esta ADR e decisao editorial; nao e implementacao nem homologacao do beta.
