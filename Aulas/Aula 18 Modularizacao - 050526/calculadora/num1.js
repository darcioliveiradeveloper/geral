const rl = require("./usuario");
const { pedirOperacao } = require("./operacao");

function pedirNum1() {
  rl.question("Digite o primeiro número: ", (valor1) => {
    const num1 = parseFloat(valor1);
    if (isNaN(num1)) {
      console.log("[ERRO]: Digite um número válido.");
      return pedirNum1();
    }
    pedirOperacao(num1); // Passa num1 adiante
  });
}

module.exports = { pedirNum1 };

