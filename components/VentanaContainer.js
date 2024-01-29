import "./ventana_container.css";
export class VentanaContainer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      //html
      `
        <section class="ventana_container">
        <section id="barra_de_titulo_container">
        <div id="exit_btn_container">
        <div id="equis_linea_1"></div>
        <div id="equis_linea_2"></div>
        </div>
        </section>
        </section>
        `;
  }
}
customElements.define("ventana-container", VentanaContainer);

export const comportamientoBotonX = (container, linea1, linea2) => {
  container.addEventListener("mouseup", () => {
    linea1.style.background = "black";
    linea2.style.background = "black";
  });
  container.addEventListener("mousedown", () => {
    linea1.style.background = "white";
    linea2.style.background = "white";
  });
};
