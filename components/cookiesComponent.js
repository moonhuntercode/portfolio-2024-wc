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
            <p>Este sitio web usa cookies para garantizarle una mejor experiencia. Al continuar utilizando el sitio, acepta nuestra 
            <a id="politicas_de_privacidad" href="#">política de privacidad</a>.</p>
            </div>
            <label for="progress_of_cookies">desapareciendo en</label>
            <progress id="progress_of_cookies" value="1" max="100"> 32% </progress>
            </div>
            `;
  }
  elemento(elemento1)
{
  try {
    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode("test");

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    newDiv.className = "cookies_message";
    // console.log(elemento1);
    const apegandoAlContenido = elemento1;
    apegandoAlContenido.appendChild(newDiv);
  } catch (error) {
    console.error(error);
  }
}
}
window.onload = () => {
  let intervalo;
  // console.log(intervalo);
  const progress = document.querySelector("#progress_of_cookies");
  const container = document.querySelector("#cookies_container");

  // llamada a la clase, e inicializacion del elemento
  cookiesComponent.prototype.elemento(document.querySelector("#politicas_de_privacidad"));

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
  // new chapter
};
// <div id="cookies_btn_container">
// <button id="accept_cookies">aceptar</button>
// </div>