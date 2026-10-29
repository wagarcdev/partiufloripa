# Beta por link - contrato de acesso - 2026-10-29

Status: canal de convite aprovado (ADR-024). **Nao equivale a beta lancado.**

## Mecanismo aprovado
- Enviar a um conjunto limitado de convidados um link do portal/prototipo, sem cadastro e sem login obrigatorio.
- Nao afirmar que o link e secreto ou que ha controle de acesso; ele pode ser encaminhado, indexado ou acessado por terceiros.
- Nao adicionar tokens de convite em URLs como se fossem autenticacao; o GitHub Pages e publico.
- Evitar coletar identidade ou dados pessoais sem necessidade e politica apropriada.

## Gates para convidar
1. Selecionar um subconjunto de eventos com revisao editorial individual concluida e fonte verificavel.
2. Confirmar datas, horarios, localizacoes e a sinalizacao de campos nao confirmados.
3. QA mobile e desktop, acessibilidade, links, mapa e privacidade.
4. Publicar texto de transparencia: beta experimental, nao uma agenda oficial; instrucao de feedback e contato.
5. Revisao de publicacao/aceite do Client. O convite nao sera enviado automaticamente por este contrato.

## Se acesso realmente restrito for necessario
Adotar hospedagem/autenticacao separada, com gate de acesso real. O link simples escolhido agora e uma forma de distribuicao, nao barreira tecnica.
