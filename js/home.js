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

// window.sr = ScrollReveal({ reset: true })

// sr.reveal('.header', {
//     rotate: { x: 0, y: 80, z:0 },
//     duration: 1500
// })

// sr.reveal('.slider', {
//     rotate: { x: 0, y: 80, z:0 },
//     duration: 1500
// })

// sr.reveal('.container-text', {
//     rotate: { x: 0, y: 80, z:0 },
//     duration: 1500
// })

// sr.reveal('.container-aboutUs', {
//     rotate: { x: 0, y: 80, z:0 },
//     duration: 1500
// })

// sr.reveal('.menu', {
//     rotate: { x: 0, y: 80, z:0 },
//     duration: 1500
// })

// sr.reveal('.container-promotion', {
//     rotate: { x: 0, y: 80, z:0 },
//     duration: 1500
// })

// sr.reveal('.container-location', {
//     rotate: { x: 0, y: 80, z:0 },
//     duration: 1500
// })

// sr.reveal('.experience', {
//     rotate: { x: 0, y: 80, z:0 },
//     duration: 1500
// })

const audios = [
  { audio: "./audio/01 - LOVE GOSTOSINHO.mp3", duration: "141600" },
  { audio: "./audio/01 - Wesley Safadão - Coroa Boy.mp3", duration: "132600" },
  // { audio: "./audio/02 - POSTURADO E CALMO.mp3", duration: "190200" },
  {
    audio: "./audio/Barulho do Foguete - Matheus Fernandes.mp3",
    duration: "125400",
  },
  { audio: "./audio/Lapada Dela Matheus Fernandes.mp3", duration: "135000" },
];

const divAudio = document.querySelector(".div-audio");
const audio = document.querySelector("[audio]");
const iconAudio = document.querySelector(".icon-audio");

let playAudio;

playAudio = Math.floor(Math.random() * audios.length);

audio.src = audios[playAudio].audio;

setInterval(() => {
  playAudio = Math.floor(Math.random() * audios.length);
  audio.src = audios[playAudio].audio;
}, audios[playAudio].duration);

let audioPause = true;

divAudio.onclick = () => {
  audioPause = !audioPause;

  if (audioPause) {
    audio.play();
    divAudio.innerHTML = '<i class="fa-solid fa-volume-high icon-audio"></i>';
  } else {
    audio.pause();
    divAudio.innerHTML = '<i class="fa-solid fa-volume-xmark icon-audio"></i>';
  }
};

const nextAudio = document.querySelector(".div-next");

nextAudio.onclick = () => {
  playAudio = Math.floor(Math.random() * audios.length);
  audio.src = audios[playAudio].audio;
};

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
