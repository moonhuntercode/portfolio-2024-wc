export class cookiesComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      /*html*/
      `
            <div id="cookies_container">
            <div id="cookies_text">
            <p>Este sitio web usa cookies para garantizarle una mejor experiencia. Al continuar utilizando el sitio, acepta nuestra <a href="/cookies">política de privacidad</a>.</p>
            </div>
            <label for="progress_of_cookies">desapareciendo en</label>
            <progress id="progress_of_cookies" value="1" max="100"> 32% </progress>
            </div>
            `;
  }
}
window.onload = () => {
  const progress = document.querySelector("#progress_of_cookies");
  while (progress.value < 100) {
    // every 1 second add 10

    intervalo = setInterval(() => {
      progress.value += 50;
    }, 1000);

    if (progress.value >= 100) {
      clearInterval(intervalo);
    }
    // progress.value += 10;
    // progress.value += 1;
    // lentear el proceso
  }
};
// <div id="cookies_btn_container">
// <button id="accept_cookies">aceptar</button>
// </div>
