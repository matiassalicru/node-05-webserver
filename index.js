const express = require("express");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/usuarios", (req, res) => {
  res.send("Hola desde usuarios");
});

app.post("/", (req, res) => {
  res.send("POST del path /");
});

app.listen(port, () => {
  console.log(`Server started - PORT ${port}`);
});
