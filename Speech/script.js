const textcontent = document.getElementById("textcontent");
const btn = document.getElementById("btn");
const gallery = document.getElementById("gallery");
const spbtn = document.getElementById("spbtn");


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition; 

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.addEventListener('result', (e) => {
        console.log(e.results);
        textcontent.value = e.results[0][0].transcript;
    });
} else {
    console.error("Speech Recognition is not supported in this browser.");
}



btn.addEventListener('click', () => {
    call();
});

spbtn.addEventListener('click', () => {
    if (recognition) {
        recognition.start();
    } else {
        alert("Speech recognition is not supported by your current browser.");
    }
});

function call() {

    if (textcontent.value.trim() === "") {
        alert("Please enter some text to speak.");
        return;    
    }

    const utterance = new SpeechSynthesisUtterance(textcontent.value);
    window.speechSynthesis.speak(utterance);

    gallery.innerHTML += `<h3>Speech content : ${textcontent.value}</h3>`;
}
