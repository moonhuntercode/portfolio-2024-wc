//e.g server.js
import express from "express";
import ViteExpress from "vite-express";
import { engine } from "express-handlebars";

const app = express();
const port = 3000 || process.env.PORT;
// template engine config - handlebars start
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// template engine config - handlebars end

app.get("/message", (_, res) => res.send("Hello from express!"));
app.get("/home", (_, res) => {
  res.render("home", {
    title: "Home",
  });
});

ViteExpress.listen(app, 3000, () =>
  console.log(`http://localhost:${port} \n
    http://localhost:${port}/message
    `)
);
