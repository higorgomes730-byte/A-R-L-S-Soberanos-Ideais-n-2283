# Migração para Google Stitch

Este pacote reúne a especificação, o código, os ativos oficiais e as referências visuais do projeto A∴R∴L∴S∴ Soberanos Ideais nº 2283.

## Como importar

1. Descompacte o arquivo de entrega.
2. No Stitch, crie um projeto e use `DESIGN.md` como contexto principal.
3. Anexe `references/home-desktop.png` e `references/home-mobile.png`.
4. Anexe `assets/brasao-oficial-transparente.png` e `assets/abertura-malhete-poster.png`.
5. Se o fluxo aceitar código, adicione `source/site/app/page.tsx`, `source/site/app/globals.css` e os três arquivos de `source/brandbook/`.
6. Comece pelo site institucional e só depois gere o Brand Book e a tela de membros.
7. Valide a proposta com a seção “Critérios de aceite da migração” do `DESIGN.md` antes de exportar.

## O que cada pasta contém

- `DESIGN.md`: especificação-mãe e prompt completo.
- `source/site/`: aplicação Next.js com site público, Brand Book e área de membros.
- `source/brandbook/`: experiência estática integral do Brand Book.
- `assets/`: brasão, vídeo, poster e modelos para download.
- `references/`: capturas desktop/mobile e PDF de referência.
- `docs/`: conteúdo e documentação de apoio; não usar como prompt inicial.
- `MANIFEST.sha256`: checksums para conferência de integridade.

## Regras críticas

- Não reconstruir nem alterar o brasão.
- Não usar estudos de vetorização como ativo oficial.
- Não inventar conteúdo para a área de membros.
- Não publicar diretamente a partir desta migração sem revisão institucional.
- O arquivo principal é `DESIGN.md`; documentos em `docs/` servem para rastreabilidade.
