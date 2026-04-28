const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nome: ", (nome) => {
  rl.question("Idade: ", (idade) => {
    rl.question("Possui CNH? (sim/não): ", (resposta) => {
      let idadeNumero = parseInt(idade);
      let possuiCNH = resposta.toLowerCase() === "sim";

      console.log("\n=== Resultado ===");
      console.log("Nome: " + nome);
      console.log("Idade: " + idadeNumero);

      if (possuiCNH) {
        console.log("Pode dirigir.");
      } else {
        console.log("Não pode dirigir.");
      }

      rl.close();
    });
  });
});
