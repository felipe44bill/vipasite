---
name: VIPA (site)
description: O próprio app é a vitrine; as telas reais do VIPA em escala de outdoor.
colors:
  # Herdados de docs/DESIGN.md, mesmo valor. Chave = custom property do site.
  white: "#FFFFFF"
  ink: "#111113"
  orange: "#FF5A1F"
  orange-a: "#FF7A2E"
  orange-b: "#EF4A18"
  soft: "#FFF1EA"
  light: "#FFF7F3"
  mute-bg: "#F1F1F3"
  mute-strong: "#E7E7EA"
  border: "#E4E4E7"
  line: "#EDEDF0"
  green: "#22A55B"
  red: "#E5484D"
  # Do site: substituem ou acrescentam.
  orange-deep: "#C2350D"
  muted: "#6E6E73"
  support: "#5E5E63"
  ground: "#F3F3F5"
  green-ink: "#178043"
  red-ink: "#C9303A"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(40px, 8vw, 96px)"
    fontWeight: 760
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(36px, 5.6vw, 68px)"
    fontWeight: 740
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline-sm:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(26px, 3vw, 38px)"
    fontWeight: 720
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(22px, 2.4vw, 32px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(17px, 1.5vw, 20px)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  numeral-billboard:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(92px, 13.4vw, 196px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: '"tnum"'
rounded:
  control: "12px"
  card: "16px"
  hero: "18px"
  vitrine: "26px"
  map: "clamp(22px, 2.4vw, 32px)"
  billboard: "clamp(22px, 3vw, 40px)"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 5vw, 56px)"
  chapter: "clamp(88px, 11vw, 168px)"
  mockup: "clamp(36px, 4vw, 52px)"
  stack: "20px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    height: "54px"
    padding: "0 26px"
  button-primary-hover:
    backgroundColor: "#2B2B30"
  button-primary-sm:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    height: "42px"
    padding: "0 18px"
  button-on-hero:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "clamp(12px, 1.2vw, 16px)"
    height: "clamp(54px, 4.8vw, 64px)"
    padding: "0 clamp(24px, 2.6vw, 34px)"
  button-on-hero-hover:
    backgroundColor: "{colors.light}"
  link-underline:
    textColor: "{colors.ink}"
  pill:
    backgroundColor: "{colors.mute-bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "46px"
    padding: "0 20px"
  pill-hover:
    backgroundColor: "{colors.mute-strong}"
  pill-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  chip:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.orange-deep}"
    rounded: "{rounded.pill}"
    height: "32px"
    padding: "0 14px"
  nav:
    backgroundColor: "{colors.white}"
    height: "64px"
  card-vitrine:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.vitrine}"
    padding: "clamp(22px, 3vw, 36px)"
  card-billboard:
    textColor: "{colors.white}"
    rounded: "{rounded.billboard}"
    padding: "clamp(26px, 3vw, 40px) clamp(26px, 4.2vw, 56px)"
  map:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.map}"
  example-note:
    textColor: "{colors.support}"
    typography: "{typography.label}"
---

# Design System: VIPA (site)

## Overview

**Creative North Star: "O app em tamanho de vitrine"**

Este arquivo estende o sistema do aplicativo, `docs/DESIGN.md` (a partir daqui, `../docs/DESIGN.md`). Tudo o que está lá vale no site sem repetição: a paleta, Inter, os raios, o card sem sombra, a escala de movimento, os componentes e as telas travadas do Figma. Aqui fica só o que o site acrescenta ou troca para funcionar como página web: a tipografia de exibição, as cores de texto que passam em contraste na web, a tela do app ampliada, o palco da rota preso à rolagem, as quebras de layout e o foco de teclado. Se os dois discordarem sobre o app, vale o código do app (`lib/theme/`, `lib/ui/`); sobre o site, vale `site/page.html`.

O site não ilustra o app: é feito dele. Cada capítulo mostra uma tela real do VIPA, com as medidas do app, ampliada até virar peça de vitrine, e o card laranja "Próxima Rota" abre a página em escala de outdoor. Chão branco, tinta quase preta, laranja contado; a hierarquia vem de tamanho e peso de texto, como no app. O movimento mostra o app fazendo o que promete (a rota inicia, a van anda, o embarque chega à família) e usa o `easeOutCubic` e as durações do app; nada decora.

A densidade é de capítulo largo: um assunto por vez, título grande, respiro vertical generoso e a tela do app como prova. Rejeitado de forma explícita na direção do site: celular flutuando ao lado do texto e grade de três ícones.

**A Regra da Subida.** O que entra em cena sobe e aparece. Nada da interface desliza pela lateral; só a van anda de lado, porque é veículo.

**Key Characteristics:**
- Telas do app com os px do app, ampliadas por `zoom`, nunca redesenhadas.
- Display Inter entre 720 e 760, com tracking bem negativo; o app para em 700.
- Laranja sólido só em marca, linha (rota e gráfico) e retorno de interação.
- Degradê laranja só nos cards de destaque e na bolha de chat enviada.
- Sem sombra em card; profundidade por borda de 1px e por tom.
- Toda tela de exemplo leva um rótulo dizendo que é exemplo.

## Colors

A paleta é a do app; o site escurece só o que precisa passar em contraste de texto na web e acrescenta um chão para os mapas.

### Primary
- **Laranja VIPA** (#FF5A1F, herdado): wordmark, linha da rota (12px sobre um contorno branco de 24px), linha do gráfico, anel de foco, sublinhado de hover, botão de enviar do chat, cursor de texto.
- **Degradê hero** (#FF7A2E → #EF4A18, 135°, herdado): card de destaque em escala de outdoor e cards de rota menores. Todo texto sobre ele é branco. A bolha de chat enviada leva o degradê de bolha do app (`docs/DESIGN.md`, Degradês).
- **Laranja Tijolo** (#C2350D, substitui o `primaryDeep` #D03A10 do app): texto laranja sobre o fundo pêssego, como no chip. O valor do app mede 4,43:1 sobre `soft`; este mede 4,99:1.
- **Pêssego** (#FFF1EA, herdado): fundo de chip. **Creme** (#FFF7F3, herdado): hover do botão branco sobre o destaque. `glow` (#FFE3D5, herdado) colore a seleção de texto.

### Neutral
- **Tinta** (#111113, herdado): texto, botão primário, pill selecionada, marcador numerado do mapa.
- **Cinza de Apoio** (#5E5E63, novo): texto de apoio que se lê: lead, notas, letras miúdas, respostas, rodapé. 6,45:1 sobre branco.
- **Cinza Legenda** (#6E6E73, substitui o `textMuted` #8A8A8E do app): legenda dentro das telas ampliadas, rótulos do gráfico, texto de passo inativo. 5,07:1; o do app mede 3,44:1 e não serve como texto pequeno na web.
- **Chão de Mapa** (#F3F3F5, novo): fundo dos mapas ilustrados.
- **Fio** (#EDEDF0, herdado): divisória das listas com fio e linha da barra depois da rolagem. **Borda** (#E4E4E7, herdado): moldura de card, vitrine e mapa. `mute-bg` e `mute-strong` (herdados): pill e o hover dela.

### Estado
- **Verde** (#22A55B) e **Vermelho** (#E5484D), herdados: estado em ícone, borda, preenchimento e faixa (pago, embarcou; atrasado, ausente).
- **Verde Tinta** (#178043) e **Vermelho Tinta** (#C9303A), novos: o mesmo estado quando vira texto, como valores em reais. Medem 4,99:1 e 5,29:1; o verde e o vermelho do app medem 3,18:1 e 3,91:1.
- Âmbar, azul-petróleo, azul, `faint` e a paleta de avatar seguem `docs/DESIGN.md` sem mudança.

### Named Rules
**A Regra do Laranja Contado.** Laranja sólido marca, traça linha (rota, gráfico) e responde à interação (foco, hover). Não pinta fundo de seção nem texto de leitura. A direção previa laranja só na marca e na rota; o build o estendeu ao gráfico, como no código do app, e ao retorno de interação, e o build vale.

**A Regra do Gêmeo de Tinta.** Cor de estado que vira texto usa a versão `-ink`; a cor do app fica para ícone, borda, preenchimento e faixa.

**A Regra do Cinza Legível.** Texto pequeno de leitura na web é `support` ou `muted`. O #8A8A8E do app só aparece em título grande apagado, como o passo inativo do palco da rota.

## Typography

**Display Font:** Inter (com ui-sans-serif, system-ui), tamanho óptico automático, pesos 400 a 800 carregados
**Body Font:** Inter, a mesma família
**Ícones:** Material Symbols Rounded, peso 500; contorno por padrão, preenchido no estado ativo (herdado)

**Character:** a voz do app empurrada para outdoor. Pesos que o app não usa (720 a 760) e tracking de −0.025em a −0.04em só nos tamanhos grandes; o corpo sobe de 16 para 17px.

### Hierarchy
- **Display** (760, clamp(40px, 8vw, 96px), 0.98): título de abertura; o de fechamento usa a mesma voz em clamp(40px, 6.2vw, 76px).
- **Headline** (740, clamp(36px, 5.6vw, 68px), 1.02): título de capítulo, até 15em, com `text-wrap: balance`.
- **Headline pequeno** (720, clamp(26px, 3vw, 38px), 1.1): subtítulo dentro de capítulo.
- **Title** (700, clamp(22px, 2.4vw, 32px), 1.15): termo de lista com fio; os passos do palco usam o mesmo papel em clamp(22px, 2.2vw, 30px).
- **Lead** (400, clamp(17px, 1.5vw, 20px), 1.5, em `support`): apoio do título, até 34em, com `text-wrap: pretty`.
- **Body** (400, 17px, 1.5): texto corrido e respostas, até 40em.
- **Label** (400, 13px): rótulo de exemplo; letras miúdas de preço e rodapé em 14px.
- **Numeral de outdoor** (700, clamp(92px, 13.4vw, 196px), 1, −0.04em, tabular): o horário do card de destaque, que é o 46/700/−1.4 do app ampliado. Preço e código de convite são numerais da mesma família, em 760.

Dentro de uma tela do app, a escala é a do app (`docs/DESIGN.md`, seção 3), sem mudança.

### Named Rules
**A Regra do Teto do App.** Pesos de 720 a 760 são do site, e só em display, headline e numerais grandes. Dentro de uma tela do app o teto é 700, como no app.

**A Regra do Número Tabular.** Todo número que muda ou se compara (horário, dinheiro, código, distância) usa algarismos tabulares.

## Layout

Container de até 1200px, centrado, com margem lateral fluida (`gutter`). A barra fica presa no topo com 64px (a do app tem 56) e as âncoras rolam com folga de barra mais 16px. Cada capítulo tem respiro vertical `chapter`; dentro dele, headline, lead a 20px (`stack`) e a tela do app a `mockup` de distância.

As colunas são assimétricas, em doze avos: 7/5 (abertura, conversa, fechamento), 5/7 (palco da rota, lista de regras, painéis do financeiro), 4/8 (dúvidas), 5/6 (preço) e 1/1 (família, convite). Texto de um lado, prova do outro, alinhados pelo centro ou pela base.

Quebras: até 760px os links da barra somem e fica só o botão; até 860px tudo vira uma coluna, as telas do app voltam a zoom 1 e o palco da rota empilha; a partir de 1240px o título de abertura divide a linha com o apoio. As áreas seguras do aparelho são respeitadas no topo e no rodapé.

## Elevation & Depth

Plano, como o app. Card no chão branco com borda de 1px, mapa num chão cinza, destaque pelo degradê. A barra é um material translúcido (branco a 86% com `blur(18px) saturate(1.5)`; branco sólido com transparência reduzida) e ganha um fio só depois de 8px de rolagem. A única sombra assenta a van no chão onde ela anda, e vem desenhada dentro da própria ilustração.

### Shadow Vocabulary
- **Assento da van** (elipse com gradiente radial de `#5A1E00` a 34% até zero, dentro do `van-vipa.svg`): tingida de laranja escuro, senta a van no degradê do destaque e no chão cinza dos mapas.

### Named Rules
**A Regra do Chão Plano.** Card, botão, moldura e barra nunca têm sombra. Sombra só assenta um objeto 3D no chão; não levanta interface.

## Shapes

Os raios do app valem como estão: 12 em controle, 16 em card, 18 no destaque, 999 em pill, 10 na faixa de status, 22 na bolha de chat e 28 no campo de mensagem. O site acrescenta três: **vitrine** (26px), a moldura das telas ampliadas e dos cards grandes (chat, avisos, convite, aparelho); **mapa**, que vai de 22 a 32px com a tela; e **outdoor**, de 22 a 40px, só no card de destaque. O botão branco sobre o destaque cresce junto, de 12 a 16px.

Moldura é sempre borda de 1px em `border`; campo com foco e botão de escolha mantêm os 1,4px do app. Avatar, marcador numerado, ícone de aviso e ponto de progresso são círculos.

**A Regra do Raio que Cresce Junto.** Peça do app levada à escala de outdoor por medida fluida leva o raio junto, em `clamp`. Peça ampliada por `zoom` já cresce com o raio certo.

## Components

### Buttons
- **Shape:** cantos de controle (12px), herdados.
- **Primário:** tinta com texto branco, 54px de altura, 16/600, 26px de lado (herdado). Versão pequena para a barra: 42px, 15px, 18px de lado.
- **Hover / Focus:** hover só com ponteiro fino (`hover: hover` e `pointer: fine`): o primário escurece para #2B2B30. Ao apertar, todo botão, pill e botão de escolha encolhe 3% em 140ms; o app encolhe cartão em 1,5% e não tem hover. Foco de teclado: anel laranja de 2,5px, afastado 3px, raio 8; sobre superfície laranja, o anel é branco.
- **Botão no destaque:** branco com texto em tinta e ícone preenchido, medida fluida (54 a 64px de altura, 17 a 20px de texto); hover em Creme.
- **Link sublinhado:** 16/600 em tinta, sublinhado de 2px em `border` afastado 7px, que fica laranja no hover; seta de 18px à direita. É a ação secundária ao lado do botão preto.

### Chips
- **Style:** 32px, raio total, fundo Pêssego, texto Laranja Tijolo 14/600, sem borda. Marca uma condição curta junto de um título de card.

### Cards / Containers
- **Card do app:** `VipaPanel` herdado, sem mudança, dentro das telas.
- **Card vitrine:** branco, raio 26, borda de 1px, 22 a 36px de respiro, sem sombra. Segura telas do app e blocos grandes.
- **Moldura de aparelho:** um card vitrine com a barra superior do app dentro. Não imita celular: sem entalhe, sem sombra, sem inclinação.

### Navigation
- Barra branca presa no topo, 64px. Marca à esquerda (logo de 34px com raio 9 e "VIPA" 22/700 em laranja), links 15/500 no meio-direita e botão preto pequeno no fim. Hover do link: texto vai para tinta e um traço laranja de 2px cresce da esquerda em 240ms. Até 760px, só marca e botão.

### Tela do app em escala de vitrine
A assinatura do site. A tela é montada com as medidas do app (`docs/DESIGN.md`, seções 3 a 5: corpo 16/1.4, barra de 56px, margem 20, card 16, pill 46) e ampliada com `zoom` entre 1,1 e 1,22 acima de 860px; abaixo disso, zoom 1. Nunca é remedida em px de site. Os estados trocam como no app: some e aparece em 240 ou 320ms, subindo de 8 a 12px, com desfoque de 3 a 6px quando uma face troca pela outra. É interativa onde o app é (pills são abas de verdade e trocam com as setas; os botões de escolha funcionam), e a demonstração automática espera, some se o visitante tocar antes e pode ser repetida.

Logo abaixo de cada tela vai o **rótulo de exemplo**: 13px em `support`, dizendo que os dados são de exemplo. No desktop, sob o card de destaque, ele se alinha à direita.

### Card de destaque em escala de outdoor
O `VipaHeroCard` do app na largura do conteúdo: degradê hero, raio outdoor, duas colunas (texto 1,3 e arte 1), respiro fluido. Título de 28 a 52px/700, horário no numeral de outdoor, botão branco. À direita, a van VIPA (abaixo) sobre dois anéis brancos translúcidos (24% e 10%) e uma estrada tracejada que passa exatamente sob as rodas, porque estrada e van usam o mesmo quadro. Na abertura, os dígitos do horário sobem um a um (760ms, 45ms entre eles) e a van entra dirigindo da esquerda. "Iniciar Rota" troca a face: a antiga sai desfocando 6px e descendo 12px em 320ms, a nova entra, e o progresso aparece como pontos de 14px (o atual 30% maior), trechos de 2px e barra de 8px em branco sobre branco a 30%. Até 860px vira uma coluna e a arte vai para trás do texto, no canto de baixo, a 44% da largura e inteira dentro do card.

### Van VIPA
A van do site é uma ilustração cartoon em vetor (`assets/van-vipa.svg`, 420 × 250): van escolar de teto alto vista de lado, branca, com volume por gradientes suaves (branco em cima, #F3E9E2 embaixo, sombra quente nas pontas), faixa laranja do degradê de marca com "VIPA" em Inter 800 branco, vidros escuros com reflexo diagonal a 17%, calotas brancas com centro laranja e cinco parafusos, retrovisor laranja, farol creme e lanterna vermelha.
- **No destaque:** entra no próprio card como SVG, para as rodas poderem girar. Na abertura, a van entra dirigindo em 1,3 s e as rodas dão o tanto de voltas que a distância pede. Em "Rota em andamento" as rodas giram sem parar (620ms por volta), a carroceria sacode 2px, a van avança 8% e o tracejado corre por baixo.
- **Nos mapas:** a mesma ilustração, como imagem (17% da largura do mapa, 19% no minimapa), apoiada na rota pela base das rodas.
- **Movimento reduzido:** nada gira nem sacode; a van aparece parada no lugar.

### Fundo com brilho
Atrás de todo o conteúdo, três luzes pêssego muito difusas (gradiente radial do laranja da marca a 12 a 17% até zero, de 58 a 72vmax) andando devagar, em 26, 32 e 38 s, de ida e volta, só com transform. Dão calor ao chão branco sem virar desenho: nada de linha, ponto ou forma. Os cards passam por cima com fundo branco. Com movimento reduzido, as luzes ficam paradas.

### Palco da rota
Um trecho de 320vh (280vh até 860px) com um quadro preso logo abaixo da barra, da altura da tela. À esquerda, os passos (o atual em tinta, os outros apagados); à direita, um mapa quadrado. A rolagem conduz tudo em ordem: marcadores aparecem, a rota se desenha em laranja, a van percorre a linha, e cada parada vira um check verde quando a van passa; um card de destaque pequeno sobre o mapa repete o progresso. A rolagem só é lida perto do palco, uma vez por quadro. Até 860px os passos se sobrepõem num lugar só e trocam por opacidade, e o card desce para baixo do mapa. Com movimento reduzido o palco não prende e mostra o quadro final.

### Mapa ilustrado
Chão cinza, ruas brancas (duas espessuras), parque em verde claro (#E3F2E8 com copas #CBE8D4), água em azul claro (#E6ECFF). Casa e escola são os rasters 3D do app; a van é a ilustração da Van VIPA. Tudo medido em unidades do contêiner para crescer com o mapa. Paradas numeradas em círculo de tinta; etiquetas de escola em pill branca com borda. Um selo "Mapa de exemplo" fica no canto inferior esquerdo.

### Lista com fio
Regras e dúvidas usam a mesma lista: fio no topo, fio sob cada linha, 22 a 28px de respiro. O termo usa o papel Title; a explicação é corpo em `support`. Na versão acordeão, a seta de 26px vira 180° em 240ms e a altura abre em 320ms.

## Do's and Don'ts

### Do:
- **Do** montar toda tela do app com os px do app e ampliar com `zoom` (1,1 a 1,22 acima de 860px, 1 abaixo).
- **Do** pôr o rótulo de exemplo (13px, `support`) logo abaixo de toda tela com dados de exemplo.
- **Do** usar `green-ink` e `red-ink` quando cor de estado vira texto, e `support` ou `muted` para texto pequeno de apoio.
- **Do** usar algarismos tabulares em horário, dinheiro, código e distância.
- **Do** dar anel de foco laranja de 2,5px, afastado 3px, a tudo que recebe foco; branco sobre superfície laranja.
- **Do** limitar hover a ponteiro fino; no toque, a resposta é encolher 3% ao apertar.
- **Do** entrar subindo e aparecendo com `cubic-bezier(.33,1,.68,1)` (o `easeOutCubic` do app) nas durações do app (140, 240, 320ms); tempo longo só na entrada da primeira tela e quando algo percorre um caminho (rota, gráfico, van, contagem de valores).
- **Do** entregar o estado final, com o palco solto, quando o sistema pede movimento reduzido.

### Don't:
- **Don't** pôr tela do app dentro de celular flutuante com sombra ou inclinação, nem trocar a prova por grade de três ícones.
- **Don't** usar laranja sólido como fundo de seção ou em texto de leitura, nem degradê laranja fora dos cards de destaque e da bolha de chat enviada.
- **Don't** pôr sombra em card, botão, moldura ou barra.
- **Don't** usar verde, vermelho ou âmbar como decoração; são estado.
- **Don't** usar #8A8A8E em texto pequeno de leitura.
- **Don't** usar bounce, paralaxe ou rotação decorativa; a seta de acordeão que vira 180° é do app e fica.
- **Don't** fazer interface deslizar pela lateral; só a van anda de lado.
- **Don't** passar de peso 700 dentro de uma tela do app.
