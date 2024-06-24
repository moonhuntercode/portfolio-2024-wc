import equisIcon from "../imgs/icons/equis-icon.svg";
export class cookiesComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      /*html*/
      `
            <div id="cookies_container">
            <img id="equis_svg" src="${equisIcon}" alt="equis">
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
  let intervalo;
  // console.log(intervalo);
  const progress = document.querySelector("#progress_of_cookies");
  const container = document.querySelector("#cookies_container");
  intervalo = setInterval(() => {
    document.querySelector("#equis_svg").addEventListener("click", () => {
      container.remove();
    });
    progress.value += 10;
    if (progress.value >= 100) {
      progress.value = 100;
      clearInterval(intervalo);
      container.remove();
    }
  }, 700);
};
// <div id="cookies_btn_container">
// <button id="accept_cookies">aceptar</button>
// </div>
