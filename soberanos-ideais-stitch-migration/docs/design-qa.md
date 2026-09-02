# Design QA — Dados institucionais e contato público

Data: 29/08/2026. Validação estritamente local, sem publicação.

- Endereço, e-mail, Instagram, periodicidade das reuniões e WhatsApp provisório incorporados ao capítulo de Governança e ao conteúdo-base.
- O número informado foi normalizado para o formato público de Manaus: `(92) 92988-2201`; o canal está identificado como contato pessoal autorizado, não como número próprio da Loja.
- Orientação para maçons visitantes publicada sem atribuir nome ou cargo: contato prévio pelos canais autorizados até a ativação da Chancelaria.
- Horário das reuniões, responsável nominal, endereço público definitivo do site e classificação completa das informações internas permanecem registrados como pendências.
- Assinatura de e-mail, prévia PNG, ZIP individual e kit consolidado foram atualizados; ambos os arquivos ZIP passaram no teste de integridade.
- Desktop em 1440 × 1000 px e mobile em 390 × 844 px: nenhum overflow horizontal; links de e-mail, WhatsApp e Instagram têm alvo móvel de 44 px.
- PDF v1.0 reexportado com 24 páginas, 24 marcadores e todos os novos dados; páginas alteradas renderizadas sem corte ou sobreposição.
- Raiz e `.site-deploy/public/site/` estão sincronizados; `node --check`, auditoria premium estrita, ESLint, TypeScript e build Vinext: aprovados.

final result: passed

---

# Design QA — Home institucional pública

Data: 29/08/2026. Validação local de `http://127.0.0.1:8091/`, sem publicação.

## Evidências

- Desktop: `output/playwright/home-desktop.png` — viewport 1440 × 900 px.
- Mobile: `output/playwright/home-mobile-full.png` — viewport 390 × 844 px, página completa.
- Rotas verificadas: `/`, `/brandbook` e `/membros`.

## Resultado visual e funcional

- O hero apresenta o título em duas linhas no desktop, tríade alinhada ao lockup e vídeo com o malhete, tronco e pedestal visíveis.
- A transição entre o azul e o vídeo usa máscara discreta; o vídeo carregou com `readyState: 4` e reproduziu sem som.
- História, tríade de princípios, orientação a visitantes e contato foram conferidos em desktop e mobile, sem overflow horizontal.
- O acordeão dos princípios responde ao clique por elemento semântico `details/summary`.
- O brasão oficial foi reutilizado sem recorte, recoloração ou reconstrução.
- O Brand Book continua isolado em iframe na rota `/brandbook`; `/membros` informa honestamente que o acesso ainda não está habilitado.

## Acessibilidade e validação técnica

- Foco visível, link de salto, alvos móveis mínimos de 44 px, scrollbar tokenizada e `prefers-reduced-motion` foram preservados.
- ESLint, TypeScript, `node --check ../app.js` e build Vinext: aprovados.
- Auditoria estrita do projeto: 0 erros, 0 avisos e 0 violações.

final result: passed

---

# Design QA — Brand Book institucional v1.0 em PDF

Data: 29/08/2026. Validação estritamente local, sem publicação.

- PDF final consolidado em 24 pranchas 16:9, com uma página por capítulo editorial.
- Metadados institucionais, versão `v1.0` e 24 marcadores de navegação verificados.
- Todas as páginas foram renderizadas e comparadas visualmente com a prova aprovada; não há cortes, sobreposições ou páginas excedentes.
- Brasão e demais ativos oficiais foram preservados, sem recorte, recoloração ou reconstrução.
- Os ajustes são exclusivos de impressão; estrutura, layout responsivo, interações e animações da experiência de tela permanecem inalterados.
- `index.html`, `styles.css`, `app.js` e `assets/` estão sincronizados com `.site-deploy/public/site/` por comparação direta e recursiva.
- `node --check`, ESLint, TypeScript e build Vinext: aprovados.

final result: passed

---

# Design QA — WhatsApp e assinatura de e-mail

Data: 29/08/2026. Validação estritamente local, sem publicação.

- Novo comunicado 4:5 disponível em PPTX editável e PNG pronto; inspeção individual aprovada e teste de slides sem overflow.
- Nova assinatura de e-mail disponível como pacote ZIP com HTML editável e cópia idêntica do brasão de aplicação.
- Evidências: `assets/modelos/modelo-whatsapp-comunicado-soberanos-ideais.png` e `assets/modelos/previa-assinatura-email-soberanos-ideais.png`.
- O HTML foi renderizado em navegador real: tabela de 620 × 121 px, imagem carregada e nenhum overflow.
- A central passou a oferecer 23 ações de download; os seis novos rótulos estão presentes em desktop e mobile.
- Em 1440 × 1000 px e 390 × 844 px não há overflow horizontal nem imagem quebrada; alvos medem de 52 a 72 px e o foco por teclado permanece visível.
- Os cinco endereços novos ou atualizados responderam `200 OK` no servidor local.
- `node --check`, ESLint, TypeScript dos pontos de entrada, build Vinext e auditoria estrita: aprovados.
- O kit principal foi atualizado para 18 arquivos e passou no teste estrutural.
- O espelho foi normalizado: apenas `index.html`, `styles.css`, `app.js` e `assets/` permanecem em `/site/`; duplicatas anteriores foram preservadas em `tmp/site-root-asset-duplicates-20260829/`.
- Raiz e `.site-deploy/public/site/assets/` permanecem idênticos por comparação recursiva.

final result: passed

---

# Design QA — Kit de modelos institucionais e downloads

Data: 29/08/2026. Validação estritamente local, sem publicação.

## Entregáveis

- Seis modelos editáveis concluídos: papel timbrado e ofício em DOCX; certificado, apresentação institucional, feed e story em PPTX.
- PDFs de referência, PNGs prontos para redes sociais, prévias renderizadas e kit consolidado em ZIP.
- Brasão-fonte preservado sem alteração e derivação técnica transparente aplicada somente à área externa ao círculo.
- Central de downloads adicionada ao capítulo 08, com 17 ações e 11 arquivos únicos.

## Verificação visual e funcional

- Evidências: `outputs/modelos-downloads-desktop.png` e `outputs/modelos-downloads-mobile.png`.
- Desktop em 1440 × 1000 px e mobile em 390 × 844 px: nenhum overflow horizontal e nenhuma imagem quebrada.
- No celular, a central usa uma única coluna; alvos interativos medem entre 52 e 72 px e o foco por teclado permanece visível.
- Os 11 endereços únicos responderam `200 OK` no servidor local.
- Todos os DOCX, PPTX e o ZIP passaram no teste estrutural; os quatro PPTX passaram no teste de overflow de slides.
- `node --check`, ESLint, TypeScript dos pontos de entrada, build Vinext e auditoria estrita: aprovados.
- `index.html`, `styles.css`, `app.js` e `assets/` estão sincronizados com `.site-deploy/public/site/` por checksum e comparação recursiva.
- `DESIGN.md` não foi alterado nesta etapa e conserva a validação registrada anteriormente.

final result: passed

---

# Design QA — Pictogramas das Sete Luzes

Data: 28/08/2026. Validação estritamente local, sem publicação.

- Evidências: `outputs/sete-luzes-pictogramas-desktop.png` e `outputs/sete-luzes-pictogramas-mobile.png`.
- A antiga fileira de caixas vazias foi substituída por uma prancha contínua com sete componentes editoriais.
- Cada componente contém número, pictograma linear exclusivo, chave de leitura e nome integral da virtude.
- Os pictogramas compartilham campo de 64 × 64, traço de 1,6 px, terminais arredondados, Ouro Ideal e ausência de sombra ou moldura individual.
- Os desenhos são marcados como editoriais e não integram nem reinterpretam o brasão oficial.
- Conferidos sete itens e sete SVGs; não há overflow horizontal em 390 × 844 px.
- JavaScript, ESLint, TypeScript, build Vinext e auditoria estrita: aprovados.
- Linter oficial de `DESIGN.md`: 0 erros; 8 avisos não bloqueantes já conhecidos.
- Raiz, ativos e espelho de deploy permanecem sincronizados.

final result: passed

---

# Design QA — Tríade como assinatura do nome

Data: 28/08/2026. Validação estritamente local, sem publicação.

- Evidências finais: `outputs/abertura-triade-alinhada-desktop.png` e `outputs/abertura-triade-alinhada-mobile.png`.
- A tríade inicia em linha, forma o triângulo equilátero e se reduz até o ponto-alvo medido depois da palavra “Ideais”.
- O destino é responsivo: em desktop acompanha o nome em uma linha; no celular permanece ao lado de “IDEAIS” após a quebra.
- A tríade foi retirada do fluxo tipográfico para não deslocar a segunda linha. Em 390 px, os centros horizontais medidos foram `194,996 px` para “SOBERANOS” e `195 px` para “IDEAIS”.
- O centro geométrico recebeu compensação óptica vertical de 10% da área-alvo; ouro permanece no eixo e vinho/branco compartilham a mesma linha de base.
- Cores computadas: Vinho Fraternal `rgb(122, 30, 44)`, Ouro Ideal `rgb(245, 179, 55)` e Branco Soberano `rgb(247, 248, 245)`.
- Não há overflow horizontal em 390 × 844 px; a abertura reduzida e a impressão continuam ignorando a animação.
- JavaScript, ESLint, TypeScript, build Vinext e auditoria estrita: aprovados.
- Linter oficial de `DESIGN.md`: 0 erros; 8 avisos preexistentes não bloqueantes.
- Raiz, ativos e espelho de deploy permanecem sincronizados.

final result: passed

---

# Design QA — Transição entre cor e vídeo

Data: 28/08/2026. Validação local, sem publicação.

- A divisória da capa foi reduzida a um fio dourado com 8% de opacidade.
- No desktop, um véu funcional de Azul Noturno dissolve lateralmente a emenda com o vídeo em aproximadamente 100 px.
- Abaixo de 1120 px, a transição muda para o eixo vertical e acompanha o vídeo posicionado sob o texto.
- Conferidos 1280 × 720 e 828 × 620; a escultura permanece nítida e não houve overflow horizontal.
- Nenhum conteúdo, breakpoint, dimensão, ponto focal ou tempo de animação foi alterado.

final result: passed

---

# Design QA — Tríade cromática da abertura

Data: 28/08/2026. Validação estritamente local, sem publicação.

- Evidências: `outputs/abertura-triade-horizontal.png`, `outputs/abertura-triade-harmonica-desktop.png` e `outputs/abertura-triade-harmonica-mobile.png`.
- A sequência inicial apresenta Vinho Fraternal, Ouro Ideal e Branco Soberano, nesta ordem horizontal.
- A formação final usa um triângulo equilátero centralizado: Ouro Ideal no vértice, Vinho Fraternal na base esquerda e Branco Soberano na base direita.
- A distância lateral foi reduzida de 6,2 rem para 4 rem; o centro geométrico permanece estável durante a transformação.
- Conferidos desktop em 1280 × 720 px e mobile em 390 × 844 px, sem overflow horizontal.
- Tempos, easing, progressão para o brasão e comportamento de `prefers-reduced-motion` foram preservados.
- JavaScript, ESLint, TypeScript, build Vinext e auditoria estrita: aprovados.
- Raiz e espelho de deploy permanecem idênticos por checksum.

final result: passed

---

# Design QA — Refinamento dos capítulos 08–09

Data: 28/08/2026. Validação local de `http://127.0.0.1:8089/index.html`, sem publicação.

## Evidências

- Desktop: `outputs/refinamento-08-desktop.png`.
- Mobile: `outputs/refinamento-08-mobile.png` — viewport 390 × 844 px.

## Resultado visual e responsivo

- Aplicações, manual, papelaria, reconhecimento, presença digital e governança foram reorganizados como pranchas editoriais planas.
- Interfaces cenográficas, controles sociais simulados, inclinações e sobreposições foram removidos.
- O índice do manual mantém os dez capítulos em sequência contínua e o brasão permanece aplicado a partir do arquivo fornecido.
- Em 1280 px, as seções refinadas não apresentam recorte interno; a navegação passa ao menu compacto antes de colidir com a marca.
- Em 390 px, não há overflow horizontal e todos os links e botões visíveis possuem altura mínima de 44 px.

## Verificações funcionais

- IDs, âncoras, menu, impressão, vídeo, abertura e comportamento de movimento reduzido permaneceram funcionais.
- Raiz e espelho `.site-deploy/public/site/` foram sincronizados.

final result: passed

---

# Design QA — Enquadramento responsivo do vídeo de abertura

Data: 28/08/2026. Validação local, sem publicação.

- O vídeo vertical mede 720 × 1280 px e continua aplicado com `object-fit: cover`.
- O ponto focal passou a responder ao formato da capa: 26% no desktop, 18% no breakpoint intermediário e 22% no celular.
- Em 1280 × 720, a figura aparece com malhete, cabeça e tronco completos na metade direita da capa.
- Em 828 × 620, tamanho que reproduz o corte relatado, a imagem agora prioriza cabeça, ombros e parte do tronco em vez da cintura.
- Em 390 × 844, malhete e tronco permanecem visíveis, sem overflow horizontal.
- O mesmo ponto focal é reutilizado pelo poster em `prefers-reduced-motion` e impressão.
- Estrutura, conteúdo, dimensões da capa, breakpoints e tempos de animação não foram alterados.

final result: passed

---

# Design QA — Paleta derivada do brasão

Data: 27/08/2026. Validação local, sem publicação.

## Fonte cromática

- As cores foram amostradas do interior circular do brasão oficial, sem alterar o arquivo original.
- Paleta-base: Azul Soberano `#0A2250`, Vinho Fraternal `#66081C`, Ouro Ideal `#F5B337`, Marfim Floral `#E7E9E9`, Azul Noturno `#061432` e Bronze de Apoio `#876845`.
- A tríade de abertura usa apenas duas variações de luminosidade derivadas do brasão — azul `#2E6DB4` e vinho `#7A1E2C` — para que os círculos sólidos permaneçam visíveis sobre o Azul Noturno. O ouro permanece `#F5B337`.
- O ouro é reservado a foco e destaque sobre superfícies escuras; não é usado como texto sobre branco.

## Verificação visual e técnica

- Quadro inicial conferido com três círculos sólidos, sem contorno ou brilho, na ordem azul, vinho e ouro.
- Navegação, hero, botões, amostras do manual e capítulos solenes foram harmonizados sem mudar DOM, grids, breakpoints, keyframes ou tempos.
- Contrastes medidos: azul/branco 15,47:1; vinho/branco 12,99:1; ouro/azul-noturno 9,87:1; tinta histórica/marfim 15,29:1.
- `node --check`, build Vinext e parse de `tokens.json`: aprovados.
- Auditoria estrita: 0 violações, 0 avisos. Linter de `DESIGN.md`: 0 erros; 7 avisos não bloqueantes.
- HTML, CSS, JavaScript e `assets/` estão idênticos ao espelho de deploy por checksum e comparação recursiva.
- Nenhuma referência à paleta digital anterior permaneceu nos arquivos oficiais.

final result: passed

---

# Design QA — Arquitetura do manual físico

**Fonte visual de verdade**

- `/var/folders/gh/hl12zvp150q0xwl5jdwc2d7m0000gn/T/codex-clipboard-f741d2b2-bce0-445f-8c82-5e529e71ff2f.png`
- 1124 × 724 px, densidade não informada.

**Implementação verificada**

- URL local: `http://127.0.0.1:7456/api/projects/brand-book-soberanos-ideais-2283/raw/brand-book-institucional.html#arquitetura-manual`
- Captura desktop: `implementation-manual-architecture.jpg`, 1440 × 1000 px, viewport CSS 1440 × 1000, DPR 1.
- Captura móvel: `implementation-manual-architecture-mobile.jpg`, 390 × 844 px, viewport CSS 390 × 844, DPR 1.
- Estado: seção `#arquitetura-manual`, navegação fixa, conteúdo carregado.

**Evidência comparativa de visão completa**

- A referência e a implementação foram abertas e comparadas visualmente no mesmo ciclo de QA.
- Foram preservados os atributos estruturais centrais: fundo escuro, superfície de madeira, livros/cadernos físicos, duplas marfim, grade de dez pranchas, numeração sequencial e leitura editorial progressiva.
- A implementação adapta deliberadamente “anatomia”, “biblioteca de símbolos” e “construção heráldica” para integridade do arquivo, evidências/memória e grade editorial. Essa diferença é normativa e impede a invenção de componentes do brasão.

**Evidência comparativa focal**

- Capa: o brasão fornecido aparece integral, centralizado e sem redesenho.
- Duplas 04–09: títulos, amostras e aplicações permanecem legíveis; o fundo de página marfim foi confirmado após o ajuste da prancha 06.
- Prancha 10: passou a ocupar toda a largura da grade, eliminando as duas lacunas visuais da primeira captura.
- Mobile: a grade muda para uma coluna, sem reduzir a capa a um thumbnail ilegível.

**Superfícies de fidelidade**

- Tipografia: Manrope mantém a leitura contemporânea; IBM Plex Mono organiza legendas; Cormorant Garamond aparece apenas no gesto cerimonial.
- Espaçamento e ritmo: três colunas no desktop, duas no tablet e uma no mobile; bordas pretas e legendas compactas reproduzem o contato editorial da referência.
- Cores: azul, vinho, ouro e marfim usam os tokens institucionais existentes; madeira e preto funcionam como ambiente, não como novas cores de marca.
- Imagens e ativos: somente o JPEG fornecido do brasão é usado. Não há brasão gerado, redesenhado ou decomposto.
- Conteúdo: as dez pranchas usam texto institucional verdadeiro ou explicitamente provisório, sem atribuir significado heráldico não documentado.

**Histórico de comparação**

1. Primeira captura desktop: [P2] prancha 06 parecia perder o fundo marfim; [P2] prancha 10 deixava duas células vazias.
2. Correções: fundo marfim explícito e borda central na grade editorial; prancha final alterada para `grid-column: 1 / -1`.
3. Pós-correção: composição contínua, prancha final em largura total e versão móvel em coluna única. Nenhum P0, P1 ou P2 permaneceu.

**Testes funcionais**

- A seção foi carregada no navegador interno em desktop e mobile.
- A navegação contém o item “Manual” e o destino existe no DOM.
- O arquivo JavaScript passou em `node --check`.
- A checagem visual não apresentou ativos quebrados.

**Follow-up polish**

- [P3] Uma futura matriz vetorial oficial permitiria impressão de maior formato sem depender do JPEG atual.
- [P3] Provas físicas devem definir papel, hot stamping, relevo e encadernação antes de transformar os mockups em especificação produtiva.

final result: passed

---

# Design QA — Abertura da tríade institucional

Data: 27/08/2026. Validação local de `http://127.0.0.1:8089/index.html`, sem publicação.

## Sequência verificada

- Quadro inicial: somente três círculos sólidos, iguais e alinhados horizontalmente na ordem azul, vinho e dourado.
- Transformação: os círculos formam um triângulo equilátero, sem linhas, contorno, brilho ou recipiente.
- Atmosfera: as ondas luminosas em azul, vinho e dourado permanecem ausentes no quadro inicial e surgem discretamente somente após a formação do triângulo.
- Revelação: a tríade sobe; o brasão oficial, `A∴R∴L∴S∴`, `SOBERANOS IDEAIS` e `Nº 2283 · SURSUM CORDA` entram de baixo para cima.
- Encerramento: a abertura libera o scroll, interrompe o canvas e remove a camada após a transição. “Pular abertura” encerra imediatamente e também libera o documento.
- O recorte circular da abertura oculta apenas o quadriculado externo gravado no JPEG; o conteúdo do brasão não é redesenhado, recolorido ou reconstruído.

## Responsividade e acessibilidade

- Conferidos o primeiro quadro, a formação triangular e a revelação completa em desktop; a responsividade da revelação permanece coberta pela validação móvel anterior.
- Não há overflow horizontal; nenhuma imagem ou mídia apresentou erro de carregamento.
- O menu móvel continua alternando `aria-expanded` e a classe de estado corretamente.
- `prefers-reduced-motion: reduce` remove integralmente a abertura; a impressão também a oculta.
- O comando de salto é um botão nativo com foco visível e alvo mínimo de 44 px.
- O botão foi elevado acima do lockup animado; o teste final confirmou o próprio botão como alvo do hit test e encerrou a abertura com `introHidden: true` e scroll liberado.

## Validação técnica

- JavaScript: aprovado em `node --check`.
- Auditoria estrita: 0 violações.
- ESLint e build Vinext: aprovados.
- Linter oficial de `DESIGN.md`: 0 erros; avisos não bloqueantes do arquivo-base.
- `index.html`, `styles.css`, `app.js` e o espelho de deploy foram sincronizados por checksum.

final result: passed

---

# Design QA — Correção do fundo do brasão

Data: 27/08/2026. A inspeção confirmou que o PNG fornecido possui canal alfa totalmente opaco e que o JPEG oficial contém o fundo externo gravado. A correção foi aplicada somente na apresentação: máscara circular de 48,7%, sem redesenho, recoloração ou reconstrução do brasão.

- As 31 aplicações do arquivo carregaram sem falha.
- O cabeçalho e a abertura foram conferidos visualmente sem o quadrado externo.
- A auditoria estrita retornou 0 violações e o build Vinext foi aprovado.
- Raiz e espelho de deploy permanecem idênticos por checksum.

final result: passed

---

# Design QA — Revamp conforme `DESIGN.md`

Data: 27/08/2026. Esta seção substitui a direção visual histórica acima para o estado atual do Brand Book.

## Evidências

- Desktop: `work/design-qa/apple-revamp-desktop.png` — viewport 1440 × 1000 px.
- Mobile: `work/design-qa/apple-revamp-mobile.png` — viewport 390 × 844 px.
- A raiz e `.site-deploy/public/site/` têm checksums idênticos para HTML, CSS e JavaScript; `assets/` não apresenta diferenças.

## Resultado visual e responsivo

- SF Pro do sistema confirmado no corpo e nos títulos; nenhuma fonte externa é carregada.
- Nenhum gradiente computado ou referência às fontes/cores antigas foi encontrado.
- Sombras aparecem somente na mídia de abertura e na imagem editorial permitida.
- Não há overflow horizontal em 1440 px ou 390 px; em mobile, todos os links e botões visíveis têm pelo menos 44 px em ambos os eixos.
- As 30 imagens carregaram sem falha. O vídeo atingiu `readyState: 4`, permaneceu mudo e em loop, com poster válido.

## Interação e acessibilidade

- O menu mobile abre com `aria-expanded="true"`, fecha após navegar e preserva a âncora `#essencia`.
- O foco do botão de capítulos é visível: 3 px em `#0071E3`, com offset de 4 px.
- Em `prefers-reduced-motion: reduce`, o vídeo pausa, perde `autoplay`, fica oculto e o poster é exibido; transições e animações caem para 0,01 ms.
- Em mídia de impressão, a navegação e o vídeo ficam ocultos, o poster é preservado e as páginas mantêm 16 × 9 pol.

## Validação técnica

- `node --check ../app.js`, ESLint, TypeScript e `pnpm build`: aprovados.
- Auditoria estrita do projeto: 0 violações.
- Linter oficial de `DESIGN.md`: 0 erros; 8 avisos não bloqueantes do arquivo fornecido.

final result: passed

---

# Design QA — Correção das pranchas 09 e 10

Data: 28/08/2026. Validação local, sem publicação.

- Evidências: `outputs/correcao-pranchas-09-10-desktop.png` e `outputs/correcao-pranchas-09-10-mobile.png`.
- A prancha 09 foi reconstruída como composição plana de ofício e correspondência, sem rotação, recorte ou sobreposição do brasão.
- A prancha 10 substitui a área branca vazia por uma síntese dos capítulos 01–03, 04–06 e 07–10.
- Conferidos desktop em 1280 × 720 px e mobile em 390 × 844 px.
- Não há overflow horizontal, recorte interno ou imagem quebrada.

final result: passed

---

# Design QA — Descoberta e compartilhamento do site institucional

Data: 01/09/2026. Validação do build de produção em `http://127.0.0.1:8091`, estritamente local e sem nova publicação.

## Metadados e indexação

- A Home fornece título, descrição, URL canônica, Open Graph, Twitter Card e dados estruturados `Organization` em português do Brasil.
- O brasão oficial é usado como ícone e apple touch icon, sem redesenho, recorte ou recoloração.
- `manifest.webmanifest`, `robots.txt`, `sitemap.xml` e `opengraph-image.png` responderam com HTTP 200 e tipos de conteúdo corretos.
- O sitemap contém somente `/` e `/brandbook`; `/membros` permanece fora do índice e declara `noindex, nofollow, nocache`.
- A imagem de compartilhamento foi conferida em 1440 × 900 px e preserva o enquadramento aprovado da Home.

## Validação técnica

- ESLint: aprovado.
- TypeScript (`tsc --noEmit`): aprovado.
- Build Vinext: aprovado.
- JavaScript estático (`node --check app.js`): aprovado.
- Rotas `/`, `/brandbook`, `/membros`, `/manifest.webmanifest`, `/robots.txt`, `/sitemap.xml` e `/opengraph-image.png`: HTTP 200 no servidor local.

final result: passed
