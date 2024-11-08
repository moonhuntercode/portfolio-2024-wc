/*Entiendo que tu archivo links_db.js tiene una estructura diferente a la que yo había asumido.
No hay problemas, podemos adaptar el código para que se ajuste a tu estructura de datos.
Aquí te dejo el código actualizado:
 */
// Importamos los enlaces ficticios desde el archivo links_db.js
import { fakeDbofLinks } from "./links_db.js";

// Importamos el archivo CSS para estilos
import "./links_container.css";

// Creamos un elemento ul para contener los enlaces
const list = document.createElement("ul");

// Recorremos el arreglo de enlaces ficticios
fakeDbofLinks.forEach((obj) => {
  console.log("Procesando imagen:", obj.path);

  // Creamos un div para cada enlace
  const div = document.createElement("div");
  div.className = "socials-elements";

  // Creamos una imagen para cada enlace con un placeholder
  const img = document.createElement("img");
  img.alt = obj.name; // Texto alternativo para la imagen
  img.loading = "lazy"; // Atributo para carga diferida de imágenes
  img.src = obj.path; // Ruta de la imagen
  img.className = "lazy-image";
  img.onerror = function () {
    console.error("Error al cargar imagen:", this.src);
  };

  // Creamos un enlace para cada imagen
  const anchor = document.createElement("a");
  anchor.href = obj.url; // URL del enlace
  anchor.target = "_blank"; // Abrir enlace en nueva pestaña

  // Creamos un span para el texto del enlace
  const span = document.createElement("span");
  span.innerHTML = obj.name; // Texto del enlace
  span.className = "p_socials";

  // Agregamos la imagen y el texto al div
  div.append(img, span);

  // Agregamos el div al enlace
  anchor.appendChild(div);

  // Creamos un elemento li para contener el enlace
  const listItem = document.createElement("li");

  // Agregamos el enlace al elemento li
  listItem.appendChild(anchor);

  // Agregamos el elemento li a la lista
  list.appendChild(listItem);
});

// Definimos la clase LinksContainer como un elemento web personalizado
export class LinksContainer extends HTMLElement {
  // Constructor de la clase
  constructor() {
    super();

    // Asignamos el HTML interno del elemento
    this.innerHTML = /*html*/ `
      <section data-simplebar data-simplebar-auto-hide="false" id="links_container">
        <h1>Links</h1>
        ${list.outerHTML} 
        <!-- Agregamos la lista de enlaces-->
      </section>
    `;
  }
}

//Registramos el elemento web personalizado
customElements.define("links-container", LinksContainer);
/*No necesitamos hacer cambios en el archivo links_db.js.
Si tienes algún problema o error, no dudes en preguntar.*/
