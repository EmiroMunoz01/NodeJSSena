import express from "express";
//fix para usar dirname

import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//server

const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto", app.get("port"));

//configuracion, asi podremos usar el css
app.use(express.static(__dirname + "/public"));

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
