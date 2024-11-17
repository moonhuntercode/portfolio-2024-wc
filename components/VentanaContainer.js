import "./ventana_container.css";
import "./linksContainer.js";
import { LinksContainer } from "./linksContainer.js";
//Registramos el elemento web personalizado
customElements.define("links-container", LinksContainer);

// console.log(typeof list);
// Pass a function to map
/* const map1 = array1
  .map((x) => x * 2)
  .join("")
  .split(" ")
  .toString();
console.log(typeof map1);
const inner = new DOMParser().parseFromString(list, "text/html").body.innerHTML; */

export class VentanaContainer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      /*html*/
      `
        <section class="ventana_container">
        <section id="barra_de_titulo_container">
        <div class="tab">
        <div class="folder_icon"></div>
        <div id="ruta_inside_title">main</div>
        </div>
        
        <div id="exit_btn_container">
        <span id="equis_linea_1"></span>
        <span id="equis_linea_2"></span>
        </div>
        </section>
        <links-container></links-container>
        </section>
        `;
  }
}
// end
export const eventosVentanaContainer = (container, linea1, linea2) => {
  ["mouseout", "mouseup", "mousedown"].forEach((event) => {
    container.addEventListener(event, () => {
      if (event == "mouseout") {
        linea1.style.background = "black";
        linea2.style.background = "black";
      } else if (event == "mousedown") {
        container.style.border = "3px solid white";
        linea1.style.background = "white";
        linea2.style.background = "white";
      } else if (event == "mouseup") {
        linea1.style.background = "black";
        container.style.border = "3px solid black";
      }
    });
  });
};
