// using polyfills to support web components
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";

import { eventosVentanaContainer } from "./components/VentanaContainer.js";

import "./components/VentanaContainer.js";


// footer start
import { Footer } from "./components";
customElements.define("footer-component", Footer);

// footer end

// cookies start
import { cookiesComponent } from "./components";
customElements.define("cookies-component", cookiesComponent);
// cookies end

// import "web-particles/dist/web-particles.js";
// initial style for global app

import "/node_modules/modern-normalize/modern-normalize.css";
import "./components/web-particles.js";

// scroll
import SimpleBar from "simplebar";
import "simplebar/dist";
// import "simplebar/dist/simplebar.css";
// new SimpleBar(document.querySelector("#links_container"));

// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from "resize-observer-polyfill";
window.ResizeObserver = ResizeObserver;

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
  <footer-component></footer-component>
  <cookies-component></cookies-component>
`;

// cacheando elementos  de ventana
const container = document.querySelector("#exit_btn_container");
const linea1 = document.querySelector("#equis_linea_1");
const linea2 = document.querySelector("#equis_linea_2");
eventosVentanaContainer(container, linea1, linea2);

