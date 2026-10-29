# Fila determinística de revisão — 2026-10-29

**Estado:** ferramenta integrada ao repositório e coberta por testes de CI; nenhuma fonte habilitada para coleta automatizada.

## O que faz
- Um registro de fontes em `data/source-registry.json` adota negação por padrão. `collectionPermission=unverified` e `enabled=false` impedem interpretar cadastro como autorização de acesso.
- A ferramenta recebe `candidates.json` (array `candidates`) e gera `review.json` com identificadores, evidências, valores propostos e motivos de revisão.
- Exceções: fonte desconhecida, em quarentena ou não autorizada, URL sem HTTPS, campos ausentes, horários inválidos e duplicatas.
- **Todos** os candidatos permanecem `needs_human_review`; nenhum é aprovado automaticamente.
- Não acessa a Internet, não altera `events.json`, não publica eventos e não dá como verificada uma fonte só porque está cadastrada.

## Execução
```sh
node scripts/prepare-review-queue.cjs candidates.json review.json
node scripts/test-review-queue.cjs
```

## Relação com reconciliador
`scripts/reconcile-candidates.cjs` compara registros com o catálogo. `prepare-review-queue.cjs` produz pendências de verificação de conteúdo/fonte. Ambos são determinísticos, independentes e não têm permissão para publicar.

## Próximos gates
1. Verificar autorização, limites, termos e proveniência de cada domínio e documentar evidências.
2. Criar conectores HTTP específicos com allowlist, rate limit, tempo limite, validação de resposta e proteção contra SSRF.
3. Especificar ato de aprovação humana auditável antes de atualizar `events.json`.
4. Testar com dados coletados de fonte autorizada e somente então considerar agendamento periódico no GitHub Actions.

O CI executa testes de fila; isso **não significa que a coleta esteja agendada ou ativa**.
