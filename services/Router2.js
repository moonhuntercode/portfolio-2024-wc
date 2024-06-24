export const RouterTwo = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        // const url1 = event.target.href;
        const url = event.target.getAttribute("href");
        RouterTwo.go(url);
      });
    });
    window.addEventListener("popstate", (event) => {
      RouterTwo.go(event.state.route, false);
    });
    // Check the initial url
    RouterTwo.go(window.location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);
    if (addToHistory) {
      history.pushState({ route }, null, route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Menu";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Your Order";
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("h1");
          pageElement.textContent = "D.etails";
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramId;
        }
    }

    // if (pageElement) {
    //   //   document.querySelector("main").children[0].remove(); // Remove old page |
    //   const cache = document.querySelector("app");
    //   cache.innerHTML = "";
    //   cache.append(pageElement);
    //   window.scrollX = 0;
    //   window.scrollY = 0;
    // }
  },
};
