# Requisitos e aceite

Status: protótipo técnico, não catálogo auditado.

| ID | Requisito | Estado | Aceite |
|---|---|---|---|
| RF-01 | Agenda | Implementado | Data, horário, título, casa, categoria, fonte legíveis |
| RF-02 | Busca e filtros | Implementado; QA pendente | Combinações funcionam e reset recupera agenda |
| RF-03 | Carrossel touch | Implementado; QA pendente | Desliza no mobile sem setas |
| RF-04 | Tema do sistema | Implementado; QA pendente | Claro/escuro respeitam preferência |
| RF-05 | Casa em destaque | Implementado | Casa precede título nos cards |
| RF-06 | Mapa vetorial | Implementado; QA pendente | Sem tiles geográficos; navegação funcional |
| RF-07 | Heatmap noturno | Implementado; QA pendente | Por data/região; não confunde com público real |
| RF-08 | Links externos | Implementado; auditoria pendente | Link corresponde ao evento correto |
| RF-09 | Dados verificados | Pendente | 100% dos eventos publicados conferidos |
| RF-10 | Direitos/proveniência | Pendente | Fonte, data de checagem e licença de imagem registradas |
| RF-11 | SEO | Pendente | Metadados e indexação revisados |
| RF-12 | Analytics/privacidade | Pendente | Métricas e aviso adequado ao tratamento real |
| RF-13 | Contato e política | Pendente | Canal de correção/retirada e política publicados |
| RF-14 | AdSense | Futuro | Elegibilidade e aprovação confirmadas |
| RF-15 | Afiliados | Adiado | Nova decisão após tração |

**Não funcionais:** responsivo, rápido em rede móvel, acessível via teclado, sem segredos no cliente, agenda funcional quando mapa falhar, datas locais consistentes, dependências externas identificadas.

**Gates:** publicação técnica exige JSON/JS válidos e navegação funcional; beta exige auditoria editorial/direitos, QA, contato e privacidade; anúncios exigem conformidade e aprovação.

**RF-16 � Identifica��o visual da categoria (implementado; QA mobile pendente):** todo card, com ou sem imagem, exibe �cone e nome leg�vel da categoria; filtro de categoria usa os mesmos s�mbolos. �cones n�o substituem texto.

