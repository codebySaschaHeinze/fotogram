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

function renderImages() {
  let imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    imageContainer.innerHTML += `<img src="${images[i]}" alt="">`;
  }
}
