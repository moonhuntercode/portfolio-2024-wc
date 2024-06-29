//e.g server.js
import express from "express";
import ViteExpress from "vite-express";
import { engine } from "express-handlebars";

const app = express();
const port = 3051 || process.env.PORT;

// config for production mode
// ViteExpress.config({ mode: "production" });

// template engine config - handlebars start
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// template engine config - handlebars end
// serving  static files
app.use(express.static("public"));

app.get("/message", (_, res) => res.send("Hello from express!"));
app.get("/home", (_, res) => {
  res.render("home");
});

ViteExpress.listen(app, port, () =>
  console.log(`http://localhost:${port}/home \n
    http://localhost:${port}/message
    `)
);
export default app;
