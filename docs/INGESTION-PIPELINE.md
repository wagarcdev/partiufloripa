# Coleta determinística — primeiro incremento (2026-10-29)

**Estado:** reconciliador implementado e testado; conectores de coleta reais e agendamento **não ativados**.

## Operação
- Entrada: JSON com array `candidates` obtido por uma fonte autorizada.
- Processamento: comparação determinística com `events.json` por URL ou título/casa/data normalizados; identifica candidatos novos, correspondentes e exceções.
- Saída: JSON de relatório de revisão; **não** escreve em `events.json` e **não** publica dados.
- Atributos de entrada sugeridos: `title`, `venue`, `date`, `openingTime`, `showTime`, `sourceUrl`, `observedAt`, `sourcePolicy`.
- `sourcePolicy=approved` atualmente é apenas uma indicação de entrada, **não comprovação automática de permissão**. Exigir fonte aprovada em um registro controlado antes de conectar qualquer coletor.
- Comando: `node scripts/reconcile-candidates.cjs candidates.json review.json`.
- Teste: `node scripts/test-reconcile-candidates.cjs`. O GitHub Actions testa a implementação em push e sob demanda.

## Bloqueios conscientes
1. Auditar termos de acesso, licença e confiabilidade de cada domínio (incluindo API/feed e rate limits).
2. Criar registro confiável de fontes e conectores HTTP limitados por domínio com timeouts e proteção SSRF, nunca aceitar URL arbitrária para busca.
3. Implementar fila de revisão com evidência por campo e decisão humana antes de promover dados.
4. Definir frequência e só então agendar GitHub Actions. Nenhum agendamento ou coleta externa contínua foi autorizado implicitamente.
5. Testar casos de alteração de data/horário, duplicatas, cancelamentos e falhas de fonte com fixtures determinísticos.

O portal estático no GitHub Pages já se atualiza por push, **mas este incremento não coleta a internet automaticamente**.

## Incremento de integracao segura - 2026-10-29
- `scripts/collect-approved-feed.cjs` aceita exclusivamente ID presente no cadastro com fonte explicitamente aprovada, URL HTTPS fixa no mesmo dominio, evidencia e data de revisao de permissao. Entrada JSON v1; limite 1 MiB / 300 eventos, timeout 8s, sem redirect e com endereco DNS publico IPv4 fixado.
- `.github/workflows/collect-approved-feed.yml` tem somente disparo manual. Se uma fonte for autorizada, gera candidatos, reconciliacao e fila de revisao como artefatos do Actions, com retencao de 7 dias. Nenhum commit ou publicacao automatica.
- `scripts/test-approved-feed.cjs` testa autorizacao, limites de URL, DNS privado e normalizacao com fixtures, sem requisicao de rede.
- NENHUMA fonte do registro foi habilitada. O workflow deve falhar de forma segura com `source_not_authorized` se disparado para fonte nao aprovada. Nao confundir workflow existente com coleta em producao.
