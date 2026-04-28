const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let anoAtual = new Date().getFullYear();

console.log("Ano atual: " + anoAtual);

rl.question("Digite seu ano de nascimento: ", (ano) => {
  let nascimento = parseInt(ano);
  let idade = anoAtual - nascimento;

  console.log("\n=== Resultado ===");

  if (nascimento > anoAtual) {
    console.log("Ano inválido!");
  } else if (idade > 130) {
    console.log("Ano muito antigo!");
  } else {
    console.log("Idade: " + idade + " anos");
  }

  rl.close();
});
