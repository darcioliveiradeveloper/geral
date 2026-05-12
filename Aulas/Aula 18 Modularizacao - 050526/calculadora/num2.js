const rl = require("./usuario");
const calculo = require("./calculo");

function pedirNum2(num1, op) {
  rl.question("Digite o segundo número: ", (valor2) => {
    const num2 = parseFloat(valor2);
    if (isNaN(num2)) {
      console.log("[ERRO]: Digite um número válido.");
      return pedirNum2(num1, op);
    }
    calculo(num1, op, num2); // Envia os 3 dados para o fim
  });
}

module.exports = { pedirNum2 };

