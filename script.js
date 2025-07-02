const teaArray = [
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

// function zum rendern
const imageContainer = document.getElementById("imageContainer");

const imageElements = teaArray.map((imageUrl) => {
  const teaCup = document.createElement("img");
  teaCup.src = imageUrl;
  teaCup.alt = "a nice cup of tea";
  return teaCup;
});

imageElements.forEach((img) => imageContainer.appendChild(img));

// function für onclick (overlay)

// function toggleOverlay() {
//   let overlayRef = document.getElementById("overlay");

//   overlayRef.classList.toggle("d_none");
// }
// richtiges Bild öffnen

// overlay schließen

// nächstes/vorherriges Bild im overlay öffnen

// (z-index für Overlay)

//
