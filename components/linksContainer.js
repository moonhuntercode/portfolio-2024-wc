import { myObj } from "./links_db.js";

import "./links_container.css";

const list = document.createElement("ul");

//automate create elements
// const img1 = document.createElement("img");
// img1.src = `${githubIcon}`;
// const img2 = document.createElement("img");
// img2.src = `${gitIcon}`;
// idea2:automatically create elements,and imgs
// thinking..............

//this array working well before
//  const array2 = [`${img1.outerHTML}`, `${img2.outerHTML}`];

const arrayPath = [];
myObj.forEach((obj) => {
  arrayPath.push(obj.path);
});
// console.log(arrayPath);
const arrayUrl = [];
myObj.forEach((obj) => {
  arrayUrl.push(obj.url);
});
// console.log(arrayUrl);
// idea:iterate over an img variable
for (let index = 0; index < arrayPath.length; index++) {
  //   arrayPath.push(`${myObj[index]}`);
  let divs = document.createElement("div");
  divs.className = "socials-elements";
  // imgs config start
  let img = document.createElement("img");
  img.setAttribute("alt", `${myObj[index].name}`);
  img.src = arrayPath[index];
  //   1 img.src 1
  const element = arrayPath[index];
  const anchor = document.createElement("a");
  anchor.setAttribute("href", arrayUrl[index]);

  // en esta parte agregamos la img
  // adentro de los anchors
  let spans = document.createElement("span");
  spans.innerHTML = `${myObj[index].name}`;
  spans.className = "p_socials";

  // zona de agregar hijos
  divs.append(img, spans);
  // anchors are parents
  anchor.appendChild(divs);

  anchor.setAttribute("target", "_blank");

  // list.appendChild(anchor);

  // test the elements to see if it works
  //   console.log(img.outerHTML);
  //   ❌ in test, f.e.g img.src = "../imgs/icons/git-icon-black.png";

  //   img.src 1 added to list
  const listItem = document.createElement("li");
  listItem.appendChild(anchor);
  list.appendChild(listItem);
}

// save for tests
// let newMyObj = myObj.reduce(function (result, currentObject) {
//   result[currentObject.id] = currentObject.src;
//   return result;
// }, {});
// console.log(newMyObj);
// arrayPath.map((element) => {
//   const listItem = document.createElement("li");
//   listItem.innerHTML = element;
//   list.appendChild(listItem);
// });
export class LinksContainer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      /*html*/
      `
      <section data-simplebar  data-simplebar-auto-hide="false" id="links_container">
      <h1>Links</h1>
      ${list.outerHTML}
     
      </section>
    `;
  }
}
customElements.define("links-container", LinksContainer);
