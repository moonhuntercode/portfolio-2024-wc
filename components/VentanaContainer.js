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
        <span id="equis_linea_1"></span>
        <span id="equis_linea_2"></span>
        </div>
        </section>
        </section>
        `;
  }
}
customElements.define("ventana-container", VentanaContainer);
