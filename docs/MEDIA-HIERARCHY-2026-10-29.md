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

## Publicacao e readback real
- Commit `99dd3ad` aplicado no `main`, GitHub Pages Actions: https://github.com/wagarcdev/partiufloripa/actions/runs/40969632205 (sucesso).
- Node CI validou 14 casas com imagem generica fixa por casa e 4 registros com foto propria relacionada a artista/producao, total 2 novos arquivos WebP de arquivo de artistas.
- Chrome headless na versao publicada em viewports 390x844 e 1440x900: pagina inicial HTTP 200; 15 cards renderizados, 0 imagens quebradas, 0 erros JavaScript e 0 scroll horizontal.
- Todos os anuncios sem foto especifica do Floripa Comedy Club usam uma unica imagem; mesmo teste para Bar do Espartano.
- Teste do catalogo de novembro: 38 cards, 4 com foto de arquivo de artista (3 datas de Gregorio Duvivier e um evento com Vitor Kley). 4 imagens carregadas; 2 arquivos-fonte distintos; nenhum erro de pagina.
- Detalhes internos de Gregorio Duvivier, Vitor Kley e Daniel Duncan: HTTP 200, foto carregada, creditos Wikimedia disponiveis nos casos de arquivo. Creditos: 11 fotos Pexels e 2 arquivos Commons.
- Screenshots mobile de novembro e das paginas internas analisados. Fotos de arquivo nao se apresentam como fotos dos shows especificos de Florianopolis.
- Este teste nao equivale a homologacao de todas as outras fotos, dos eventos ou do beta; os cartazes legados seguem nao aprovados.
