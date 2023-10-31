const audios = [
  { audio: "./audio/LOVEGOSTOSINHO.mp3", duration: "141600" },
  { audio: "./audio/CoroaBoy.mp3", duration: "132600" },
  // { audio: "./audio/02 - POSTURADO E CALMO.mp3", duration: "190200" },
  {
    audio: "./audio/BarulhodoFoguete.mp3",
    duration: "125400",
  },
  { audio: "./audio/LapadaDela.mp3", duration: "135000" },
  { audio: "./audio/AGENTESEENTREGA.mp3", duration: "145800" },
  { audio: "./audio/GOLZINHOVERMELHO.mp3", duration: "137400" },
  { audio: "./audio/IPHONE.mp3", duration: "137400" },
  { audio: "./audio/Karolina.mp3", duration: "153000" },
  { audio: "./audio/Revoada.mp3", duration: "184800" },
];

const divAudio = document.querySelector(".div-audio");
const audio = document.querySelector("[audio]");
const iconAudio = document.querySelector(".icon-audio");

let playAudio;

playAudio = Math.floor(Math.random() * audios.length);

audio.src = audios[playAudio].audio;

let audioPause = true;

divAudio.onclick = () => {
  audioPause = !audioPause;

  if (audioPause) {
    audio.play();
    divAudio.innerHTML = '<i class="fa-solid fa-volume-high icon-audio"></i>';

    setInterval(() => {
      playAudio = Math.floor(Math.random() * audios.length);
      audio.src = audios[playAudio].audio;
    }, audios[playAudio].duration);
  } else {
    audio.pause();
    divAudio.innerHTML = '<i class="fa-solid fa-volume-xmark icon-audio"></i>';
  }
};

const nextAudio = document.querySelector(".div-next");

nextAudio.onclick = () => {
  playAudio = Math.floor(Math.random() * audios.length);
  audio.src = audios[playAudio].audio;
  divAudio.innerHTML = '<i class="fa-solid fa-volume-high icon-audio"></i>';
};
