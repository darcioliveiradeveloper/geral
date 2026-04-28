const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let listaNumeros = [5, 10, 15, 20];

console.log("Lista disponível:");
console.log(listaNumeros);

rl.question("Digite um número: ", (input) => {
  let numero = parseInt(input);
  let encontrado = false;

  for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] === numero) {
      encontrado = true;
    }
  }

  console.log("\n=== Resultado ===");

  if (encontrado) {
    console.log("Número encontrado!");
  } else {
    console.log("Número não encontrado.");
  }

  rl.close();
});
