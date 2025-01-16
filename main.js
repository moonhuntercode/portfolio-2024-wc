// main.js
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

// definir custom elements
customElements.define("ventana-container", VentanaContainer);
customElements.define("my-loading", Loading);
customElements.define("footer-component", Footer);
customElements.define("cookies-component", cookiesComponent);

// ResizeObserver polyfill
import ResizeObserver from "resize-observer-polyfill";
import { VentanaContainer } from "./components/VentanaContainer.js";
window.ResizeObserver = ResizeObserver;

// agregar contenido al dom
document.querySelector("#app").innerHTML = `
  <my-loading id="loading"></my-loading>
  <ventana-container></ventana-container>
  <web-particles id="tsparticles"></web-particles>
  <footer-component></footer-component>
  <cookies-component></cookies-component>
`;

// cachear referencias y recursos
const images = document.querySelectorAll("img");
const loading = document.getElementById("loading");
import gatoGif from "./imgs/gato-purple-1.gif";
let srcGif = gatoGif;

let gifImage = new Image();
gifImage.src = srcGif;
gifImage.id = "gif-cat";
const resources = [...images, gifImage];

let loadedResources = 0; // Contador para recursos cargados

// Listener de carga para cada imagen
resources.forEach((img) => {
  img.addEventListener("load", handleImageLoad);
  if (img.complete) {
    img.dispatchEvent(new Event("load"));
  }
});

// Manejar la carga de imágenes
function handleImageLoad() {
  try {
    this.dataset.loaded = "true";
    loadedResources++;

    // Emitir evento de progreso
    const progressEvent = new CustomEvent("progress-update", {
      detail: { progress: (loadedResources / resources.length) * 100 },
    });
    loading.dispatchEvent(progressEvent);

    // Verificar si todas las imágenes se han cargado
    checkAllImagesLoaded();
  } catch (error) {
    console.error(error);
  }
}

// Verificar si todas las imágenes están cargadas
function checkAllImagesLoaded() {
  try {
    const allLoaded = resources.every((img) => img.dataset.loaded === "true");
    if (allLoaded) {
      console.log("Todas las imágenes cargadas. 🥳");

      // Ocultar componente Loader
      loading.style.visibility = "hidden";
      loading.style.display = "none";

      document.body.style.backgroundImage = `url(${srcGif})`;
    }
  } catch (error) {
    console.error(error);
  }
}

// Eventos ventana
const container = document.querySelector("#exit_btn_container");
const linea1 = document.querySelector("#equis_linea_1");
const linea2 = document.querySelector("#equis_linea_2");
eventosVentanaContainer(container, linea1, linea2);
