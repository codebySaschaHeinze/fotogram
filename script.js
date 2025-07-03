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
const overlay = document.getElementById("overlay"); // ID="overlay" wird zu einer Konstanten, die "overlay" heißt"
const overlayImage = document.getElementById("overlayImage"); // ID="overlayImage" wird zu einer Konstanten, die "overlayImage" heißt
const closeButton = document.querySelector(".closeOverlay"); // class="closeOverlay" wird zu einer Konstanten, die "closeButton" heißt
const imageContainer = document.getElementById("imageContainer"); // ID="imageContainer" wird zu einer Konstanten, die "imageContainer" heißt

// Schließen-Handler

// "click" auf den close.Button ruft das "overlay" auf (in dem Fall wird aufgerufen, dass etwas verschwindet)
closeButton.addEventListener("click", () => {
  // "click" ist ein Event (wie "keydown") und ruft auf:
  overlay.classList.add("d_none"); // ... dass die Konstante overlay "d_none" anzeigen soll
});

// Vorschaubilder erzeugen und in den Container hängen

// jedes Bild wird "angeschaut"
teaArray.forEach((imageUrl) => {
  const teaCup = document.createElement("img"); // für jedes Bild (im Array), das angeschaut wurde, wird ein leerer Platzhalter erstellt der "teaCup" heißt
  teaCup.src = imageUrl; // Bild wird auf Platz "teaCup" gelegt
  teaCup.alt = "a nice cup of tea"; // Alternativtext
  teaCup.addEventListener("click", functionImageClick); // beim "click" wird die "functionImageClick" aufgerufen und ausgeführt
  imageContainer.appendChild(teaCup); // setzt das neue Bild in den von uns definierten Bereich (ImageContainer)
});

// Funktion, die für jedes Vorschaubild aufgerufen wird
function functionImageClick(event) {
  overlay.classList.remove("d_none"); // entfernt die Klasse "d_none" vom overlay
  overlayImage.src = event.target.src;
  overlayImage.alt = event.target.alt;
}
