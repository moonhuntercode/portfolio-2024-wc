import githubIcon from "../imgs/icons/git-icon-black.png";
import "./links_container.css";
const img1 = document.createElement("img");
img1.src = `${githubIcon}`;
const array1 = [
  `${img1.outerHTML}`,
  "<p>content1</p>",
  "<p>content2</p>",
  "<p>content3</p>",
];
let myObj = [
  { id: 1, name: "Github", src: `${githubIcon.src}` },
  { id: 2, name: "two" },
  { id: 3, name: "tree" },
  { id: 4, name: "four" },
];
let newMyObj = myObj.reduce(function (result, currentObject) {
  result[currentObject.id] = currentObject.name;
  return result;
}, {});
console.log(newMyObj);
console.log(typeof newMyObj);
const list = document.createElement("ul");

array1.map((element, id) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = element;
  list.appendChild(listItem);
});
export class LinksContainer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      /*html*/
      `
      
    <h1>Links</h1>
    ${list.outerHTML}
    `;
  }
}
customElements.define("links-container", LinksContainer);
