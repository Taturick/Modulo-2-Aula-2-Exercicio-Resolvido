const express = require("express");
const app = express();
const { carrosFilter, findCarros } = require("./controladores/carros");
const {validarSenha} = require("./intermediarios");

app.use((requisicao, resposta, next) => {
  console.log("Passei pelo primeiro intermediario");
  next();
});

app.use(validarSenha)

app.get("/", (req, res) => {
  res.send("Exercicio proposto pra estudos, bora codar");
});
app.get("/carros", carrosFilter);

app.get("/carros/:id", findCarros);

app.listen(3000, (req, res) => {
  console.log("Servidor local rodando no http://localhost:3000");
});
