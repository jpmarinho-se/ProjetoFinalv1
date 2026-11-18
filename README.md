# Projeto Finalv1 PixelForge Game School

Site institucional fictício de uma escola de desenvolvimento de jogos, criado como trabalho da disciplina de Desenvolvimento de Interfaces. O projeto usa **HTML, CSS e JavaScript puro**, sem frameworks e sem bibliotecas externas.

## Sumário

1. [Visão geral](#1-visão-geral)
2. [Estrutura de arquivos](#2-estrutura-de-arquivos)
3. [Como executar](#3-como-executar)
4. [Construção passo a passo](#4-construção-passo-a-passo)
5. [Paleta de cores](#5-paleta-de-cores)
6. [Acessibilidade e usabilidade](#6-acessibilidade-e-usabilidade)
7. [Problemas comuns](#7-problemas-comuns)
8. [Limitações e melhorias futuras](#8-limitações-e-melhorias-futuras)

---

## 1. Visão geral

O site apresenta a escola, seus cursos, diferenciais, depoimentos e perguntas frequentes, e possui uma tela de login separada.

**Páginas**

- `index.html`: página principal (hero, números, galeria em carrossel, diferenciais, cursos, tecnologia, depoimentos, FAQ e contato).
- `login.html`: tela de acesso à área do aluno.

**Funcionalidades**

- Tela de login com validação nativa do navegador.
- Carrossel de imagens com setas, bolinhas e navegação pelo teclado.
- Aba de acessibilidade com modo claro/escuro, ajuste do tamanho da fonte, alto contraste e sublinhado de links.
- Layout responsivo para celular, tablet e computador.

**Tecnologias**

- HTML5 (marcação semântica)
- CSS3 (variáveis CSS, Flexbox, Grid, media queries)
- JavaScript (manipulação do DOM e `localStorage`)

## 2. Estrutura de arquivos

```
pixelforge/
├── index.html
├── login.html
├── style.css
├── script.js
├── README.md
└── imagens/
    ├── slide1.jpg
    ├── slide2.jpg
    └── slide3.jpg
```

- `style.css` e `script.js` são **compartilhados** pelas duas páginas, então cabeçalho, rodapé, cores e a aba de acessibilidade são idênticos em todo o site.
- A pasta `imagens/` guarda as fotos do carrossel.

## 3. Como executar

### Requisitos

- Um navegador atualizado (Chrome, Edge, Firefox ou Safari).
- Nenhuma instalação, servidor ou internet é necessária para rodar o site.

### Passo a passo (forma mais simples)

1. Baixe ou copie a pasta do projeto para o seu computador.
2. Confira se `index.html`, `login.html`, `style.css` e `script.js` estão **na mesma pasta**.
3. Confira se a subpasta `imagens/` contém `slide1.jpg`, `slide2.jpg` e `slide3.jpg`.
4. Dê um **duplo clique** em `index.html`. Ele abre no navegador padrão.
5. Para ver a tela de login, clique em **Entrar** no menu.

Os caminhos usados no código são relativos (`./style.css`, `./script.js`, `./imagens/...`), por isso o site funciona direto do disco.

### Alternativa 1: VS Code com Live Server

Útil para editar o código e ver as mudanças na hora.

1. Instale o [Visual Studio Code](https://code.visualstudio.com/).
2. Instale a extensão **Live Server** (Ritwick Dey).
3. Abra a pasta do projeto no VS Code (Arquivo > Abrir Pasta).
4. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.
5. O navegador abre em um endereço como `http://127.0.0.1:5500` e atualiza sozinho a cada alteração salva.

### Alternativa 2: servidor local com Python

Se tiver o Python instalado:

```bash
cd caminho/da/pasta/pixelforge
python -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador. Para parar o servidor, aperte `Ctrl + C` no terminal.

### Como testar as funcionalidades

| O que testar | Como |
|---|---|
| Carrossel | Clique nas setas e nas bolinhas, ou foque o carrossel com Tab e use as teclas ← e → |
| Aba de acessibilidade | Clique no botão **Acessibilidade** (canto inferior direito). Esc fecha a aba |
| Modo claro/escuro | Use "Ativar modo claro/escuro" na aba |
| Fonte maior | Use A−, A e A+ (de 80% a 150%) |
| Preferências salvas | Mude o tema, recarregue a página ou vá ao login: a escolha continua |
| Login | Teste e-mail inválido ou senha com menos de 6 caracteres: o navegador avisa o erro |
| Responsivo | Reduza a janela ou aperte F12 e ative o modo dispositivo móvel |
| Teclado | Navegue só com Tab, Shift+Tab, Enter e Esc |

## 4. Construção passo a passo

### Passo 1: Planejar a estrutura

Antes de escrever código, defini as seções da página principal na ordem em que o visitante as lê: apresentação, números de credibilidade, galeria, diferenciais, cursos, tecnologia, depoimentos, dúvidas e contato. Também planejei a segunda página (login) e os recursos pedidos: carrossel de imagens e aba de acessibilidade.

### Passo 2: Esqueleto do `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR" data-tema="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PixelForge | Game School</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  ...
  <script src="./script.js"></script>
</body>
</html>
```

- `lang="pt-BR"` informa o idioma a navegadores e leitores de tela.
- `data-tema` guarda o tema atual (escuro ou claro), usado pelo CSS.
- `viewport` permite que o site se adapte a telas de celular.
- O `<script>` fica no fim do `body` para o HTML carregar antes do código. Não uso `type="module"` para o site abrir com duplo clique.

### Passo 3: Cabeçalho e navegação

Dentro de `<header>`, coloquei o logo e um `<nav>` com links âncora para as seções (`#galeria`, `#cursos`, `#tecnologia`, `#faq`, `#contato`) e um link para `./login.html`. Cada seção recebeu um `id` correspondente. Também criei um link "Pular para os cursos" (`skip-link`) que só aparece quando recebe o foco do teclado.

### Passo 4: Seção principal (hero) e números

A seção `.hero` tem o rótulo "Inscrições abertas 2026", o `<h1>` com a palavra "jogos" destacada, um texto de apoio e o botão "Explorar cursos". Logo abaixo, a seção `.stats` mostra quatro números de credibilidade em uma grade de quatro colunas.

### Passo 5: Carrossel de imagens

Estrutura no HTML: uma `div.carousel` contendo uma `div.carousel-track` com três `<figure class="slide">` (cada uma com `<img>` e `<figcaption>`), além dos botões anterior e próximo.

No CSS:

- `.carousel` usa `overflow: hidden` para mostrar um slide por vez.
- `.carousel-track` usa `display: flex` e `transition: transform` para deslizar.
- Cada `.slide` tem `min-width: 100%`.

No JavaScript, a função `irPara(numero)` calcula o slide atual com `(numero + total) % total` (o que faz o carrossel voltar ao início) e move a trilha com `translateX(-N * 100%)`. As bolinhas são criadas pelo próprio script, e há suporte às setas do teclado. Não há rotação automática, para não atrapalhar quem lê devagar. Os `alt` de cada imagem descrevem o que aparece na foto.

### Passo 6: Diferenciais, cursos, tecnologia, depoimentos e FAQ

- **Diferenciais:** três `<article class="card">` em grade.
- **Cursos:** seis cards com tipo e duração, título, descrição e tecnologias.
- **Tecnologia:** faixa com fundo diferente e texto curto.
- **Depoimentos:** três `<blockquote>` com nome e curso do aluno (conteúdo fictício).
- **FAQ:** usa `<details>` e `<summary>`, elementos nativos do HTML que abrem e fecham sem JavaScript.

### Passo 7: Contato e rodapé

O formulário de contato tem `<label>` ligado ao campo de e-mail (`for` e `id`), `type="email"` e `required`. O rodapé fecha a página com os direitos autorais.

### Passo 8: CSS com variáveis de cor

Todas as cores ficam em variáveis no início do `style.css`:

```css
:root {
  --bg: #0f0f14;
  --card: #1b1b24;
  --text: #f2f2f2;
  --accent: #ff6a1a;
  ...
}
```

O restante do CSS usa `var(--bg)`, `var(--accent)` e assim por diante. Isso permite criar outros temas apenas redefinindo as variáveis:

- `:root[data-tema="light"]`: modo claro.
- `:root.alto-contraste`: preto e branco com amarelo.

O CSS é organizado na mesma ordem da página: reset, base, cabeçalho, hero, botões, números, carrossel, cards, FAQ, contato, rodapé, login, aba de acessibilidade e media queries. As fontes usam `rem`, para que o botão A+ aumente tudo proporcionalmente.

### Passo 9: Tela de login

O `login.html` reaproveita o mesmo cabeçalho e rodapé. No centro há um `.login-card` com:

- campo de e-mail (`type="email"`);
- campo de senha (`type="password"`, `minlength="6"`);
- caixa "Lembrar de mim";
- botão "Entrar na plataforma";
- links "Esqueci minha senha" e "Fale com a nossa equipe".

Todos os campos têm `<label>` associado. O login é apenas visual: não há servidor, então nenhum dado é enviado nem verificado.

### Passo 10: Aba de acessibilidade

O botão fixo **Acessibilidade** abre um painel (`<div hidden>`) com as opções. No `script.js`:

1. Um objeto `estado` guarda tema, tamanho da fonte, alto contraste e sublinhado de links.
2. A função `aplicar()` atualiza o `data-tema`, o `font-size` do `<html>` (em %) e as classes `alto-contraste` e `links-sublinhados`.
3. Cada botão do painel tem um atributo `data-acao`, e um único bloco de código trata todos os cliques.
4. O estado é salvo no `localStorage` e lido ao carregar, então a escolha vale para as duas páginas e permanece ao recarregar.
5. A tecla Esc fecha o painel, e os botões de alternância usam `aria-pressed`.

### Passo 11: Ligar as páginas

- No `index.html`, o link "Entrar" aponta para `./login.html`.
- No `login.html`, o logo e "Voltar ao início" apontam para `./index.html`.
- "Fale com a nossa equipe" aponta para `./index.html#contato`.

### Passo 12: Responsividade

Uma media query para telas de até 700px empilha o menu, reduz o título e transforma as colunas em uma só. O carrossel diminui a altura das imagens. Há também `prefers-reduced-motion`, que remove a animação do carrossel para quem configurou o sistema para menos movimento.

### Passo 13: Testes

- Abrir as duas páginas e clicar em todos os links.
- Testar a navegação apenas com o teclado.
- Alternar tema, fonte e alto contraste nas duas páginas.
- Redimensionar a janela para conferir o responsivo.
- Conferir os campos obrigatórios nos formulários.

## 5. Paleta de cores

**Tema escuro (padrão)**

| Papel | Hex |
|---|---|
| Destaque (laranja) | `#ff6a1a` |
| Destaque ao passar o mouse | `#e05a10` |
| Fundo principal | `#0f0f14` |
| Fundo do cabeçalho e faixas | `#16161d` |
| Fundo dos cards | `#1b1b24` |
| Bordas | `#2a2a35` |
| Texto principal | `#f2f2f2` |
| Texto secundário | `#b5b5c0` |
| Texto apagado | `#8a8a99` |
| Texto dos botões | `#0f0f14` |

**Tema claro**

| Papel | Hex |
|---|---|
| Destaque | `#c2410c` |
| Fundo principal | `#f7f7fa` |
| Fundo dos cards | `#ffffff` |
| Texto principal | `#16161d` |
| Texto secundário | `#44444f` |

**Alto contraste:** fundo `#000000`, texto `#ffffff` e destaque amarelo `#ffd400`.

O fundo escuro com um único acento quente remete ao universo dos games e concentra a atenção nos botões e rótulos.

## 6. Acessibilidade e usabilidade

- Idioma declarado (`lang="pt-BR"`) e elementos semânticos (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Link "Pular para o conteúdo" para quem navega por teclado.
- `<label>` associado a cada campo de formulário e validação nativa (`required`, `type="email"`, `minlength`).
- Foco visível em todos os elementos interativos (`:focus-visible`).
- Texto dos botões escuro sobre o laranja, com contraste maior que 4,5:1 (nível AA das WCAG).
- Carrossel com `aria-roledescription`, `aria-label`, `aria-live` e botões com nome acessível.
- Aba de acessibilidade com modo claro/escuro, fonte de 80% a 150%, alto contraste e sublinhado de links.
- Respeito a `prefers-reduced-motion`.
- FAQ acessível por teclado com `<details>`.
- Layout responsivo e estilos consistentes entre as páginas.

## 7. Problemas comuns

| Problema | Causa provável e solução |
|---|---|
| Imagens do carrossel não aparecem | Os nomes ou extensões não batem com o `src` do HTML. Renomeie para `slide1.jpg`, `slide2.jpg` e `slide3.jpg`, ou ajuste o HTML para `.jpeg` |
| Nome do arquivo termina em `.jpg.jpg` | O Windows esconde extensões. Ative "Extensões de nomes de arquivos" na aba Exibir do Explorador |
| Página sem estilo | `style.css` não está na mesma pasta do HTML |
| Aba de acessibilidade e carrossel não funcionam | `script.js` não está na mesma pasta, ou o arquivo foi salvo com outro nome |
| Alteração não aparece | Atualize sem cache com `Ctrl + F5` |
| Tema não é lembrado | Alguns navegadores bloqueiam o `localStorage` em arquivos locais ou em modo anônimo. Use o Live Server ou o servidor Python |

## 8. Limitações e melhorias futuras

- O login é apenas visual: sem servidor, não há autenticação real. Uma próxima etapa seria validar com JavaScript e, depois, integrar um back-end.
- O formulário de contato não envia dados nem mostra mensagem de confirmação.
- Os cursos estão escritos direto no HTML; poderiam vir de uma lista em JavaScript, com filtro por categoria.
- O menu não vira hambúrguer no celular.
- Depoimentos, números e informações dos cursos são fictícios.
- Ajuda por voz, legendas e outras opções de acessibilidade poderiam ser adicionadas.
