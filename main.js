import "./style.css";
import {
  VentanaContainer,
  eventosVentanaContainer,
} from "./components/ventanaContainer.js";

// prettier-ignore
document.querySelector("#app").innerHTML =
  //html
  `
  <div>
  
  
  <ventana-container></ventana-container>
  </div>
`;

// cacheando elementos  de ventana
const container = document.querySelector("#exit_btn_container");
const linea1 = document.querySelector("#equis_linea_1");
const linea2 = document.querySelector("#equis_linea_2");
eventosVentanaContainer(container, linea1, linea2);

// setupCounter(document.querySelector("#counter"));
