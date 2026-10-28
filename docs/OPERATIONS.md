# Protocolo de evolução e publicação

1. Ler `AGENTS.md` e documento específico; inspecionar `git status`.
2. Formular objetivo, risco e aceite; distinguir implementação real de hipótese.
3. Fazer mudança pequena, reversível, mobile-first e sem dependência paga desnecessária.
4. Rodar `node scripts/validate-events.cjs` e checar sintaxe JS; testar fluxo afetado em navegador.
5. Testar mapa com rede real: imagem HTTP 200 pode conter erro (caso CARTO). Verificar visualmente.
6. Revisar diff, atualizar requisitos/ADR/roadmap quando necessário.
7. Commit/push apenas de arquivos intencionais; verificar GitHub Actions e produção.
8. Reportar entregue, evidência, pendências e próximos passos.

**Checklist UI:** tela estreita, toque/carrossel, busca/filtros, link externo, mapa, tema claro/escuro, fallback de rede, acessibilidade.

**Incidentes:** informação errada → corrigir/retirar e registrar; reclamação de direitos → suspender conteúdo contestado até apuração; falha no deploy → conferir workflow; CDN indisponível → agenda deve continuar útil.

**Fluxo editorial futuro (não implementado):** discovered → pending_review → verified → published → expired/cancelled.

**Regras de operação:** não commitar perfis de Chrome, screenshots de debug, segredos ou scripts temporários; não presumir deploy concluído enquanto workflow estiver em execução. Registrar decisões em `docs/DECISIONS.md`.

## Falha de QA e correção — 2026-10-28
Um mapa que carregava corretamente foi publicado com rótulos sobrepostos e calor desproporcional a um evento. **Carregamento não equivale a aprovação visual.** Toda mudança cartográfica exige captura em viewport móvel realista, tema claro/escuro, verificação de legibilidade, ausência de sobreposição e adequação semântica do heatmap. Evidência inicial: [captura do mapa em Chrome mobile emulado](map-qa-mobile.png). A captura é de emulação, não teste em aparelho físico.
