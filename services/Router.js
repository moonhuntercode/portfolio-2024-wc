import { navaid } from "navaid";

export let routerOne = navaid();
console.log(routerOne);
// Attach routes
routerOne
  .on("/", () => {
    console.log("~> /");
  })
  .on("/cookies/", (params) => {
    console.log("~> /cookies", params);
  });

// Run as single instance
routerOne.run("/");
//=> "~> /"
routerOne.run("/users/lukeed");
//=> "~> /users/:username { username: 'lukeed' }"
routerOne.run("/books/kids/narnia");
//=> "~> /books/* { wild: 'kids/narnia' }"

// Run as long-lived routerOne w/ history & "<a>" bindings
// Also immediately calls `run()` handler for current location
routerOne.listen();
