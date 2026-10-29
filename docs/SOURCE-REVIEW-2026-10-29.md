# Revisao de fontes e horarios — 2026-10-29

Status: achados confirmados a partir de evidencias do usuario e paginas especificas; novas politicas de publicacao propostas, ainda nao aprovadas.

## Casos observados
- MUNDO M (13/11/2026): a agenda generica Music Park omitiu horario. Pagina individual https://www.pensanoevento.com.br/eventos/109366/mundo-m-florianopolis informa abertura 22:00, Stage Music Park, Rod. Jornalista Mauricio Sirotski Sobrinho, 1050, Jurere, Florianopolis. O cadastro deve distinguir informacao ausente na listagem de informacao ausente na fonte detalhada.
- Daniel Duncan (29/10/2026): https://www.pensanoevento.com.br/eventos/107475/daniel-duncan-21h informa abertura 19:00 e inicio do show 21:00, Floripa Comedy Club, Rod. Jose Carlos Daux 5500, Saco Grande. Um unico campo time e insuficiente para os dois horarios. Nao alterar o significado de time sem migracao explicita.
- Show de Fresno (06/11/2026): o usuario inspecionou emfloripa.ia.br/agenda e considerou a fonte insuficientemente confiavel; informacoes de local nao confirmadas. Fonte colocada sob revisao editorial; nao promover registros apenas dessa fonte automaticamente. Evitar declarar fraude ou dados falsos sem evidencia.

## Regras candidatas (NAO APROVADAS)
1. Seguir links da agenda ate a pagina individual antes de concluir ausencia de horarios ou local.
2. Modelar openingTime e performanceStartTime/attractions com rotulos distintos; preservar time legado ate migracao e QA.
3. Criar cadastro de locais verificados (id, endereco, bairro e coordenadas com proveniencia), para enriquecer eventos vinculados sem inferencias geograficas.
4. Classificar fontes por confiabilidade; fontes contestadas ficam em quarentena e seus registros exigem corroboracao independente.
5. Registrar por campo sourceUrl, verifiedAt, evidencia e nivel de confianca. Publicar apenas depois de criterios editoriais aprovados.
6. Excecoes de fonte, geolocalizacao e horarios passam por revisao humana, sem alteracao automatica de dados nao verificados.

## Impacto na implementacao
Nenhuma correcao do events.json ou software foi realizada por este relatorio. Revisar os casos de forma controlada, com verificacao individual e testes, antes de publicar.
