# Harness TL;DR — PartiuFloripa

**Objetivo:** entregar e evoluir um portal web de eventos em Florianópolis; MVP web primeiro, sem aplicativo, recursos sociais ou processamento de pagamentos.

**Fonte da verdade:** este repositório. Leia `README.md` e apenas o documento de `docs/` pertinente à tarefa. Não usar memória de conversa como substituto de decisões versionadas.

**Antes de alterar:** `git status`, ler implementação e decisões relacionadas, distinguir fato confirmado de hipótese. Não sobrescrever trabalho alheio.

**Durante:** mudança pequena, verificável, mobile-first, acessível e sem custo fixo desnecessário. Não inventar eventos, datas, localização exata, direitos de imagem, permissões de scraping, comissões ou métricas. Dados de terceiros exigem proveniência.

**Depois:** executar `node scripts/validate-events.cjs`, verificar sintaxe JS, testar fluxo afetado no navegador quando possível, revisar `git diff`, registrar decisão se relevante e só então publicar. Relatar o que foi efetivamente verificado e o que ficou pendente.

**Aprovação humana:** solicitar somente para compromissos legais/comerciais, pagamentos, envio externo, credenciais ou decisões irreversíveis. Executar autonomamente tarefas técnicas permitidas.

**Documentos por intenção:** produto → `docs/PRODUCT.md`; aceite → `docs/REQUIREMENTS.md`; código/dados → `docs/ARCHITECTURE.md`; fontes/direitos → `docs/SOURCES-AND-RIGHTS.md`; sequência → `docs/ROADMAP.md`; deploy/testes → `docs/OPERATIONS.md`; decisões → `docs/DECISIONS.md`; dúvidas → `docs/OPEN-QUESTIONS.md`.

**Não fazer:** prospecção de casas ou afiliados agora; scraping da Sympla sem autorização; reutilizar cartazes presumindo licença; divulgar heatmap como fluxo real de pessoas; criar CNPJ, domínio pago, anúncios ou aplicativo sem nova decisão.

**Formato de entrega:** TL;DR, mudanças concretas, validações, riscos/pendências, próximo passo. Evitar longos relatórios de progresso.
