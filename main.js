import "./style.css";
import javascriptLogo from "./javascript.svg";

import { setupCounter } from "./counter.js";
import { VentanaContainer } from "./components/ventanaContainer.js";

const array1 = ["<p>hola</p>", "<p>hola2</p>", "<p>hola3</p>"];

const list = document.createElement("ul");

array1.forEach((element) => {
  const listItem = document.createElement("li");
  listItem.innerText = element;
  list.appendChild(listItem);
});
// console.log(typeof list);
// Pass a function to map
/* const map1 = array1
  .map((x) => x * 2)
  .join("")
  .split(" ")
  .toString();
console.log(typeof map1);
const inner = new DOMParser().parseFromString(list, "text/html").body.innerHTML; */

// prettier-ignore
document.querySelector("#app").innerHTML =
  //html
  `
  <div>
  
  ${list.innerHTML}
  

    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <ventana-container></ventana-container>
  </div>
`;

const container = document.querySelector("#exit_btn_container");
const linea1 = document.querySelector("#equis_linea_1");
const linea2 = document.querySelector("#equis_linea_2");

["mouseout", "mouseup", "mousedown"].forEach((event) => {
  container.addEventListener(event, () => {
    if (event == "mouseout") {
      linea1.style.background = "black";
      linea2.style.background = "black";
    } else if (event == "mousedown") {
      linea1.style.background = "white";
      linea2.style.background = "white";
    } else if (event == "mouseup") {
      linea1.style.background = "black";
    }
  });
});


setupCounter(document.querySelector("#counter"));
