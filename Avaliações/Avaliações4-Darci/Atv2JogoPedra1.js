const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const opcoes = ["pedra", "papel", "tesoura", "lagarto", "spock"];
const cpu = opcoes[Math.floor(Math.random() * opcoes.length)];

rl.question(
  "Opções: pedra, papel, tesoura, lagarto, spock - Escolha: ",
  (escolha) => {
    if (escolha === cpu) {
      console.log(`CPU escolheu: ${cpu}`);
      console.log(`Você escolheu: ${escolha}`);
      console.log("Deu Empate");
    } else if (
      (escolha === "pedra" && cpu === "tesoura") ||
      (escolha === "pedra" && cpu === "lagarto") ||
      (escolha === "papel" && cpu === "pedra") ||
      (escolha === "papel" && cpu === "spock") ||
      (escolha === "tesoura" && cpu === "papel") ||
      (escolha === "tesoura" && cpu === "lagarto") ||
      (escolha === "lagarto" && cpu === "papel") ||
      (escolha === "lagarto" && cpu === "spock") ||
      (escolha === "spock" && cpu === "pedra") ||
      (escolha === "spock" && cpu === "tesoura")
    ) {
      console.log(`CPU escolheu: ${cpu}`);
      console.log(`Você escolheu: ${escolha}`);
      console.log("Você Venceu");
    } else {
      console.log(`CPU escolheu: ${cpu}`);
      console.log(`Você escolheu: ${escolha}`);
      console.log("Você Perdeu");
    }

    rl.close();
  },
);
