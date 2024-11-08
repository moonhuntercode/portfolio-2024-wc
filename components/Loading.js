// components/Loading.js
// primer método
export class Loading extends HTMLElement {
  connectedCallback() {
    //prettier-ignore
    this.innerHTML =
        /*html*/
        `
        <div class="loading-container">
          <div class="spinner"></div>
          cargando
        </div>
      `;
  }
}

// segundo método
// export class Loading extends HTMLElement {
//   constructor() {
//     super();
//     //prettier-ignore
//     this.innerHTML =
//         /*html*/
//         `
//         <div class="loading-container">
//           <div class="spinner"></div>
//           cargando
//         </div>
//       `;
//   }
// }
