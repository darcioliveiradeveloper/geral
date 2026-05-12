const soma = require("./soma");
const sub = require("./subtracao");
const mult = require("./multiplicacao");
const div = require("./divisao");
const porc = require("./porcentagem");
const rl = require("./usuario");

function calculo(n1, op, n2) {
  let resultado;

  switch (op) {
    case "+": resultado = soma(n1, n2); break;
    case "-": resultado = sub(n1, n2); break;
    case "*": resultado = mult(n1, n2); break;
    case "/": resultado = div(n1, n2); break;
    case "%": resultado = porc(n1, n2); break;
  }

  console.log(`\n> Resultado: ${n1} ${op} ${n2} = ${resultado}\n`);
  rl.close(); // Encerra o programa
}

module.exports = calculo;
