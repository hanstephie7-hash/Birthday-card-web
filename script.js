
const text = [
  "AMAZING",
  "A CHARM FROM ABOVE",
  "GORGEOUS",
  "A LOVELY BITCH",
]
  
  const speed = 100;
const textElements = document.querySelector(".typewriter span")
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
  if (characterIndex < text[textIndex].length) {
    textElements.innerHTML += text[textIndex].charAt(characterIndex)
    characterIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 100)
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % text.length;
    characterIndex = 0;
    setTimeout(typeWriter, 500)
  }
}

window.addEventListener('load', () => {
  typeWriter();
  setTimeout(() => {
    const music = document.getElementById('bd-music');
    music.play().catch((error) => {
      console.error('Autoplay blocked:', error);
    });
  }, 5000); // play music after 5 seconds
});

  
 let usEl = document.getElementById("us")

const myButton = document.querySelector('#contact-btn');

myButton.addEventListener('click', function() {
  myButton.textContent = "🎈Happy Birthday🎉!!";
  document.body.style.background = "#1F2935";
  alert("May your birthday bring a lot of smile to your face, happiness to your heart, and many blessings to your whole life💌")
})

function tap() {
  prompt("How old are you now?")
  let age = 17
  
  if (age === 17) {
    alert("Nine more years remaining for us to meet hopefully🤗")
  }
  
  else {
    alert("Lies you tell yourself!😏")
  }
}