// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();

  document.getElementById("horn-select").value = "select";

  // when select horn from dropdown menu
  document.getElementById("horn-select").addEventListener("input", function() {
    const name = document.getElementById("horn-select").value;
    // display correct image
    document.querySelector("img").src = "./assets/images/" + name + ".svg";
    // set correct audio file
    document.getElementsByClassName("hidden")[0].src = "./assets/audio/" + name + ".mp3";
  })

  // volume slider
  document.getElementById("volume").addEventListener("input", function() {
    const volume = Number(document.getElementById("volume").value);
    // set icon
    let level = 3;
    if (volume == 0) {
      level = 0;
    } else if (volume < 33) {
      level = 1;
    } else if (volume < 67) {
      level = 2;
    }
    document.querySelector("input + img").src = "./assets/icons/volume-level-" + level + ".svg";
    // set volume for audio element
    document.getElementsByClassName("hidden")[0].volume = volume/100;
  })

  // button
  document.querySelector("button").addEventListener("click", function() {
    // play audio element
    document.getElementsByClassName("hidden")[0].play();
    // if party horn, show confetti
    if (document.getElementById("horn-select").value === "party-horn") {
      jsConfetti.addConfetti();
    }
  })
}
