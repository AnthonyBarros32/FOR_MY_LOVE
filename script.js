// script.js

// Fecha objetivo
const targetDate = new Date("2025-08-22");
const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("daily-message");

// Mensajes personalizados por día
const messages = [
  "Cada día que pasa, te extraño más 💜",
  "Faltan pocos días para sentir tu abrazo otra vez.",
  "Eres mi razón de sonreír incluso en la distancia.",
  "Contando las horas, los minutos, los segundos...",
  "Tú y yo, contra los kilómetros. Y vamos ganando.",
  "Creo en ti, en mí y en nuestro amor. Siempre."
];

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  countdownElement.textContent = days > 0 ? days : "0";

  const index = days % messages.length;
  messageElement.textContent = messages[index];
}

function showLetter() {
  const letter = document.getElementById("letter");
  const music = document.getElementById("bg-music");

  letter.classList.add("show");

  if (music && music.paused) {
    music.play().catch((e) => {
      console.log("No se pudo reproducir la música automáticamente:", e);
    });
  }
}

updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60);

function createFloatingButterflies() {
  const images = ["but1.png", "but2.png", "but3.png"];
  for (let i = 0; i < 10; i++) {
    const img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];
    img.classList.add("floating-butterfly");
    img.style.left = Math.random() * 100 + "vw";
    img.style.animationDuration = 10 + Math.random() * 10 + "s";
    img.style.top = "-100px";
    document.body.appendChild(img);
  }
}

createFloatingButterflies();
