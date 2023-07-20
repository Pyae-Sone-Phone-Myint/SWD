// variables

fonts = ["Stika Small", "Sylfaen", "Impact", "Comic Sans MS"];

// selectors

const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");
const textToSpeech = document.querySelector("#textToSpeech");
const speechToText = document.querySelector("#speechToText");

// text to speech
const synth = window.speechSynthesis;

const speak = (text) => {
  const utterThis = new SpeechSynthesisUtterance();
  //   utterThis.rate = .3;

  utterThis.text = text;
  // changing voices
  //   utterThis.voice = synth.getVoices()[2]
  utterThis.addEventListener("start", () => {
    textToSpeech.classList.add("active");
  });
  utterThis.addEventListener("end", () => {
    textToSpeech.classList.remove("active");
  });
  synth.speak(utterThis);
};

// speak("hello how are you today.")

// speech to text

const recording = () => {
  var recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();
  recognition.onresult = function (event) {
      // console.log(event.results);
    const transcript = event.results[0][0].transcript;
    text.value = transcript;
  };
};

fonts.forEach((font) => {
  console.log(font);
  fontFamily.append(new Option(font, font));
});

text.addEventListener("keyup", (event) => {
  output.innerText = text.value;
  count.innerText = text.value.length;
});

color.addEventListener("change", (event) => {
  output.style.color = event.target.value;
});

fontSize.addEventListener("change", (event) => {
  output.style.fontSize = event.target.value + "px";
});

fontFamily.addEventListener("change", (event) => {
  output.style.fontFamily = event.target.value;
});

textToSpeech.addEventListener("click", () => {
  speak(text.value);
});

speechToText.addEventListener("click", () => {
    recording()
})
