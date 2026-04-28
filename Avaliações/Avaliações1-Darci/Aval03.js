const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nome: ", (nome) => {
  rl.question("Idade: ", (idade) => {
    rl.question("Possui CNH? (sim/não): ", (resposta) => {
      let usuario = {
        nome: nome,
        idade: parseInt(idade),
        possuiCNH: resposta.toLowerCase() === "sim",
      };

      console.log("\n=== Resultado ===");
      console.log("Nome: " + usuario.nome);
      console.log("Idade: " + usuario.idade);

      if (usuario.possuiCNH) {
        console.log("CNH: Sim");
      } else {
        console.log("CNH: Não");
      }

      rl.close();
    });
  });
});
