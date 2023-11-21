
window.addEventListener("scroll", function () {
  if (window.scrollY > 700) { // Defina a quantidade de rolagem necessária para mostrar o cabeçalho
    document.querySelector(".logo").classList.add("esconder")
    document.querySelector(".header").classList.add("esconder")
  } else {
    document.querySelector(".logo").classList.remove("esconder")
    document.querySelector(".header").classList.remove("esconder")
  }
});

window.sr = ScrollReveal({ reset: true });
sr.reveal('.hideen', { duration: 2000 });
sr.reveal('.logo-menu', { duration: 2500 });
sr.reveal('.image-desktop', { duration: 2500 });
sr.reveal('.sobre', { duration: 2000 });
sr.reveal('.informacoes-sobre', { duration: 2000 });
sr.reveal('.funcoes', { duration: 2000 });
sr.reveal('.fazendo-container', { duration: 2000 });
sr.reveal('.nossa-plataforma', { duration: 2000 });
sr.reveal('.carousel-container', { duration: 3000 });
sr.reveal('.como-funciona', { duration: 2000 });
sr.reveal('.YouTube', { duration: 2000 });
sr.reveal('.image-fazendo', { duration: 2000 });
sr.reveal('.image-fazendo', { duration: 2000 });
sr.reveal('.image-fazendo', { duration: 2000 });

let currentIndex = 0;

function changeSlide(n) {
  currentIndex += n;
  showSlide(currentIndex);
}

function showSlide(index) {
  const slides = document.querySelector('.carousel-slide');

  if (index >= slides.children.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.children.length - 1;
  }

  const translateValue = -currentIndex * 100 + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';
}

setInterval(function () {
  changeSlide(1);
}, 3000);

const Itens = document.querySelectorAll('.seta')

Itens.forEach(function (item) {
  item.addEventListener("click", function () {
    const itemAtivo = document.querySelector('.ativar');
    if (itemAtivo) {
      itemAtivo.classList.remove('ativar');
    }


    item.classList.add('ativar');
  })
})

const opcoes = document.querySelectorAll('.opcao')

opcoes.forEach(function (opcao) {
  opcao.addEventListener("click", function () {
    const Input = document.querySelector('.checkbox');
    if (Input) {
      Input.checked = false;
    }
  })
})





