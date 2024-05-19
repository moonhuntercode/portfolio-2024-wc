import { loadAll } from "@tsparticles/all";
import { tsParticles } from "@tsparticles/engine";

// START PARTICLES
let particlesConfig = {
  fpsLimit: 60,
  particles: {
    color: {
      value: "#fff",
    },
    number: {
      value: 20,
    },
    move: {
      enable: true,
    },
    links: {
      enable: true,
      color: "#fff",
    },
    detectRetina: true,
    poisson: {
      enable: true,
    },
  },
};
const configs = {
  particles: {
    number: {
      value: 100,
    },
    color: {
      value: "#ffffff",
    },
    links: {
      enable: true,
      distance: 200,
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
    },
    size: {
      value: {
        min: 4,
        max: 6,
      },
    },
    move: {
      enable: true,
      speed: 2,
    },
  },
  background: {
    color: "#000000",
  },
  poisson: {
    enable: true,
  },
};
async function loadParticles(options) {
  await loadAll(tsParticles);
  await tsParticles.load({ id: "tsparticles", options });
}

loadParticles(particlesConfig);

// now you can control the animations too, it's possible to pause and resume the animations
// these methods don't change the config so you're safe with all your configurations
// domItem(0) returns the first tsParticles instance loaded in the dom
const particles = tsParticles.domItem(0);

// play will start the animations, if the move is not enabled it won't enable it, it just updates the frame
// particles.play();

// pause will stop the animations
// particles.pause();
export class Particles extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      /*html*/
      `
       
   
        `;
  }
}
customElements.define("web-particles", Particles);
