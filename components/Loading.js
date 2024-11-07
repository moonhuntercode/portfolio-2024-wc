// components/Loading.js
export default class Loading extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="loading-container">
        <div class="spinner"></div>
        cargando
      </div>
    `;
  }
}

customElements.define("my-loading", Loading);
