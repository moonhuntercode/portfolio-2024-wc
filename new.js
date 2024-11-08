function verificarCargaDeImagenes(callback) {
  const images = document.querySelectorAll("img");
  let loadedImages = 0;
  images.forEach((img) => {
    if (img.complete) {
      loadedImages++;
    } else {
      img.addEventListener("load", () => {
        loadedImages++;
        if (loadedImages === images.length) {
          callback();
        }
      });
      img.addEventListener("error", () => {
        loadedImages++;
        if (loadedImages === images.length) {
          callback();
        }
      });
    }
  });
  if (loadedImages === images.length) {
    callback();
  }
}
verificarCargaDeImagenes(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("content").style.display = "block";
});
//p
//
var src = "http://picture.de/image.png";
var image = new Image();
image.src = src;

image.addEventListener("load", function () {
  body.style.backgroundImage = "url(" + src + ")";
});
image.src = src;
// scroll
// import SimpleBar from "simplebar";
// import "simplebar/dist";
// import "simplebar/dist/simplebar.css";
// new SimpleBar(document.querySelector("#links_container"));