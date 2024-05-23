import gitIcon from "../imgs/icons/git-icon-black.png";
import githubIcon from "../imgs/icons/github-icon.png";
import linkedinIcon from "../imgs/icons/logo-linkedin.png";

import "./links_container.css";

const list = document.createElement("ul");

//automate create elements
// const img1 = document.createElement("img");
// img1.src = `${githubIcon}`;
// const img2 = document.createElement("img");
// img2.src = `${gitIcon}`;
// idea2:automatically create elements,and imgs
// thinking..............

let myObj = [
  { id: 1, name: "Github", src: "../imgs/icons/github-icon.png" },
  { id: 2, name: "linkedin", src: "../imgs/icons/logo-linkedin.png" },
  { id: 3, name: "git", src: "../imgs/icons/git-icon-black.png" },
  { id: 4, name: "instagram", src: "../imgs/icons/instagram-version-2.png" },
];

//this array working well before
//  const array2 = [`${img1.outerHTML}`, `${img2.outerHTML}`];

const array1 = [];
myObj.forEach((obj) => {
  array1.push(obj.src);
});
// console.log(array1);
// idea:iterate over an img variable
for (let index = 0; index < array1.length; index++) {
  //   array1.push(`${myObj[index]}`);
  let img = document.createElement("img");
  img.src = array1[index];
  //   1 img.src 1
  const element = array1[index];

  // test the elements to see if it works
  //   console.log(img.outerHTML);
  //   ❌ in test, f.e.g img.src = "../imgs/icons/git-icon-black.png";

  //   img.src 1 added to list
  const listItem = document.createElement("li");
  listItem.appendChild(img);
  list.appendChild(listItem);
}

// save for tests
// let newMyObj = myObj.reduce(function (result, currentObject) {
//   result[currentObject.id] = currentObject.src;
//   return result;
// }, {});
// console.log(newMyObj);
// array1.map((element) => {
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
      <section id="links_container">
      <h1>Links</h1>
      ${list.outerHTML}
     
      </section>
    `;
  }
}
customElements.define("links-container", LinksContainer);
