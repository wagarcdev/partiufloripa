# Cards A1.11 — navegação interna e imagens (2026-10-28)

## Decisão
- Manter carrossel largo/gordinho e busca baixa/horizontal, aprovados na A1.10.
- O **card inteiro** é um único link acessível para `evento.html?date=...&title=...&venue=...`; não colocar links externos ou botões aninhados dentro dele.
- A página de detalhes interna apresenta título, categoria, data, hora, casa, região, imagem, nota disponível e preço somente quando informado.
- Somente o CTA **Ver evento na página oficial** abre a fonte externa; não processar ingressos ou pagamentos.
- URLs internas usam chaves compostas dos dados atuais; identificador persistente/slug e URLs canônicas ficam como melhoria futura.

## Imagens e segurança editorial
- Cartazes e imagens com texto usam `object-fit: contain` para evitar recortes; aceitar faixas laterais no lugar de cortar o título.
- Ordem: imagem específica do evento > imagem validada da casa > arte contextual da categoria com nome da casa.
- A única associação de casa preexistente é Bar do Espartano → `images/66b79f7b747f8c3c.webp`. Sua licença/adequação comercial ainda requer auditoria.
- **Não** atribuir fotos de uma casa a outra nem usar imagens geradas como se fossem fotos reais.
- Para cada nova casa: registrar caminho da imagem, identidade da casa, origem, licença/permissão, data de verificação e qualidade/resolução antes de inserir no mapa `venueImages`.
- Onde ainda não há foto validada, a arte de categoria + nome da casa é o fallback provisório, **não uma foto aprovada**.

## Pendências abertas
1. QA visual de carrossel, busca e página de detalhes em desktop e Android, incluindo títulos longos, cartazes com tipografia nas bordas, rolagem horizontal e foco por teclado.
2. Fotos padrão **de cada casa**: inventário de casas, seleção e validação editorial/autorizações de imagens; cobertura ainda incompleta.
3. Dados: 8 eventos sem horário e 31 alertas de região genérica no validador; verificar fontes sem inventar.
4. Auditoria editorial e de direitos de 12 associações de imagem e de links; ver relatórios existentes.
5. Preços não estão preenchidos no catálogo; exibir “Consultar valores” sem inventar R$.
6. Melhorar URLs internas com ID persistente, metadados SEO por evento e compartilhamento direto.
7. Testar deploy do GitHub Pages e navegação real após publicação.

## Critérios de aceite
- Clique/toque em qualquer região do card abre detalhes internos; Enter com foco no card também.
- Nenhum link externo nos cards; CTA externo somente na página interna.
- Nenhum título impresso no cartaz é cortado por `object-fit: cover`.
- Fotos da casa identificadas como tal; fallbacks honestos quando não houver imagem aprovada.
- Nenhuma regressão nos filtros, no mapa ou na rolagem do carrossel.
