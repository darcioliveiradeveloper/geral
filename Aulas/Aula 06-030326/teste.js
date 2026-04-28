const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", function(numero) {
  numero = Number(numero);

  if (numero % 2 === 0) {
    console.log("O número é PAR");
  } else {
    console.log("O número é ÍMPAR");
  }

  rl.close();
});