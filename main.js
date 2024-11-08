// main.js
// aquí se está cargando todos los componentes,pero quizás, haiga otra mejor forma de hacer todo esto
// using polyfills to support web components
// importar polyfills para web components
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";

// importar estilos globales
import "/node_modules/modern-normalize/modern-normalize.css";
import "./style.css";
import "./components/web-particles.js";

// cargar componentes
import { eventosVentanaContainer } from "./components/VentanaContainer.js";
import { Loading } from "./components/Loading.js";
import { Footer } from "./components";
import { cookiesComponent } from "./components";

// import "./components/VentanaContainer.js";

// definir custom elements
customElements.define("ventana-container", VentanaContainer);
customElements.define("my-loading", Loading);
customElements.define("footer-component", Footer);
customElements.define("cookies-component", cookiesComponent);

// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from "resize-observer-polyfill";
import { VentanaContainer } from "./components/VentanaContainer.js";
window.ResizeObserver = ResizeObserver;

// agregar contenido al dom
// prettier-ignore
document.querySelector("#app").innerHTML =
  /*html*/
  `
  <my-loading id="loading"></my-loading>
  <ventana-container></ventana-container>
  <web-particles id="tsparticles"></web-particles>
  <footer-component></footer-component>
  <cookies-component></cookies-component>
`;

// captura todas las imágenes
const images = document.querySelectorAll("img");
const loading = document.getElementById("loading");
let srcGif = "./imgs/gato-purple-1.gif";

// crear una imagen adicional pa gif y add to list of resources a cargar
let gifImage = new Image();
gifImage.src = srcGif;
gifImage.id = "gif-cat";
const resources = [...images, gifImage];

// Agregar listener de carga a cada imagen
resources.forEach((img) => {
  img.addEventListener("load", handleImageLoad);
  // Forzar la verificación de carga por si algunas imágenes están en caché
  if (img.complete) {
    img.dispatchEvent(new Event("load"));
  }
});

// Manejar la carga de cada imagen
function handleImageLoad() {
  this.dataset.loaded = "true";
  checkAllImagesLoaded();
}

// Verificar si todas las imágenes se han cargado
function checkAllImagesLoaded() {
  const allLoaded = resources.every((img) => img.dataset.loaded === "true");
  if (allLoaded) {
    console.log("Todas las imágenes cargadas.");
    loading.style.display = "none"; // Ocultar el componente Loader
    document.body.style.backgroundImage = `url(${srcGif})`; // Cambiar fondo al GIF
  }
}

// cacheando elementos  de ventana
const container = document.querySelector("#exit_btn_container");
const linea1 = document.querySelector("#equis_linea_1");
const linea2 = document.querySelector("#equis_linea_2");
eventosVentanaContainer(container, linea1, linea2);
