// components/Loading.js
export class Loading extends HTMLElement {
  constructor() {
    super();
    // Inicializar el estado interno
    this.progressBar = null;
  }

  connectedCallback() {
    // Renderizar el componente
    this.innerHTML =
      /*html*/
      `
      <div class="loading-container">
        <div class="spinner"></div>
        <progress value="0" max="100"></progress>
        cargando
      </div>
    `;

    // Guardar referencia a la barra de progreso
    this.progressBar = this.querySelector("progress");

    // Escuchar eventos de progreso
    this.addEventListener("progress-update", (event) => {
      this.updateProgress(event.detail.progress);
    });
  }

  /**
   * Actualiza el progreso de la barra.
   * @param {number} progress - Progreso en porcentaje (0-100).
   */
  updateProgress(progress) {
    if (this.progressBar) {
      this.progressBar.value = progress;
    }
  }
}
