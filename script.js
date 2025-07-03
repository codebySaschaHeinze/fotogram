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
];

const texts = [
  "Herbsttage schmecken nach Gewürztee und Stille.",
  "Ein Schluck Morgenruhe, bevor der Tag beginnt.",
  "Manchmal braucht es nur Tee und Zeit.",
  "Blumen am Rand, Wärme in der Hand.",
  "Wintermorgen. Leise. Klar. Einfach sein.",
  "Fenster auf, Gedanken raus, Tee rein.",
  "Wie Blüten im Wasser - so leicht fühlt sich heute an.",
  "Zimt, Tee und ein Hauch von Weihnachten.",
  "Erde. Tee. Nüsse. Alles verbunden.",
  "Montagmorgen. Stärker als jeder Kaffee.",
  "Goldene Ruhe in klarer Glastasse.",
  "Ein Moment für dich. Nur Tee und Wärme.",
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
  currentImage = images.indexOf(event.target.src);
  let imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML += `<p class="textContainer" >${texts[i]}</p>`;
}

function closeOverlay() {
  overlay.classList.add("d_none");
}
imageContainer.addEventListener("click", showOverlay);

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  overlayImage.src = images[currentImage];
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  overlayImage.src = images[currentImage];
}
