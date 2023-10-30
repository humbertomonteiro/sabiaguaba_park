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
};
