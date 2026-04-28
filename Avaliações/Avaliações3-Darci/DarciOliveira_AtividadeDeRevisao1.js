const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um Numero: ", (numero) => {
  let resultado = parseFloat(numero);

  if (resultado % 5 === 0) {
    console.log("SIMMMM. É divisivel por 5");
  } else {
    console.log("NÃOOOOO. Não é possivel Dividir por 5");
  }

  rl.close();
});
