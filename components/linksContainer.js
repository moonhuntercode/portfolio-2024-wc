import githubIcon from "../imgs/icons/git-icon-black.png";
const array1 = [`${githubIcon}`, "<p>content1</p>", "<p>content2</p>", "<p>content3</p>"];

const list = document.createElement("ul");

array1.forEach((element) => {
  const listItem = document.createElement("li");
  listItem.innerText = element;
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
