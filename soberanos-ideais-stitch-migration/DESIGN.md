# A.R.L.S. Soberanos Ideais nº 2283 — Especificação-mãe para Google Stitch

## 1. Finalidade deste arquivo

Este documento é a fonte principal de contexto para migrar ao Google Stitch o ecossistema digital da A∴R∴L∴S∴ Soberanos Ideais nº 2283, em Manaus, AM. Ele descreve o site institucional, o Brand Book e a área de membros. Use-o junto com os arquivos de código, imagens e modelos incluídos neste pacote.

O Stitch deve preservar a identidade institucional existente e produzir telas editáveis e protótipos, não reinterpretar a Loja nem redesenhar seu patrimônio visual. Quando houver divergência entre uma sugestão gerada e esta especificação, esta especificação prevalece.

## 2. Prompt principal para o Stitch

Crie um projeto responsivo em português do Brasil para a A∴R∴L∴S∴ Soberanos Ideais nº 2283, Manaus, AM, sob o lema “Sursum Corda — Corações ao alto”. Importe como contexto o código e as imagens deste pacote e reproduza a estrutura, o conteúdo e a direção visual descritos abaixo.

O projeto possui três experiências conectadas:

1. Site institucional público, com navegação curta, abertura editorial, história, princípios, orientação a maçons visitantes e contato.
2. Brand Book digital, organizado em capítulos e pranchas 16:9, com manual de preservação do brasão, sistema visual, aplicações e downloads.
3. Área de membros, apresentada por enquanto como ambiente reservado ainda não habilitado.

Mantenha a linguagem contemporânea e solene, o amplo respiro editorial, as superfícies planas, a transição suave entre azul profundo e vídeo, e o movimento contido. Não use estética de template, excesso de cartões, gradientes decorativos, brilho, glassmorphism ornamental, sombras de interface ou símbolos maçônicos genéricos.

O brasão oficial é indivisível. Use exclusivamente `assets/brasao-oficial-transparente.png`. Não redesenhe, vetorize, recolora, recorte, simplifique, gere novamente por IA, substitua tipografia interna nem extraia seus elementos para criar outra marca.

## 3. Identidade institucional

- Nome completo: A∴R∴L∴S∴ Soberanos Ideais nº 2283
- Forma curta: Soberanos Ideais 2283
- Localidade: Manaus, AM
- Lema: Sursum Corda — Corações ao alto
- Fundação: 24 de setembro de 1984
- Continuidade: após o fechamento da Loja, ela foi reativada em 2022 com outro nome, preservando o número 2283. O nome atual é Soberanos Ideais.
- Obediência indicada no brasão e materiais: GOB / GOBAM
- Público: irmãos do quadro, maçons visitantes, comunidade externa e futuras administrações.
- Proposta de valor: preservar a memória, apresentar a essência e os princípios da Loja, orientar a comunicação e manter regras de aplicação da marca.

### Princípios centrais

- Fraternidade: unir sem apagar diferenças; igualdade, respeito, tolerância, pertencimento e compromisso recíproco.
- Caridade: servir com discrição e dignidade; acolher e auxiliar sem autopromoção.
- Verdade: fazer coincidir palavra e conduta; conhecimento, retidão e coerência.

Os três princípios são representados por três círculos sólidos e iguais. Ouro no topo, vinho na base esquerda e branco na base direita formam um triângulo vertical. Os círculos não têm linhas de conexão, textura, brilho nem contorno decorativo.

## 4. Sistema visual

### Paleta funcional

| Token | Cor | Uso |
|---|---:|---|
| Azul Soberano | `#0A2250` | superfície institucional, ações em fundos claros |
| Azul Noturno | `#061432` | fundo principal, navegação, rodapé |
| Vinho Fraternal | `#66081C` | capítulos, ênfase institucional, princípio Fraternidade |
| Ouro Ideal | `#F5B337` | seleção, foco, detalhes, links sobre fundo escuro |
| Branco Soberano | `#F7F8F5` | texto e superfícies claras, princípio Verdade |
| Marfim Floral | `#E7E9E9` | páginas claras e texto secundário sobre escuro |
| Tinta Histórica | `#230B10` | texto em superfícies claras |
| Bronze de apoio | `#876845` | referência material, uso pontual |
| Azul digital auxiliar | `#2E6DB4` | somente efeitos digitais já previstos; não integra a tríade principal |

Regras: azul organiza ações; ouro orienta foco e seleção; vinho cria contraste institucional; branco e marfim dão legibilidade. Não usar vinho ou bronze como cor padrão de botão. Não usar ouro como texto corrido sobre fundo claro.

### Tipografia

Use a família do sistema Apple, sem fontes externas:

- Títulos: `SF Pro Display, system-ui, -apple-system, BlinkMacSystemFont, sans-serif`
- Texto e interface: `SF Pro Text, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`
- Títulos principais: peso 600, entrelinha de 0,92 a 1,07, tracking negativo entre `-0.045em` e `-0.064em`.
- Corpo: 17–18 px, peso 400, entrelinha 1,47–1,55.
- Eyebrows e metadados: 10–12 px, peso 600, caixa alta, tracking entre `0.12em` e `0.18em`.
- Não usar peso 500 em corpo. Não transformar textos longos em caixa alta.

### Forma, profundidade e ritmo

- Largura máxima editorial: 1440 px.
- Brand Book: pranchas com proporção 16:9 e referência máxima de 1600 × 900 px.
- Superfícies: planas, retangulares e de ponta a ponta.
- Raios: zero em seções; 9999 px apenas em ações tipo pílula; 8–18 px somente em pequenos controles ou utilitários.
- Sombras: nenhuma em cartões, botões ou texto. Sombra pode dar peso apenas a imagem/objeto fotográfico, de modo discreto.
- Divisórias: linhas de 1 px e baixo contraste.
- Espaçamento de seção: 80–190 px conforme a escala da tela.
- Imagem hero: sem cantos arredondados, ocupando toda a metade da composição.

## 5. Site institucional público

### Cabeçalho

Cabeçalho fixo de 76 px em Azul Noturno com leve transparência e desfoque funcional. À esquerda: brasão de 48 px, “Soberanos Ideais” e “A∴R∴L∴S∴ nº 2283”. Ao centro, no desktop: A Loja, Princípios, Visitantes e Contato. À direita: Brand Book e botão de contorno “Área de membros”. Em telas de até 1120 px, substituir a navegação central por menu móvel de dois traços, mantendo alvos mínimos de 44 px.

### Hero — início

Layout desktop dividido: conteúdo no Azul Noturno à esquerda e vídeo do artífice com malhete à direita. A junção entre a cor e o vídeo é um fade lateral discreto, sem linha dura. O vídeo usa `abertura-malhete.mp4` e o poster `abertura-malhete-poster.png`, com `object-fit: cover`; o enquadramento deve mostrar o tronco e o braço com o malhete, sem cortar a figura de modo acidental.

Conteúdo:

- Eyebrow: “A∴R∴L∴S∴ Soberanos Ideais nº 2283”
- H1: “Ideais que elevam. Valores que permanecem.”
- Tríade de três círculos alinhada ao lado do final do título, proporcional e reta.
- Apoio: “Uma Loja construída sobre a memória, o trabalho e a permanência dos princípios.”
- CTA primária: “Conheça a Loja” → `#loja`
- CTA secundária: “Sou maçom visitante” → `#visitantes`
- Rodapé da coluna: “Fundada em 24 · 09 · 1984”
- Legenda do vídeo: “Ordem · Construção · Continuidade”

### Faixa do lema

Faixa Ouro Ideal com “Sursum Corda”, “Corações ao alto” e a tríade compacta.

### A Loja

Índice lateral “01 · A Loja”.

- Eyebrow: “Memória e continuidade”
- Título: “Uma história que volta a erguer suas colunas.”
- Texto: “Fundada em 1984 e reativada em 2022, a Loja preserva o nº 2283 como elo de continuidade entre sua origem e sua nova etapa.”
- Linha do tempo:
  - 1984 — Fundação: “Em 24 de setembro, nasce a Loja que daria origem a esta trajetória.”
  - 2022 — Reativação: “O número histórico é preservado e uma nova etapa começa sob o nome Soberanos Ideais.”
  - Hoje — Continuidade: “A memória se torna orientação para o presente e compromisso com as futuras administrações.”

### Princípios

Seção clara com o índice “02 · Princípios”, título “Três pontos. Uma direção.” e texto “A tríade digital resume aquilo que deve permanecer visível em toda decisão institucional.”

No desktop, criar um acordeão horizontal de três painéis contíguos. O item aberto cresce com suavidade e revela resumo e explicação. No mobile, transformar em acordeão vertical. Cada princípio usa um pictograma editorial de traço único; esses pictogramas explicam conceitos e não integram o brasão.

### Maçons visitantes

Composição dividida: campo Ouro Ideal com o brasão integral e campo Vinho Fraternal com texto.

- Eyebrow: “03 · Maçons visitantes”
- Título: “À porta da Loja, a acolhida começa pelo contato.”
- Texto: “As visitas devem ser confirmadas previamente. Enquanto a Chancelaria é organizada, o contato é feito pelos canais institucionais abaixo.”
- Quando: 1ª e 3ª quartas-feiras de cada mês
- Horário: informado mediante confirmação
- Onde: Rua Carbonita, 5 · Parque 10 · Manaus, AM
- CTA: “Solicitar orientação por e-mail”

### Contato

Índice lateral “04 · Contato”. Título “Entre em contato com a Loja.” e texto “Para informações institucionais, visitação ou assuntos administrativos.”

- E-mail: `loja2283.gobam@gmail.com`
- WhatsApp provisório: `(92) 92988-2201`; link `https://wa.me/5592929882201`
- Instagram: `@soberanos_ideais_2283`; link `https://www.instagram.com/soberanos_ideais_2283`
- Endereço: Rua Carbonita, 5 · Parque 10 · Manaus, AM

### Rodapé

Brasão, “A∴R∴L∴S∴ Soberanos Ideais”, “Nº 2283 · GOB / GOBAM”, lema e links para Brand Book e Área de membros.

## 6. Brand Book digital

Rota conceitual: `/brandbook`. A experiência atual está em `source/brandbook/index.html`, com estilos em `source/brandbook/styles.css` e comportamento em `source/brandbook/app.js`. Preserve a ordem, os IDs de âncora, a hierarquia e a proporção das pranchas.

### Navegação fixa

Marca à esquerda; links Essência, Tríade, Brasão, Sete luzes, Cores, Tipografia, Linguagem, Manual, Aplicações e Governança; ação “Imprimir / exportar”. No mobile, usar botão “Capítulos” e painel acessível.

### Abertura animada

A abertura tem duração máxima de sete segundos:

1. Três círculos iguais surgem sozinhos em linha horizontal.
2. Eles se aproximam e formam um triângulo vertical harmônico: ouro no topo, vinho à esquerda e branco à direita.
3. A tríade reduz de escala e se posiciona ao lado da palavra “Ideais”.
4. O brasão oficial e o nome institucional sobem com suavidade.
5. Somente depois da formação do triângulo, um campo discreto de feixes azuis, vinho e ouro pode aparecer ao fundo.
6. A abertura tem ação de teclado “Pular abertura”. Com `prefers-reduced-motion`, deve ser ignorada.

### Ordem dos capítulos e conteúdo

1. `#capa` — “Ideais que elevam. Valores que permanecem.”, vídeo e data.
2. `#contexto` — “Preservar a memória. Preparar a continuidade.”; Preservação, Consistência e Continuidade.
3. `#essencia` — “Elevar os corações para servir a ideais soberanos.” e lema.
4. `#ideia-central` — “Elevação como princípio. Clareza como método.” e linha Sursum Corda independente do brasão.
5. `#triade` — Fraternidade, Caridade e Verdade.
6. `#brasao` — o brasão como registro, não ornamento.
7. `#versoes-autorizadas` — somente arquivos fornecidos ou formalmente aprovados.
8. `#fundos` — fundo claro, escuro ou fotográfico uniforme, sempre com contraste.
9. `#construcao` — grade editorial de 12 colunas; nunca uma grade para redesenhar o brasão.
10. `#protecao` — área provisória de não interferência de 1X e redução sujeita a teste.
11. `#usos-proibidos` — não distorcer, recolorir, recortar, rotacionar, filtrar, substituir tipografia, reorganizar símbolos, contornar ou reconstruir por IA.
12. `#arquivos-oficiais` — inventário e custódia.
13. `#sete-luzes` — sete leituras editoriais: Amor Filial, Reverência pelas Coisas Sagradas, Cortesia, Companheirismo, Fidelidade, Pureza e Patriotismo. A relação com as estrelas é interpretação institucional sujeita à confirmação histórica.
14. `#cores` — funções da paleta extraída do brasão.
15. `#tipografia` — SF Pro Display e SF Pro Text do sistema.
16. `#linguagem` — solene quando necessário e humana sempre; evitar clichês, rebuscamento, tom comercial e alegações sem fonte.
17. `#aplicacoes` — aplicações institucionais e central de modelos.
18. `#manual-fisico` — o Brand Book como objeto editorial de permanência.
19. `#arquitetura-manual` — sequência de painéis do manual.
20. `#papelaria` — papel timbrado, ofício e referência em PDF.
21. `#certificado-apresentacao` — certificado e apresentação.
22. `#aplicacoes-digitais` — presença digital coerente.
23. `#comunicacao-digital` — feed, story, WhatsApp e assinatura de e-mail.
24. `#governanca` — custódia, validação e continuidade.

Todo o texto editorial completo encontra-se no HTML fornecido e deve ser importado literalmente, sem resumo automático.

### Estado real dos arquivos de marca

- Arquivo rasterizado histórico: preservado.
- PNG-fonte fornecido: preservado.
- PNG de aplicação com transparência externa: disponível e autorizado no projeto atual.
- Matriz vetorial: ainda não aprovada institucionalmente. Estudos em `work/` não fazem parte deste pacote.
- Kit de modelos institucionais: disponível em `assets/modelos/`.

## 7. Área de membros

Rota conceitual: `/membros`. A tela atual é propositalmente simples:

- Brasão central.
- Eyebrow “Ambiente reservado”.
- H1 “Área de membros”.
- Texto: “Este ambiente está sendo preparado para reunir documentos e comunicações internas com acesso controlado.”
- Status: “Acesso ainda não habilitado”.
- CTA: “Falar com a administração”.

Não inventar painel, dados, membros, pagamentos, agenda ou autenticação funcional. Essas funções são evolução futura e exigem requisitos e dados oficiais.

## 8. Modelos para download

A central de modelos deve listar e baixar os arquivos presentes em `assets/modelos/`:

- Papel timbrado: DOCX e PDF.
- Modelo de ofício: DOCX e PDF.
- Certificado: PPTX e prévia PNG.
- Apresentação institucional: PPTX, montagem e prévia.
- Instagram feed: PPTX 1:1 e PNG.
- Instagram story: PPTX 9:16 e PNG.
- Comunicado WhatsApp: PPTX 4:5 e PNG.
- Assinatura de e-mail: ZIP com HTML e brasão, mais prévia PNG.
- Kit consolidado: ZIP.

Não criar links fictícios nem converter esses arquivos automaticamente. A ação deve apontar ao arquivo real correspondente.

## 9. Movimento e interação

- Movimento deve comunicar ordem, construção e continuidade.
- Tempos comuns: 200–450 ms para interface; 1,25 s para montagem local da tríade; até 7 s para a abertura completa.
- Easing principal: `cubic-bezier(.2,.8,.2,1)`.
- Botões podem subir 2 px ou reduzir a 95% no pressionamento.
- Acordeões revelam conteúdo com opacidade e deslocamento vertical de até 10 px.
- Navegação por capítulos atualiza `aria-current` conforme a seção visível.
- Vídeos são mudos, em loop, `playsinline` e têm poster.
- Impressão/exportação do Brand Book usa os estilos de impressão existentes.
- Em `prefers-reduced-motion: reduce`, desabilitar abertura, autoplay, animações e rolagem suave.

## 10. Responsividade

- Desktop amplo: conteúdo travado em 1440 px.
- Até 1120 px: navegação principal recolhe; grades de três colunas se reorganizam; índices e conteúdo usam duas colunas quando houver espaço.
- Até 760 px: site institucional passa a coluna única; hero textual vem antes do vídeo; borda entre cor e vídeo vira fade vertical.
- Até 640 px: Brand Book reduz margens e painéis; grids viram uma ou duas colunas conforme o componente.
- Até 520 px: ações do hero ocupam a largura; contato passa a duas colunas sem cortar textos; vídeo mantém no mínimo 620 px de altura.
- Nenhuma largura deve produzir overflow horizontal.
- Alvos interativos: mínimo 44 × 44 px.

## 11. Acessibilidade e semântica

- Idioma da página: `pt-BR`.
- Link de salto “Ir para o conteúdo”.
- Hierarquia de títulos única e coerente.
- `aria-labelledby` nas seções; `aria-label` nos elementos visuais que transmitem conteúdo.
- Imagens decorativas com `alt=""`; brasão informativo com nome completo no `alt`.
- Foco visível de 3 px em Ouro Ideal com afastamento de 4 px.
- Menus, acordeões, links e botões operáveis por teclado.
- Contraste deve permanecer legível em todas as combinações.
- Não depender apenas de cor para comunicar status.
- A área de membros deve ser `noindex` enquanto estiver inativa.

## 12. Metadados e conteúdo estruturado

- Título padrão: “A∴R∴L∴S∴ Soberanos Ideais nº 2283 — Sursum Corda”.
- Descrição: “Site institucional da A∴R∴L∴S∴ Soberanos Ideais nº 2283, em Manaus, AM. História, princípios, orientação a maçons visitantes e contato.”
- `theme-color`: `#061432`.
- Organização em JSON-LD com fundação `1984-09-24`, e-mail, telefone, endereço e Instagram.
- `/membros` não deve entrar no sitemap.
- Imagem social: `assets/opengraph-image.png`.

## 13. Critérios de aceite da migração

Uma proposta gerada pelo Stitch só deve ser considerada fiel se:

- apresentar as três experiências e suas rotas;
- preservar literalmente o nome, número, localidade, lema, datas e contatos;
- usar o brasão oficial intacto e sem fundo branco externo aparente;
- manter ouro, vinho e branco na tríade, com círculos alinhados e proporcionais;
- conservar a ordem dos capítulos e todos os modelos para download;
- mostrar o vídeo com enquadramento correto do artífice;
- manter o encontro entre fundo azul e vídeo sutil;
- funcionar em desktop e mobile sem overflow;
- oferecer teclado, foco visível, texto alternativo e movimento reduzido;
- não inventar fatos históricos, símbolos, cargos, horários ou recursos da área interna;
- não substituir a linguagem institucional por texto publicitário genérico.

## 14. Arquivos de referência deste pacote

- `source/site/`: implementação Next.js/App Router do site público e da área de membros.
- `source/brandbook/`: HTML, CSS e JavaScript do Brand Book.
- `assets/`: brasão, vídeo, poster, estandarte, linha editorial, imagens sociais e modelos.
- `references/`: capturas desktop/mobile e PDF do Brand Book.
- `docs/`: conteúdo-base, auditoria, QA e sistema de design anterior para rastreabilidade.
- `MANIFEST.sha256`: lista de integridade dos arquivos.

## 15. Sequência recomendada dentro do Stitch

1. Importe este `DESIGN.md` como contexto principal.
2. Adicione `references/home-desktop.png` e `references/home-mobile.png` para fixar composição e responsividade.
3. Adicione o brasão, o poster e, se aceito pelo fluxo, os arquivos de código de `source/`.
4. Gere primeiro o site institucional desktop e mobile.
5. Em seguida, gere o Brand Book em blocos, respeitando a ordem de capítulos acima.
6. Gere a tela reservada de membros sem inventar funcionalidades.
7. Conecte navegação, âncoras, acordeões e links de download no protótipo.
8. Compare cada tela com as referências e somente depois exporte código ou envie a outro ambiente.

Este arquivo descreve a migração de design e conteúdo. Ele não autoriza publicação, alteração do brasão ou substituição dos arquivos oficiais.
