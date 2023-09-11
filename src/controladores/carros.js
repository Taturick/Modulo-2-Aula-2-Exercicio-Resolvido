const carros = require("../bancodedados");

const carrosFilter = (req, res) => {
  const {id, nome, marca, ano, cor } = req.query;
  let resultado = carros;

  console.log("Cheguei no controlador de listagem de carros");

  if (nome) {
    resultado = resultado.filter((carros) => {
      return carros.nome === nome;
    });
  }

  if (marca) {
    resultado = resultado.filter((carros) => {
      return carros.marca === marca;
    });
  }

  if (ano) {
    resultado = resultado.filter((carros) => {
      return carros.ano === ano;
    });
  }
  if (cor) {
    resultado = resultado.filter((carros) => {
      return carros.cor === cor;
    });
  }

  if (id) {
    resultado = resultado.find((carros) => {
      return carros.id === Number(id);
    });
  }

  if (resultado.length > 0) {
    res.send(resultado);
  } else {
    res.status(404).send("Carro(s) não encontrado(s)");
  }
};

const findCarros = (req, res) => {
  const carroEncontrado = carros.find((carros) => {
    return carros.id === Number(req.params.id);
  });

  if (carroEncontrado) {
    res.send(`Nome do carro: ${carroEncontrado.nome}`);
  
  } else {
    res.status(404).send("Carro não encontrado");
  }
};

module.exports = {
  carrosFilter,
  findCarros,
  carros,
};
