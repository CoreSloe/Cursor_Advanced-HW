window.addEventListener("keydown", playSound);

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.getElementById(event.keyCode);

  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }

  if (key) {
    key.classList.add("playing");
  }
}

function removeTransition(event) {
  if (event.propertyName === "transform") {
    this.classList.remove("playing");
  }
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keyup", stopSound);

function stopSound(event) {
  const key = document.getElementById(event.keyCode);

  if (key) {
    key.classList.remove("playing");
  }
}
