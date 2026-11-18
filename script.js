/* ===== Acessibilidade ===== */
var CHAVE = "pixelforge-acessibilidade";
var padrao = { tema: "dark", fonte: 100, contraste: false, links: false };
var estado = Object.assign({}, padrao);

try {
  var salvo = JSON.parse(localStorage.getItem(CHAVE));
  if (salvo) estado = Object.assign({}, padrao, salvo);
} catch (erro) {
  /* sem armazenamento: usa o padrão */
}

var raiz = document.documentElement;
var botaoAbrir = document.querySelector(".a11y-toggle");
var painel = document.querySelector("#a11y-panel");

function aplicar() {
  raiz.setAttribute("data-tema", estado.tema);
  raiz.style.fontSize = estado.fonte + "%";
  raiz.classList.toggle("alto-contraste", estado.contraste);
  raiz.classList.toggle("links-sublinhados", estado.links);

  document.querySelector('[data-acao="tema"]').textContent =
    estado.tema === "dark" ? "Ativar modo claro" : "Ativar modo escuro";
  document.querySelector('[data-acao="contraste"]').setAttribute("aria-pressed", estado.contraste);
  document.querySelector('[data-acao="links"]').setAttribute("aria-pressed", estado.links);
  document.querySelector("#fonte-valor").textContent = estado.fonte + "%";

  try {
    localStorage.setItem(CHAVE, JSON.stringify(estado));
  } catch (erro) {
    /* ignora */
  }
}

botaoAbrir.addEventListener("click", function () {
  var aberto = painel.hidden;
  painel.hidden = !aberto;
  botaoAbrir.setAttribute("aria-expanded", aberto);
});

document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape" && !painel.hidden) {
    painel.hidden = true;
    botaoAbrir.setAttribute("aria-expanded", "false");
    botaoAbrir.focus();
  }
});

document.querySelectorAll("[data-acao]").forEach(function (botao) {
  botao.addEventListener("click", function () {
    var acao = botao.dataset.acao;

    if (acao === "tema") estado.tema = estado.tema === "dark" ? "light" : "dark";
    if (acao === "mais") estado.fonte = Math.min(150, estado.fonte + 10);
    if (acao === "menos") estado.fonte = Math.max(80, estado.fonte - 10);
    if (acao === "normal") estado.fonte = 100;
    if (acao === "contraste") estado.contraste = !estado.contraste;
    if (acao === "links") estado.links = !estado.links;
    if (acao === "resetar") estado = Object.assign({}, padrao);

    aplicar();
  });
});

aplicar();

/* ===== Carrossel (só existe no index.html) ===== */
var carrossel = document.querySelector(".carousel");

if (carrossel) {
  var trilho = carrossel.querySelector(".carousel-track");
  var slides = carrossel.querySelectorAll(".slide");
  var areaBolinhas = document.querySelector(".carousel-dots");
  var status = document.querySelector(".carousel-status");
  var atual = 0;

  slides.forEach(function (slide, i) {
    var bolinha = document.createElement("button");
    bolinha.type = "button";
    bolinha.className = "dot";
    bolinha.setAttribute("aria-label", "Ir para o slide " + (i + 1));
    bolinha.addEventListener("click", function () {
      irPara(i);
    });
    areaBolinhas.appendChild(bolinha);
  });

  var bolinhas = areaBolinhas.querySelectorAll(".dot");

  function irPara(numero) {
    atual = (numero + slides.length) % slides.length;
    trilho.style.transform = "translateX(-" + atual * 100 + "%)";

    slides.forEach(function (slide, i) {
      slide.setAttribute("aria-hidden", i !== atual);
    });
    bolinhas.forEach(function (bolinha, i) {
      bolinha.classList.toggle("ativo", i === atual);
      bolinha.setAttribute("aria-current", i === atual);
    });
    status.textContent = "Slide " + (atual + 1) + " de " + slides.length;
  }

  carrossel.querySelector(".prev").addEventListener("click", function () {
    irPara(atual - 1);
  });
  carrossel.querySelector(".next").addEventListener("click", function () {
    irPara(atual + 1);
  });

  carrossel.addEventListener("keydown", function (evento) {
    if (evento.key === "ArrowLeft") irPara(atual - 1);
    if (evento.key === "ArrowRight") irPara(atual + 1);
  });

  irPara(0);
}