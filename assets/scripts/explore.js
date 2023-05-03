// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // add list of all voices
  // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
  let voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }


  // speak on button click
  document.querySelector("button").addEventListener("click", function() {
    const utterance = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value)
    // set correct voice and language
    const voiceSelect = document.getElementById("voice-select");
    utterance.voice = voices[voiceSelect.value];
    utterance.lang = voices[voiceSelect.value].lang;
    // smiling-open.png only when speaking
    utterance.addEventListener("start", function() {
      document.querySelector("img").src = "./assets/images/smiling-open.png";
    })
    utterance.addEventListener("end", function() {
      document.querySelector("img").src = "./assets/images/smiling.png";
    })
    speechSynthesis.speak(utterance);
  })
}
