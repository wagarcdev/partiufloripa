# Registro de decisões — ADR leve

**ADR-001 Portal web primeiro — aceito.** App e social apenas se o portal demonstrar tração.

**ADR-002 Stack estática — aceito.** GitHub Pages, HTML/CSS/JS, JSON e GeoJSON. Baixo custo; contrapartida: atualização editorial manual.

**ADR-003 Sem pagamentos — aceito.** O PartiuFloripa encaminha para bilheterias oficiais e jamais processa pagamento de ingressos.

**ADR-004 Mapa esquemático — aceito.** Contornos municipais reais, referências regionais aproximadas e calor de eventos cadastrados; não é presença real de pessoas.

**ADR-005 Comercial adiado — aceito.** Não iniciar prospecção, afiliados ou negociação agora. AdSense web somente após validação e aprovação; AdMob é para apps.

**ADR-006 Direitos e proveniência — aceito como política.** Não presumir autorização por robots.txt ou por conteúdo público; auditar imagens e dados.

**ADR-007 Harness versionado — aceito.** AGENTS.md conciso, docs por tema, Git como fonte da verdade deste projeto.

**Novo ADR:** título, data, contexto, decisão, alternativas, consequências, evidência e status. Não reescrever decisões históricas silenciosamente.

**ADR-008 Mapa pronto e densidade mínima — aceito (2026-10-28).** Após reprovação visual em Android, substituir contornos municipais e rótulos manuais pelo Esri World Light Gray Canvas. Se houver menos de 3 regiões com eventos na data, exibir apenas marcadores, sem simular calor. Rever condições de uso do provedor antes de monetização.

**ADR-009 Imagens não específicas — aceito (2026-10-28).** Remover das 13 ocorrências os dois arquivos idênticos que exibem apenas a marca da casa, não cartazes específicos. Preservar arquivos para análise, sem considerá-los licenciados.

**ADR-010 Calor mesmo com evento �nico � aceito (2026-10-28).** Manter heatmap em toda noite com eventos mapeados, inclusive uma �nica regi�o, usando halo pequeno e intensidade proporcional, com marcador clic�vel. N�o representar presen�a de pessoas.


**ADR-011 Seletor de data nativo � aceito (2026-10-28).** Substituir lista de datas por input date nativo, usando calend�rio do navegador/Android. Permitir dias sem eventos e exibir estado vazio; restringir ao intervalo das noites conhecidas. N�o depende de biblioteca externa.


**ADR-012 Categorias por experi�ncia � aceito (2026-10-28).** Baladas = DJs, pista, festas noturnas; Dan�a = espet�culo coreogr�fico; Shows = m�sica ao vivo; Humor, Teatro, Cinema, Festivais culturais, Feiras e Cultura permanecem distintos. Folian�polis e set de DJ Blancah passam a Baladas para atender inten��o de descoberta noturna. Cards exibem emoji + texto independentemente de cartaz; filtros tamb�m exibem emoji. Revis�o editorial futura pode reclassificar eventos com evid�ncia.


**ADR-013 Fallback visual por casa � aceito (2026-10-28).** Hierarquia de capa: cartaz do evento quando dispon�vel, depois identidade visual da casa j� existente no reposit�rio, depois arte neutra da categoria com emoji. No fallback da casa, exibir aviso 'Imagem da casa' para n�o apresentar logotipo como cartaz espec�fico. O logo local do Bar do Espartano � reutilizado nas ocorr�ncias sem cartaz. Outros locais continuam com arte de categoria at� se obter imagem de casa adequada e autoriza��o de uso. N�o confundir reutiliza��o t�cnica com licen�a comercial.


**ADR-014 Coleta automatizada com revisão de exceções — aceito (2026-10-29).** Automatizar descoberta/atualização a partir de fontes permitidas; encaminhar dados ambíguos, alterações conflitantes e problemas de direitos para revisão. Fontes, frequência e regras detalhadas permanecem pendentes. Não declarar pipeline implementado.

**ADR-015 IDs estáveis, URLs amigáveis e SEO no MVP web — aceito (2026-10-29).** Implementar nesta fase identificadores persistentes, endereços legíveis/compartilháveis e metadados/indexação SEO por evento. Garantir compatibilidade com links anteriores e hospedagem estática no GitHub Pages. Decisão de escopo, não implementação ou homologação.
