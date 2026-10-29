# PartiuFloripa — pipeline ALS e decisões revisáveis
Atualizado: 2026-10-29 | Estado: documentação operacional; **nenhum aceite inferido**

## Fontes
- Canônica: https://github.com/wagarcdev/partiufloripa
- Decisão A1.10: [UI-CARDS-A1.10.md](UI-CARDS-A1.10.md)
- Implementação A1.11: [CARD-NAVIGATION-AND-IMAGES.md](CARD-NAVIGATION-AND-IMAGES.md)
- Protocolo transversal: H-APPROVAL-001, no repositório `wagarcdev/ai-workspace/APPROVAL-CENTER.md`.
- Dashboard é **projeção**, não nova fonte de verdade. Não registrar aprovações sem decisão do Client e readback.

## Pipeline: ações, artefatos e gates
| ID | Área | Item/artefato | Situação comprovada | Próxima ação | Decisão do Client |
|---|---|---|---|---|---|
| PF-UX-01 | UX | A1.10: busca horizontal baixa e carrossel largo | Design aprovado em conversa; código versionado | Validar visual desktop/Android, fotos com títulos nas bordas, acessibilidade e touch | **Homologar resultado visual**, somente após evidência real |
| PF-UX-02 | UX | Página interna de detalhes A1.11 | Primeira implementação versionada; design não homologado | Produzir capturas reais mobile/desktop e proposta de refinamento | **Aprovar/rejeitar/solicitar alterações** do design |
| PF-CONTENT-01 | Produto / Operações | Foto padrão por casa de eventos | Parcial: Bar do Espartano com associação local; demais sem associação validada | Inventariar casas; localizar fotos próprias e origem/licença; montar galeria comparativa | **Selecionar fotos propostas por casa**, quando houver opções reais; aceite editorial separado de direitos |
| PF-ENG-01 | Engenharia | Card inteiro → detalhe interno → CTA externo | Código A1.11 versionado; sem QA navegador confirmado | Testar navegação, histórico, links, mobile e teclado | Homologação funcional após QA, não nova autorização para codificar |
| PF-ENG-02 | Engenharia / Produto | IDs persistentes, URL canônica, SEO por evento | Pendente | Propor contrato de ID/slug, migração compatível e SEO | Decisão de contrato somente se houver alternativas com impacto |
| PF-PROD-01 | Produto / Growth | Descoberta contínua (mesma casa, relacionados, próximos eventos) | Hipótese ainda não desenhada/aprovada | Propor fluxo e protótipo na página de detalhes | **Escolher experiência** entre alternativas após apresentação |
| PF-DATA-01 | Operações / QA | Catálogo e direitos | Validador: 8 eventos sem horário; 31 alertas de região genérica; imagens/links com auditoria editorial pendente | Conferir fontes e licenças, sem inventar dados | Revisão editorial quando existir lote de evidências |
| PF-DATA-02 | Produto | Preços e 💵 | UI definida; catálogo sem preços confiáveis | Definir campo, proveniência e política de atualização | Não pedir aprovação para preencher dados verificados; decidir apenas regra editorial controversa |
| PF-QA-01 | QA | Deploy e QA visual/funcional | JS syntax verificado; navegação real e GitHub Pages não homologados | Executar testes e registrar capturas, resultados e regressões | **Aceite de entrega** após evidências |
| PF-GOV-01 | Governança | H-APPROVAL-001 e sincronização dashboard | Gateway operacional não comprovado; não alegar publicação de pacote | Criar solicitações versionadas com artefatos reais; sincronizar deterministamente e confirmar readback | Só o Client decide; ausência de resposta ≠ aprovação |

## Protocolo de aprovação
- Uma solicitação por gate/artefato efetivamente revisável, não por tarefa rotineira.
- Quando houver artefato real, incluir projectId=`partiufloripa`, requestId estável, revisão/hash, categoria `decision_gate` ou `acceptance_deliverable`, critérios, riscos, MIME e referências.
- Estados: `created → published → in_review → decided → dispatched → acknowledged`; não inferir mudança de estado por commit ou teste.
- Ações do Client: aprovar, rejeitar, pedir alterações; aprovar com ressalvas apenas quando aplicável.
- Gateway autenticado só quando comprovadamente operacional. **Até lá, dashboard delivery PENDING**, apresentar material revisável na conversa e manter registro no Git.
- P&D e atividades departamentais não iniciam pesquisa contínua/autônoma por este registro.

## Prioridade recomendada (não equivale a aprovação)
1. QA A1.11 e evidência visual; 2. proposta de design da página de detalhes; 3. inventário/licenças e seleção de fotos; 4. retenção por descoberta relacionada; 5. IDs/SEO e enriquecimento de dados.
