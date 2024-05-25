// using polyfills to support web components
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";

import { eventosVentanaContainer } from "./components/VentanaContainer.js";

import "./components/VentanaContainer.js";
import Router from "./services/Router.js";
// import "web-particles/dist/web-particles.js";
// initial style for global app
import "/node_modules/modern-normalize/modern-normalize.css";
import "./components/web-particles.js";

import "./style.css";

// prettier-ignore
document.querySelector("#app").innerHTML =
  /*html*/
  `
  <div>
  
  <ventana-container></ventana-container>
  <web-particles
      id="tsparticles"
    "></web-particles>
  
  
  </div>
`;

// cacheando elementos  de ventana
const container = document.querySelector("#exit_btn_container");
const linea1 = document.querySelector("#equis_linea_1");
const linea2 = document.querySelector("#equis_linea_2");
eventosVentanaContainer(container, linea1, linea2);
window.app = {};
app.router = Router;
// setupCounter(document.querySelector("#counter"));
window.addEventListener("DOMContentLoaded", () => {
  app.router.init();
});
