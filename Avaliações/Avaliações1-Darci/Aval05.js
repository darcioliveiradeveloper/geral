const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite sua idade: ", (idade) => {
  let idadeNumero = parseInt(idade);

  console.log("\n=== Resultado ===");

  if (idadeNumero >= 18) {
    console.log("Você é maior de idade!");
  } else {
    console.log("Você é menor de idade.");
    console.log("Faltam " + (18 - idadeNumero) + " anos.");
  }

  rl.close();
});
