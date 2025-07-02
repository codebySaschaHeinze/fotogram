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

// Referenzen auf Overlay-Elemente
// "document.getElementById" oder "document.getElementByClass"
// "QuerySelector" sucht ein css-Element, dass zur entsprechenden Klasse passt
const overlay = document.getElementById("overlay"); // ID="overlay" wird zu einer Konstanten, "overlay" heißt"
const overlayImage = document.getElementById("overlayImage"); // ID="overlayImage" wird zu einer Konstanten, die "overlayImage" heißt
const closeButton = document.querySelector(".closeOverlay"); // class="closeOverlay" wird zu einer Konstanten, die "closeButton" heißt
const imageContainer = document.getElementById("imageContainer"); // ID="imageContainer" wird zu einer Konstanten, die "imageContainer" heißt

// Schließen-Handler
closeButton.addEventListener("click", () => {
  overlay.classList.add("d_none");
});

// Vorschaubilder erzeugen und in den Container hängen
teaArray.forEach((imageUrl) => {
  const teaCup = document.createElement("img");
  teaCup.src = imageUrl;
  teaCup.alt = "a nice cup of tea";
  teaCup.addEventListener("click", functionImageClick);
  imageContainer.appendChild(teaCup);
});

// Funktion, die für jedes Vorschaubild aufgerufen wird
function functionImageClick(event) {
  // Overlay einblenden
  overlay.classList.remove("d_none");
  // Großes Bild tauschen
  overlayImage.src = event.target.src;
  overlayImage.alt = event.target.alt;
}
