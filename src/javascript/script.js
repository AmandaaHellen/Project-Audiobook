const playPauseButton = document.getElementById("play-pause");
const buttonForward = document.getElementById("next");
const backButton = document.getElementById("previous");
const chapterName = document.getElementById("chapter");
const audioChapter = document.getElementById("audio-chapter");

const numberOfChapters = 10;
let isPlaying = 0;
let currentChapter = 1;

function playTrack() {
  audioChapter.play();
  playPauseButton.classList.remove("bi-play-circle-fill");
  playPauseButton.classList.add("bi-pause-circle-fill");
}

function pauseTrack() {
  audioChapter.pause();
  playPauseButton.classList.add("bi-play-circle-fill");
  playPauseButton.classList.remove("bi-pause-circle-fill");
}

function playOrPause() {
  if (isPlaying === 0) {
    playTrack();
    isPlaying = 1;
  } else {
    pauseTrack();
    isPlaying = 0;
  }
}

function changeTrackName() {
  chapterName.innerText = "Capítulo " + currentChapter;
}

function nextTrack() {
  if (currentChapter === numberOfChapters) {
    currentChapter = 1;
  } else {
    currentChapter = currentChapter + 1;
  }

  audioChapter.src = "./sounds/dom-casmurro/" + currentChapter + ".mp3";
  playTrack();
  isPlaying = 1;
  changeTrackName();
}

function backTrack() {
  if (currentChapter === 1) {
    currentChapter = numberOfChapters;
  } else {
    currentChapter = currentChapter - 1;
  }

  audioChapter.src = "./sounds/dom-casmurro/" + currentChapter + ".mp3";
  playTrack();
  isPlaying = 1;
  changeTrackName();
}

playPauseButton.addEventListener("click", playOrPause);
buttonForward.addEventListener("click", nextTrack);
backButton.addEventListener("click", backTrack);
