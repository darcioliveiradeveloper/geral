const rl = require("./usuario");
const { pedirNum2 } = require("./num2");

function pedirOperacao(num1) {
  const validas = ["+", "-", "*", "/", "%"];
  rl.question("Escolha a operação (+, -, *, /, %): ", (op) => {
    if (!validas.includes(op)) {
      console.log("[ERRO]: Operação inválida.");
      return pedirOperacao(num1);
    }
    pedirNum2(num1, op); // Passa num1 e op adiante
  });
}

module.exports = { pedirOperacao };

