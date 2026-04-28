const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nome: ", (nome) => {
  rl.question("Idade: ", (idade) => {
    console.log("\n=== Resultado ===");
    console.log("Olá, " + nome + "!");
    console.log("Você tem " + parseInt(idade) + " anos.");

    rl.close();
  });
});
