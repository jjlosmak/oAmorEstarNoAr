const numCoracoes = 30;
for (let i = 0; i < numCoracoes; i++) {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.textContent = "❤️";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.top = Math.random() * 100 + "vh";
  coracao.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(coracao);
}

// Contador dinâmico
const contador = document.getElementById("contador");
const dataInicio = new Date("2022-01-26T20:00:00");

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const segundosTotais = Math.floor(diff / 1000);
  const anos = Math.floor(segundosTotais / (365.25 * 24 * 60 * 60));
  const dias = Math.floor(
    (segundosTotais % (365.25 * 24 * 60 * 60)) / (24 * 60 * 60)
  );
  const horas = Math.floor((segundosTotais % (24 * 60 * 60)) / (60 * 60));
  const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
  const segundos = segundosTotais % 60;

  contador.textContent = `${anos} anos, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

atualizarContador();
setInterval(atualizarContador, 1000);

// Carrossel de imagens
const imagens = document.querySelectorAll("#carrossel img");
  const setaEsq = document.querySelector(".seta.esquerda");
  const setaDir = document.querySelector(".seta.direita");
  let index = 0;
  let intervalo;

  function mostrarImagem(indice) {
    imagens.forEach(img => img.classList.remove("ativo"));
    imagens[indice].classList.add("ativo");
  }

  function iniciarCarrossel() {
    intervalo = setInterval(() => {
      index = (index + 1) % imagens.length;
      mostrarImagem(index);
    }, 3000); // tempo entre trocas automáticas
  }

  function resetarCarrossel() {
    clearInterval(intervalo);
    iniciarCarrossel();
  }

  setaEsq.addEventListener("click", () => {
    index = (index - 1 + imagens.length) % imagens.length;
    mostrarImagem(index);
    resetarCarrossel();
  });

  setaDir.addEventListener("click", () => {
    index = (index + 1) % imagens.length;
    mostrarImagem(index);
    resetarCarrossel();
  });

  mostrarImagem(index);
  iniciarCarrossel();
