const images = [
  "./img/t1.jpg",
  "./img/t2.jpg",
  "./img/t3.jpg",
  "./img/t4.jpg",
  "./img/t5.jpg",
  "./img/t6.jpg",
  "./img/t7.jpg",
  "./img/t8.jpg",
  "./img/t9.jpg",
  "./img/t10.jpg",
  "./img/t11.jpg",
  "./img/t12.jpg",
  "./img/t13.jpg",
  "./img/t14.jpg",
  "./img/t15.jpg",
  "./img/t16.jpg",
];

const texts = [
  "Ein Schluck Morgenruhe, bevor der Tag beginnt.",
  "Manchmal braucht es nur Tee und Zeit.",
  "Blumen am Rand, Wärme in der Hand.",
  "Wintermorgen. Leise. Klar. Einfach sein.",
  "Herbsttage schmecken nach Gewürztee und Stille.",
  "Fenster auf, Gedanken raus, Tee rein.",
  "Wie Blüten im Wasser, so leicht fühlt sich heute an.",
  "Zimt, Tee und ein Hauch von Weihnachten.",
  "Erde. Tee. Nüsse. Alles verbunden.",
  "Montagmorgen. Stärker als jeder Kaffee.",
  "Goldene Ruhe in klarer Glastasse.",
  "Ein Moment für dich. Nur Tee und Wärme.",
  "Still sein. Tee trinken. Weitermachen.",
  "Tee statt Worte. Reicht manchmal.",
  "Kurz atmen, lang Tee trinken.",
  "Mehr Tee, weniger Drama.",
];

let imageContainer = document.getElementById("imageContainer");
let overlay = document.getElementById("overlay");
let overlayImage = document.getElementById("overlayImage");
let currentImage = 0;

function renderImages() {
  let imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    imageContainer.innerHTML += `<img src="${images[i]}" alt="Tea Cup">`;
  }
}

function showOverlay(event) {
  overlayImage.src = event.target.src;
  overlay.classList.remove("d_none");
  const clickedFile = event.target.src.split("/").pop();
  currentImage = images.findIndex((img) => img.endsWith(clickedFile));
  let overlayTextContainer = document.getElementById("overlayTextContainer");
  overlayTextContainer.innerHTML = `<p class="overlayTextContainer">${texts[currentImage]}</p>`;
}

function closeOverlay() {
  overlay.classList.add("d_none");
}

imageContainer.addEventListener("click", showOverlay);

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  overlayImage.src = images[currentImage];
  updateText();
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  overlayImage.src = images[currentImage];
  updateText();
}

function updateText() {
  let overlayTextContainer = document.getElementById("overlayTextContainer");
  overlayTextContainer.innerHTML = `<p class="overlayTextContainer">${texts[currentImage]}</p>`;
}
