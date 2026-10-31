# Roadmap — fases e gates

## F0 Fundação (agora)
- [x] Portal técnico publicado no GitHub Pages
- [x] Agenda, busca/filtros, carrossel, mapa experimental
- [x] Harness e documentação inicial versionados
- [ ] Auditar 56 eventos e 14 imagens; retirar conteúdo sem direitos demonstrados
- [ ] Conferir links, horários, cancelamentos e expiração
- [ ] QA mobile, navegadores, mapa, acessibilidade
- [ ] Contato, política de privacidade, atribuições e SEO básico

**Gate:** catálogo e UX suficientemente confiáveis para beta.

## F1 Beta e validação
- [ ] Métricas mínimas com privacidade
- [ ] Feedback, correções, cobertura editorial sustentável
- [ ] Medir descoberta, saída para bilheteria e retorno
- [ ] Avaliar domínio próprio; GitHub Pages pode hospedar domínio personalizado

**Gate:** sinais reais de utilidade, retenção e operação viável.

## F2 Monetização leve
- [ ] Rever elegibilidade AdSense para site
- [ ] Preparar posições de anúncio sem degradar UX
- [ ] Solicitar aprovação e medir impacto

**Gate:** anúncios compatíveis com experiência, regras e audiência.

## F3 Comercial (adiado)
- [ ] Só após decisão explícita: afiliados, patrocínio, destaques, contatos com casas
- [ ] Revisar obrigações fiscais/contratuais conforme modelo adotado

**Futuro condicional:** app e social apenas após tração web. Sem datas artificiais.

## Resultado de QA/auditoria em 2026-10-28
- [x] Substituir mapa esquemático defeituoso por base pronta e validar captura em Chrome mobile emulado.
- [x] Inventariar 56 eventos, 14 arquivos de imagem e 34 URLs distintas; registrar pendências.
- [x] Remover 13 associações de logo genérico como cartaz de evento.
- [ ] Revisar editorialmente os 56 registros e as 12 imagens ainda usadas.
- [ ] Validar direitos de imagem, horários ausentes, regiões genéricas e condições de uso da base Esri.
- [ ] Validar no Android físico, além da emulação.

## Checkpoint editorial — proposta em PR de 31/10/2026

- [x] Revisar e classificar os 56 registros iniciais por evidência, com relatório individual em `reports/INITIAL-EDITORIAL-AUDIT-2026-10-31.md`.
- [x] Preparar no branch: 29 registros conferidos (22 a partir de 31/10), 21 em análise, 6 em quarentena; corrigir abertura/show em 11 sessões do Floripa Comedy Club, título do evento Espartano 14/11 e horários oficiais do Folianópolis.
- [x] Preparar no branch: lista/mapa limitados ao subconjunto conferido e não expirado; URLs pendentes continuam com `noindex` e sem CTA externo.
- [x] Adicionar pipeline de testes em PR para evitar deploy sem validação.
- [ ] Homologar CI do PR, QA visual real em Android e revisão das páginas de detalhe.
- [ ] Contato/política de privacidade, revisão de uso dos tiles Esri e estratégia de convite sem falsa promessa de acesso privado.
- [ ] Só após gates, integrar o PR e verificar Pages; não usar IA na operação, backend ou rotinas de coleta contínua.
