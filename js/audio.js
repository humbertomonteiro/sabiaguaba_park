const audios = [
  // { audio: "./audio/Coldplay-Paradise.mp3", duration: "252000" },
  // { audio: "./audio/JasonMraz-I'mYours.mp3", duration: "204600" },
  // { audio: "./audio/MariaGadú-Shimbalaiê.mp3", duration: "190200" },
  // { audio: "./audio/Natiruts-Ela.mp3", duration: "211800" },
  // { audio: "./audio/Natiruts-QueroSerFelizTambém.mp3", duration: "199800" },
  // { audio: "./audio/PharrellWilliams-Happy.mp3", duration: "240000" },
  { audio: "./audio/SIMPLESASSIM-PedroPondé.mp3", duration: "240000" },
];

const divAudio = document.querySelector(".div-audio");
const audio = document.querySelector("[audio]");
const divIcon = document.querySelector(".div-icon");

let showControls = true;

divAudio.onclick = () => {
  showControls = !showControls;
  let timeControls = 6000;

  if (showControls) {
    divIcon.innerHTML = '<i class="fa-solid fa-volume-high icon-audio"></i>';

    audio.controls = false;

    timeControls = 6000;
  } else {
    timeControls = 6000;

    divIcon.innerHTML = '<i class="fa-solid fa-volume-xmark icon-audio"></i>';

    audio.controls = true;

    setTimeout(() => {
      audio.controls = false;
      showControls = false;
      divIcon.innerHTML = '<i class="fa-solid fa-volume-high icon-audio"></i>';
    }, timeControls);
  }
};

// let playAudio;

// playAudio = Math.floor(Math.random() * audios.length);

// audio.src = audios[0].audio;

// if (audioPause) {
//   setInterval(() => {
//     playAudio = Math.floor(Math.random() * audios.length);
//     audio.src = audios[playAudio].audio;
//   }, audios[playAudio].duration);
// } else {
//   audio.pause();
// }

// const nextAudio = document.querySelector(".div-next");

// nextAudio.onclick = () => {
//   playAudio = Math.floor(Math.random() * audios.length);
//   audio.src = audios[playAudio].audio;
//   divAudio.innerHTML = '<i class="fa-solid fa-volume-high icon-audio"></i>';
//   audioPause = true;
// };
