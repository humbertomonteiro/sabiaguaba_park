let count = 1;

document.querySelector("#radio1").checked = true;

setInterval(() => {
  nextImg();
}, 4000);

function nextImg() {
  count++;

  if (count > 4) {
    count = 1;
  }

  document.querySelector("#radio" + count).checked = true;
}

const toggle = document.querySelector("[toggle]");
const navLinks = document.querySelector(".nav-links");

toggle.onclick = (e) => {
  navLinks.classList.toggle("show-links");
  navLinks.classList.toggle("hidden-links");
};

const links = document.querySelectorAll(".link");

links.forEach((item) => {
  item.onclick = () => {
    navLinks.classList.remove("show-links");
    navLinks.classList.add("hidden-links");
  };
});

const slides = document.querySelectorAll("[carousel-item]");
let currentValue = 0;

setInterval(() => {
  if (currentValue === slides.length - 1) {
    currentValue = 0;
  } else {
    currentValue++;
  }

  slides.forEach((e) => {
    e.classList.add("carousel-item");
  });

  slides[currentValue].classList.remove("carousel-item");
  slides[currentValue].classList.add("carousel-item-visible");
}, 4000);

// const entrada = document.querySelectorAll('[entrada]')
// const pratos = document.querySelectorAll('[pratos]')
// const bebidas = document.querySelectorAll('[bebidas]')
// const frutosDoMar = document.querySelectorAll('[frutosDoMar]')
// const peixes = document.querySelectorAll('[peixes]')
// const sobremesas = document.querySelectorAll('[sobremesas]')

// const h2 = document.querySelector('.h2')

// function ajax(click, url) {
//     click.forEach(e => {
//         e.onclick = () => {
//             location.href = 'pdf/cardapio.pdf'
//         }
//     })
// }

// ajax(entrada, 'entrada.html')
// ajax(pratos, 'pratos.html')
// ajax(bebidas, 'bebidas.html')
// ajax(frutosDoMar, 'frutosDoMar.html')
// ajax(peixes, 'peixes.html')
// ajax(sobremesas, 'sobremesas.html')
