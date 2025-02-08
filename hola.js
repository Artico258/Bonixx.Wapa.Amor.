const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura?',
  'Piensalo bien wapa',
  'Amor :(',
  'Porfas...',
  'Mira el otro botón esta mas bonito...'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})
document.addEventListener("DOMContentLoaded", function () {
  // Crear el elemento de audio
  const audio = new Audio("Audio/Alleh & Yorghaki - _me late_ OFFICIAL VERSION (online-audio-converter.com).mp3"); // Cambia "tu-audio.mp3" por la ruta de tu archivo de audio
  
  audio.loop = true; // Para que el audio se repita en bucle
  audio.volume = 0.1;
  // Intentar reproducir el audio al cargar la página
  audio.play().catch(() => {
      console.log("El navegador bloqueó la reproducción automática.");
  });

  // Agregar evento de clic para habilitar el audio si fue bloqueado
  document.addEventListener("click", () => {
      audio.play();
  }, { once: true }); // Se ejecuta solo una vez
});
