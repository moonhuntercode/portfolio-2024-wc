export class Footer extends HTMLElement {
  constructor() {
    super();
    //
    this.innerHTML =
      /*html*/
      `
    <footer>
    &#174;victor.code
    </footer>
    `;
  }
}
customElements.define("footer-component", Footer);
