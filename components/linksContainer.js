import gitIcon from "../imgs/icons/git-icon-black.png";
import githubIcon from "../imgs/icons/github-icon.png";
import linkedinIcon from "../imgs/icons/logo-linkedin.png";
import instagramIcon from "../imgs/icons/instagram-version-2.png";
import twitchIcon from "../imgs/icons/twitch-icon-v2.png";

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
  {
    id: 0,
    name: "github",
    url: "https://github.com/moonhuntercode",
    path: `${githubIcon}`,
  },
  {
    id: 1,
    name: "git",
    url: "https://www.tiktok.com/@victorcode_",
    path: `${gitIcon}`,
  },
  {
    id: 2,
    name: "instagram",
    url: "https://www.instagram.com/victorcode_/",
    path: `${instagramIcon}`,
  },
  {
    id: 3,
    name: "linkedin",
    url: "https://www.linkedin.com/in/victorcode/",
    path: `${linkedinIcon}`,
  },
  {
    id: 4,
    name: "twitch",
    url: "https://www.twitch.tv/victorcode_",
    path: `${twitchIcon}`,
  },
];

//this array working well before
//  const array2 = [`${img1.outerHTML}`, `${img2.outerHTML}`];

const array1 = [];
myObj.forEach((obj) => {
  array1.push(obj.path);
});
const arrayUrl = [];
myObj.forEach((obj) => {
  arrayUrl.push(obj.url);
});
console.log(arrayUrl);
// idea:iterate over an img variable
for (let index = 0; index < array1.length; index++) {
  //   array1.push(`${myObj[index]}`);
  let img = document.createElement("img");
  img.src = array1[index];
  //   1 img.src 1
  const element = array1[index];
  const anchor = document.createElement("a");
  anchor.setAttribute("href", arrayUrl[index]);
  anchor.appendChild(img);
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
