# Seleção determinística de fotos (2026-10-29)

**Regra aprovada:** mesma casa tem a mesma foto genérica; fotos documentadas de artistas/produções podem substituir a imagem genérica nos eventos vinculados.

## Ordem de exibição
1. Cartaz/foto da edição do evento **somente com licença de reprodução verificável** no cadastro `data/image-rights.json`. Nenhum dos 12 cartazes legados foi liberado.
2. Foto relacionada à produção ou ao artista, de arquivo, com licença apropriada e proveniência em `data/event-artist-photos.json`. **Não retrata necessariamente o show anunciado em Florianópolis.** Legenda explícita: "Foto do artista · arquivo".
3. Fotografia genérica da casa (ilustrativa) fixada em `data/venue-media.json`, com arquivo selecionado do inventário Pexels de uso permitido. **Não é fotografia real da casa.** Mesma casa usa a mesma foto nos anúncios sem imagem específica.
4. Foto ilustrativa de categoria com licença Pexels. Para casa desconhecida, fallback determinístico baseado no nome da casa.
5. Arte SVG própria de categoria se nada autorizado estiver disponível.

## Arquivos relacionados
- `scripts/media-selection.js`: resolução pura, usada na home e na página real do evento.
- `data/venue-media.json`: 14 casas reais nomeadas; cada uma com uma imagem genérica fixa já licenciada.
- `data/event-artist-photos.json`: fotos de arquivo com autor, arquivo, URL original, licença, hash e IDs das edições associadas.
- `scripts/test-media-selection.cjs`: testes para uniformidade entre eventos da mesma casa, prioridade de foto de artista, origem, licença, integridade e disponibilidade.

## Fotos verificadas individualmente
- **Vitor Kley**, foto histórica de 2022 da Prefeitura de Novo Hamburgo; CC0 1.0, originada de https://commons.wikimedia.org/wiki/File:Vitor_Kley_na_virada_cultural_novembro_2022_(6)_(54069660540).jpg. Associada ao evento "Armandinho e Vitor Kley — Encontro de Gigantes"; imagem só de Vitor, não do encontro em Florianópolis.
- **Gregório Duvivier**, foto de março de 2026 após apresentação de *O Céu da Língua* em Amsterdã, autor ArlindoPereira, CC BY 4.0: https://commons.wikimedia.org/wiki/File:Greg%C3%B3rio_Duvivier_em_2026.jpg. Associada às três datas do espetáculo em Florianópolis. Crédito e indicação de transformação disponíveis em `creditos.html`.
- Fotos são originais de outros eventos, **não desta apresentação específica**. Não insinuar parceria ou apoio dos artistas.

## Limitações
- Fotos genéricas da casa são de bancos de imagens, não necessariamente da casa propriamente dita.
- A maioria dos eventos ainda não tem foto própria licenciada; não simular autorização para reutilizar cartazes da plataforma de ingressos.
- O beta e auditoria editorial permanecem pendentes de homologação.
