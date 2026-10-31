# Auditoria editorial inicial — 31/10/2026

**Status:** investigação e revisão dos 56 registros concluídas; **nem todos os eventos estão validados**. Metodologia: comparação do catálogo versionado com páginas individuais de bilheteria/organizador quando acessíveis, agendas oficiais e páginas editoriais para triagem. Isso não garante realização futura, disponibilidade de ingressos, licenças de imagens ou permissão para scraping. Acesso editorial por navegação/pesquisa, **sem robôs de coleta contínua, sem LLM rodando no site**.

## Resultado após os ajustes

| Métrica | Registros |
|---|---:|
| Total no JSON | **56** |
| Conferidos por página individual/organizador | **29** |
| Aguardando comprovação individual | **27** |
| Desses, em quarentena por origem insuficiente | **6** |
| Conferidos com data >= 31/10 (candidatos à agenda) | **22** |
| Sem horário após revisão (Music Park) | **2** |
| Cartazes antigos ainda sem autorização individual | **12** (mantidos não exibidos) |

A palavra **CONFERIDO** significa que título, data, horário de abertura e local estão amparados por página específica da bilheteria/organizador ou website oficial; **não significa que direitos de imagem estejam licenciados** nem garante não haver cancelamento futuro. Há 7 eventos conferidos com data anterior a 31/10. Os demais permanecem no JSON como registro de auditoria, mas fora da agenda pública na proposta desta branch.

### Correções com evidência
- Floripa Comedy Club (11 ocorrências): `time` representa **abertura 19h**, `showTime` representa **atração 21h**, região **Saco Grande**. Evidência: URLs individuais no inventário abaixo, especialmente [Cícero Viana](https://www.pensanoevento.com.br/eventos/107477/cicero-viana-aqui-tem-preparo-21h).
- Espartano em 14/11: a página 108084 passou a divulgar **BACKWASH: 2016 vs 2026**; título e URL de fonte atualizados, `slug` original preservado (não quebrar links existentes). [Evidência](https://www.pensanoevento.com.br/eventos/108084/backwash-2016-vs-2026).
- Folianópolis: fonte substituída pelo [site oficial](https://folianopolis.com.br/), com portões **19h em 30/10** e **18h em 31/10 e 01/11**.
- Dois de Nós: 20/11 **20h30**, 21/11 **20h**, 22/11 **19h**, segundo [pauta Ouviram baseada na FCC](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026). **Não marcado como verificado** até fonte específica.
- Bairros comprováveis por endereço dos espaços: Teatro Ademir Rosa, Cinema Gilberto Gerlach e MIS/SC → Agronômica; Teatro Pedro Ivo → Saco Grande; TAC → Centro. Fonte: [guia com endereços da programação FCC](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026).
- MUNDO M: divergência **Indoor × Stage** entre [Music Park](https://musicpark.com.br/agenda/) e [bilheteria](https://www.pensanoevento.com.br/eventos/109366/mundo-m-florianopolis); excluído da lista validada.
- Música e eventos adicionais ainda sem prova primária individual: manter status pendente. Não preencher por dedução.
- 5 fontes `emfloripa.ia.br` em quarentena pré-existente; adicionada quarentena ao registro TRIPPY ANOS 2000 por link genérico sem confirmação da programação específica.

### Regra de publicação proposta nesta branch
Somente `status=verified`, URL HTTPS, data não passada e fonte não quarantined na **agenda principal e no mapa**; URLs antigas das páginas dos pendentes continuam acessíveis, com avisos e `noindex`, porém o CTA externo é suprimido. O JSON preserva todos os IDs/slugs. Fotos específicas sem licença continuam bloqueadas pelo seletor de mídia; fotos de categoria têm proveniência separada.

### Limitações
- A revisão cobre cada uma das 56 linhas, mas para registros derivados de **agendas gerais** não houve comprovação em página individual do produtor; por isso continuam PENDENTES.
- Fontes alteram a programação a qualquer momento; este é um instantâneo, não uma garantia.
- Verificação de links 200 não foi reutilizada como prova editorial.
- Nenhuma permissão de coleta automatizada, imagem de divulgação ou afiliação comercial foi concedida.
- Antes do merge: rodar CI, confirmar se a lista/mapa mostram somente o subconjunto revisado, testar mobile real, revisar disclaimer, privacidade e contato.

## Inventário individual (todos os 56)

| # | Data | Evento | Situação | Diagnóstico | Evidência examinada |
|---:|---|---|---|---|---|
| 0 | 2026-10-29 | BOILER DECK #37 | CONFERIDO | Página individual da bilheteria e agenda da casa | [fonte](https://www.pensanoevento.com.br/eventos/111987/boiler-deck-37) |
| 1 | 2026-10-30 | POP HITZ | CONFERIDO | Página individual da bilheteria e agenda da casa | [fonte](https://www.pensanoevento.com.br/eventos/108694/pop-hitz) |
| 2 | 2026-10-31 | BAILA | CONFERIDO | Página individual da bilheteria e agenda da casa | [fonte](https://www.pensanoevento.com.br/eventos/108699/baila) |
| 3 | 2026-11-01 | HYPE — Ed. Especial Elite | CONFERIDO | Página individual da bilheteria e agenda da casa | [fonte](https://www.pensanoevento.com.br/eventos/110488/hype-ed-especial-elite) |
| 4 | 2026-11-05 | INFERNINHO | CONFERIDO | Página individual da bilheteria e agenda da casa | [fonte](https://www.pensanoevento.com.br/eventos/110916/inferninho) |
| 5 | 2026-11-06 | TRIPPY ANOS 2000 | QUARENTENA | Fonte genérica não identifica o evento de 06/11; fora da agenda | [fonte](https://www.pensanoevento.com.br/espartanofloripa) |
| 6 | 2026-11-07 | HYPE | CONFERIDO | Página individual da bilheteria e agenda da casa | [fonte](https://www.pensanoevento.com.br/eventos/110927/hype) |
| 7 | 2026-11-12 | BALANCE | CONFERIDO | Página individual da bilheteria e agenda da casa | [fonte](https://www.pensanoevento.com.br/eventos/110917/balance) |
| 8 | 2026-11-13 | BAILE DO OLIMPO | CONFERIDO | Página individual da bilheteria e agenda da casa | [fonte](https://www.pensanoevento.com.br/eventos/110921/baile-do-olimpo) |
| 9 | 2026-11-14 | BACKWASH: 2016 vs 2026 | CONFERIDO | Título atualizado para BACKWASH; URL direta comprovada, slug legado mantido | [fonte](https://www.pensanoevento.com.br/eventos/108084/backwash-2016-vs-2026) |
| 10 | 2026-11-20 | HYPE | CONFERIDO | Página individual da bilheteria e agenda da casa | [fonte](https://www.pensanoevento.com.br/eventos/110922/hype) |
| 11 | 2026-11-21 | DJ vs DECK | CONFERIDO | Página individual da bilheteria e agenda da casa | [fonte](https://www.pensanoevento.com.br/eventos/110924/dj-vs-deck) |
| 12 | 2026-11-26 | CLOSE FRIENDS | CONFERIDO | Página individual da bilheteria e agenda da casa | [fonte](https://www.pensanoevento.com.br/eventos/110919/close-friends) |
| 13 | 2026-11-27 | BAILE DO OLIMPO | CONFERIDO | Página individual da bilheteria e agenda da casa | [fonte](https://www.pensanoevento.com.br/eventos/110923/baile-do-olimpo) |
| 14 | 2026-11-28 | POP HITZ | CONFERIDO | Página individual da bilheteria e agenda da casa | [fonte](https://www.pensanoevento.com.br/eventos/110925/pop-hitz) |
| 15 | 2026-10-27 | Brow Malaquias e Felipe Pansolin — Os Folgados | CONFERIDO | Abertura 19h e show 21h; Saco Grande; fonte individual | [fonte](https://www.pensanoevento.com.br/eventos/108712/brow-malaquias-e-felipe-pansolin-os-folgados-21h) |
| 16 | 2026-10-28 | Luã Lima — Devaneios de um Manezinho | CONFERIDO | Abertura 19h e show 21h; Saco Grande; fonte individual | [fonte](https://www.pensanoevento.com.br/eventos/109308/lua-lima-devaneios-de-um-manezinho-21h) |
| 17 | 2026-10-29 | Daniel Duncan | CONFERIDO | Abertura 19h e show 21h; Saco Grande; fonte individual | [fonte](https://www.pensanoevento.com.br/eventos/107475/daniel-duncan-21h) |
| 18 | 2026-10-30 | Fábio Güere — Inutilidade Pública | CONFERIDO | Abertura 19h e show 21h; Saco Grande; fonte individual | [fonte](https://www.pensanoevento.com.br/eventos/107476/fabio-guere-panico-inutilidade-publica-21h) |
| 19 | 2026-10-31 | Cícero Viana — Aqui Tem Preparo! | CONFERIDO | Abertura 19h e show 21h; Saco Grande; fonte individual | [fonte](https://www.pensanoevento.com.br/eventos/107477/cicero-viana-aqui-tem-preparo-21h) |
| 20 | 2026-11-01 | Nathi Gaiteira — Amor, Humor e Modão | CONFERIDO | Abertura 19h e show 21h; Saco Grande; fonte individual | [fonte](https://www.pensanoevento.com.br/eventos/109171/nathi-gaiteira-amor-humor-e-modao-21h) |
| 21 | 2026-11-03 | Humor & Huana — Bob Rodrigues | CONFERIDO | Abertura 19h e show 21h; Saco Grande; fonte individual | [fonte](https://www.pensanoevento.com.br/eventos/110727/humor-huana-reducao-de-danos-com-bob-rodrigues-21h) |
| 22 | 2026-11-04 | Arianna Nutt — De Repente 40 | CONFERIDO | Abertura 19h e show 21h; Saco Grande; fonte individual | [fonte](https://www.pensanoevento.com.br/eventos/109494/arianna-nutt-de-repente-40-21h) |
| 23 | 2026-11-05 | Festival Open Mic | CONFERIDO | Abertura 19h e show 21h; Saco Grande; fonte individual | [fonte](https://www.pensanoevento.com.br/eventos/111512/festival-open-mic-o-melhor-voce-escolhe-21h) |
| 24 | 2026-11-06 | Irineu Nicoletti — Meio Tanso | CONFERIDO | Abertura 19h e show 21h; Saco Grande; fonte individual | [fonte](https://www.pensanoevento.com.br/eventos/109496/irineu-nicoletti-meio-tanso-21h) |
| 25 | 2026-11-07 | Marcio Donato (4 Amigos) | CONFERIDO | Abertura 19h e show 21h; Saco Grande; fonte individual | [fonte](https://www.pensanoevento.com.br/eventos/105680/marcio-donato-4-amigos-21h) |
| 26 | 2026-11-13 | MUNDO M | PENDENTE | Conflito Indoor (agenda do Music Park) × Stage (bilheteria) | [fonte](https://www.pensanoevento.com.br/eventos/109366/mundo-m-florianopolis) |
| 27 | 2026-11-14 | Armandinho e Vitor Kley — Encontro de Gigantes | PENDENTE | Data e palco na agenda oficial; hora indisponível | [fonte](https://musicpark.com.br/agenda/) |
| 28 | 2026-11-14 | Blancah (long set) | PENDENTE | Data e palco na agenda oficial; hora indisponível | [fonte](https://musicpark.com.br/agenda/) |
| 29 | 2026-11-10 | O Céu da Língua — Gregorio Duvivier | PENDENTE | Pauta cultural indica 2 sessões/dia; cadastro mantém apenas 18h30; confirmar página de cada sessão | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 30 | 2026-11-11 | O Céu da Língua — Gregorio Duvivier | PENDENTE | Pauta cultural indica 2 sessões/dia; cadastro mantém apenas 18h30; confirmar página de cada sessão | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 31 | 2026-11-12 | O Céu da Língua — Gregorio Duvivier | PENDENTE | Pauta cultural indica 2 sessões/dia; cadastro mantém apenas 18h30; confirmar página de cada sessão | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 32 | 2026-11-13 | Pele Negra, Justiça Branca | PENDENTE | Pauta FCC via Ouviram; ainda falta fonte específica do evento | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 33 | 2026-11-13 | Viver é Melhor que Sonhar: Belchior | PENDENTE | Pauta FCC via Ouviram; ainda falta fonte específica do evento | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 34 | 2026-11-14 | Minha Última Carta de Amor | PENDENTE | Pauta FCC via Ouviram; ainda falta fonte específica do evento | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 35 | 2026-11-19 | Ritmos Brasileiros do Norte ao Sul | PENDENTE | Pauta FCC via Ouviram; ainda falta fonte específica do evento | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 36 | 2026-11-20 | Dois de Nós | PENDENTE | Horário recuperado da pauta baseada na FCC; conferir com organizador | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 37 | 2026-11-21 | Dois de Nós | PENDENTE | Horário recuperado da pauta baseada na FCC; conferir com organizador | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 38 | 2026-11-22 | Dois de Nós | PENDENTE | Horário recuperado da pauta baseada na FCC; conferir com organizador | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 39 | 2026-11-21 | A Dança das Flores | PENDENTE | Pauta FCC via Ouviram; ainda falta fonte específica do evento | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 40 | 2026-11-26 | Música em Cena — Associação Coral de Florianópolis | PENDENTE | Pauta FCC via Ouviram; ainda falta fonte específica do evento | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 41 | 2026-11-28 | O Pequeno Príncipe e o Presente dos Céus | PENDENTE | Pauta FCC via Ouviram; ainda falta fonte específica do evento | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 42 | 2026-11-28 | Roxette UK — The Tribute Show | PENDENTE | Pauta FCC via Ouviram; ainda falta fonte específica do evento | [fonte](https://ouviram.com.br/agenda/shows-e-eventos-em-florianopolis-outubro-novembro-2026) |
| 43 | 2026-10-30 | Folianópolis 2026 — abertura | CONFERIDO | Portões conferidos no site oficial; fonte alterada para organizador | [fonte](https://folianopolis.com.br/) |
| 44 | 2026-10-31 | Folianópolis 2026 — segundo dia | CONFERIDO | Portões conferidos no site oficial; fonte alterada para organizador | [fonte](https://folianopolis.com.br/) |
| 45 | 2026-11-01 | Folianópolis 2026 — encerramento | CONFERIDO | Portões conferidos no site oficial; fonte alterada para organizador | [fonte](https://folianopolis.com.br/) |
| 46 | 2026-10-30 | Abruna — pop, rock e R&B | PENDENTE | Guia específico confirma abertura 20h/show 21h30; ainda falta fonte da produção | [fonte](https://guiafloripa.com.br/agenda/shows/cantora-abruna-apresenta-repertorio-de-pop-rock-e-rb-no-delfino-146.php) |
| 47 | 2026-10-31 | Halloween: Skrotes + OSSCA — Nosferatu | PENDENTE | Guia TocaOnde confirma programação; falta página do organizador | [fonte](https://tocaonde.com.br/guides/halloween-2026-florianopolis) |
| 48 | 2026-10-31 | Halloween com Blockbusters | PENDENTE | Guia TocaOnde confirma programação; falta página do organizador | [fonte](https://tocaonde.com.br/guides/halloween-2026-florianopolis) |
| 49 | 2026-11-01 | N.N.P — Jessica Brankka e Miss Natalia | PENDENTE | Listagem Eventoon confirma data e casa, não o horário de 14h | [fonte](https://www.eventoon.com.br/cidade/florianopolis-sc) |
| 50 | 2026-11-06 | Show de Fresno | QUARENTENA | Sem confirmação independente; quarentena preservada | [fonte](https://emfloripa.ia.br/agenda/) |
| 51 | 2026-11-07 | 3º Festival Cultural Chinês de SC | QUARENTENA | Sem confirmação independente; quarentena preservada | [fonte](https://emfloripa.ia.br/agenda/) |
| 52 | 2026-11-07 | Haru Matsuri — 4ª edição | QUARENTENA | Sem confirmação independente; quarentena preservada | [fonte](https://emfloripa.ia.br/agenda/) |
| 53 | 2026-11-13 | Feira de Cerâmica | QUARENTENA | Sem confirmação independente; quarentena preservada | [fonte](https://emfloripa.ia.br/agenda/) |
| 54 | 2026-11-13 | Ponte de Palavras — encontro literário | QUARENTENA | Sem confirmação independente; quarentena preservada | [fonte](https://emfloripa.ia.br/agenda/) |
| 55 | 2026-11-01 | Halloween — Festa à Fantasia (Open Bar) | CONFERIDO | Página do próprio local confirma data, abertura e endereço | [fonte](https://undr.com.br/eventos/halloween-festa-a-fantasia-open-bar-2/) |

## Próximos gates (simples, sem IA em operação)
1. QA do PR e publicação do **subconjunto revisado**, não do acervo completo.
2. Reavaliar manualmente os 27 pendentes somente quando houver URLs ou horários oficiais; não exigir aprovação de catálogo inteiro para beta.
3. Resolver privacidade/contato, validação mobile e comportamento da navegação antes de convidar beta testers.
4. Revisão eventual e script gratuito sob demanda; **sem agendamento contínuo** até existir necessidade comprovada.


## Retificação de qualidade — conferência específica em 31/10/2026

Uma primeira triagem havia marcado 29 eventos `verified` antes de documentar evidência específica por ocorrência. Após contestação, o PR foi convertido em **draft** e os registros marcados passaram por nova consulta a páginas específicas de bilheteria, listas de presença do próprio evento e FAQ da produção. O campo `reviewEvidenceUrl` e os novos campos `reviewMethod`/`reviewEvidenceDetails` estão associados a cada ocorrência, e o validador do site recusa eventos `verified` sem esses campos. **Uma URL não substitui a leitura de conteúdo, nem um teste técnico garante realização futura.**

A fonte de BALANCE em 12/11 foi atualizada para a página individual da **lista de presença**, já que a abertura HTML da página de ingressos falhou. Para o Folianópolis, as três datas e horários de portões estão no FAQ oficial; para UNDR, os detalhes de 01/11 constam na parte inferior da página. Os eventos originados de guias gerais continuam pendentes, mesmo se suas datas forem plausíveis. Recriações do site em ambiente local continuam exigindo QA visual.

### Evidências campo a campo dos 29 registros

| Data | Evento | Abertura | Início da atração | Método | Fonte específica |
|---|---|---|---|---|---|
| 2026-10-29 | BOILER DECK #37 | 21:00 | — | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/111987/boiler-deck-37) |
| 2026-10-30 | POP HITZ | 21:00 | — | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/108694/pop-hitz) |
| 2026-10-31 | BAILA | 21:00 | — | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/108699/baila) |
| 2026-11-01 | HYPE — Ed. Especial Elite | 21:00 | — | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/110488/hype-ed-especial-elite) |
| 2026-11-05 | INFERNINHO | 21:00 | — | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/110916/inferninho) |
| 2026-11-07 | HYPE | 21:00 | — | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/110927/hype) |
| 2026-11-12 | BALANCE | 21:00 | — | organizer_ticket_guestlist | [ver evidência](https://www.pensanoevento.com.br/nomenalista/110917/balance) |
| 2026-11-13 | BAILE DO OLIMPO | 21:00 | — | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/110921/baile-do-olimpo) |
| 2026-11-14 | BACKWASH: 2016 vs 2026 | 21:00 | — | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/108084/backwash-2016-vs-2026) |
| 2026-11-20 | HYPE | 21:00 | — | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/110922/hype) |
| 2026-11-21 | DJ vs DECK | 21:00 | — | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/110924/dj-vs-deck) |
| 2026-11-26 | CLOSE FRIENDS | 21:00 | — | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/110919/close-friends) |
| 2026-11-27 | BAILE DO OLIMPO | 21:00 | — | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/110923/baile-do-olimpo) |
| 2026-11-28 | POP HITZ | 21:00 | — | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/110925/pop-hitz) |
| 2026-10-27 | Brow Malaquias e Felipe Pansolin — Os Folgados | 19:00 | 21:00 | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/108712/brow-malaquias-e-felipe-pansolin-os-folgados-21h) |
| 2026-10-28 | Luã Lima — Devaneios de um Manezinho | 19:00 | 21:00 | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/109308/lua-lima-devaneios-de-um-manezinho-21h) |
| 2026-10-29 | Daniel Duncan | 19:00 | 21:00 | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/107475/daniel-duncan-21h) |
| 2026-10-30 | Fábio Güere — Inutilidade Pública | 19:00 | 21:00 | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/107476/fabio-guere-panico-inutilidade-publica-21h) |
| 2026-10-31 | Cícero Viana — Aqui Tem Preparo! | 19:00 | 21:00 | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/107477/cicero-viana-aqui-tem-preparo-21h) |
| 2026-11-01 | Nathi Gaiteira — Amor, Humor e Modão | 19:00 | 21:00 | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/109171/nathi-gaiteira-amor-humor-e-modao-21h) |
| 2026-11-03 | Humor & Huana — Bob Rodrigues | 19:00 | 21:00 | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/110727/humor-huana-reducao-de-danos-com-bob-rodrigues-21h) |
| 2026-11-04 | Arianna Nutt — De Repente 40 | 19:00 | 21:00 | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/109494/arianna-nutt-de-repente-40-21h) |
| 2026-11-05 | Festival Open Mic | 19:00 | 21:00 | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/111512/festival-open-mic-o-melhor-voce-escolhe-21h) |
| 2026-11-06 | Irineu Nicoletti — Meio Tanso | 19:00 | 21:00 | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/109496/irineu-nicoletti-meio-tanso-21h) |
| 2026-11-07 | Marcio Donato (4 Amigos) | 19:00 | 21:00 | organizer_ticket_event_page | [ver evidência](https://www.pensanoevento.com.br/eventos/105680/marcio-donato-4-amigos-21h) |
| 2026-10-30 | Folianópolis 2026 — abertura | 19:00 | — | organizer_official_faq | [ver evidência](https://folianopolis.com.br/) |
| 2026-10-31 | Folianópolis 2026 — segundo dia | 18:00 | — | organizer_official_faq | [ver evidência](https://folianopolis.com.br/) |
| 2026-11-01 | Folianópolis 2026 — encerramento | 18:00 | — | organizer_official_faq | [ver evidência](https://folianopolis.com.br/) |
| 2026-11-01 | Halloween — Festa à Fantasia (Open Bar) | 23:00 | — | venue_official_event_page | [ver evidência](https://undr.com.br/eventos/halloween-festa-a-fantasia-open-bar-2/) |

Verificações realizadas com dados públicos das fontes; nenhuma imagem de divulgação, direito de coleta automatizada ou promessa de ausência de cancelamento foi inferida.
