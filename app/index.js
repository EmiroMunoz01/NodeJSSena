import express from "express";
//fix para usar dirname

import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { methods as authentication } from "./controllers/authentication.controller.js";
//server

const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto", app.get("port"));

//configuracion, asi podremos usar el css
app.use(express.static(__dirname + "/public"));
app.use(express.json())

//crearemos las rutas

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/login.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/pages/register.html");
});

app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/pages/admin/admin.html");
});

//usaremos una funcion
app.post("/api/register", authentication.register);

app.post("/api/login", authentication.login);
