// components/Loading.js
export class Loading extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="loading-container">
        <div class="spinner"></div>
        cargando
      </div>
    `;
  }
}
