const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fichas = 100;

function jogar() {
  if (fichas <= 0) {
    console.log("Você ficou sem fichas! Fim de jogo.");
    rl.close();
    return;
  }

  console.log(`\nVocê tem ${fichas} fichas.`);
  rl.question("Quanto deseja apostar? ", function (entradaAposta) {
    const aposta = parseInt(entradaAposta);

    if (isNaN(aposta) || aposta <= 0 || aposta > fichas) {
      console.log("Aposta inválida. Tente novamente.");
      jogar();
      return;
    }

    // Gera 3 números aleatórios entre 1 e 5
    const rolo1 = Math.floor(Math.random() * 5) + 1;
    const rolo2 = Math.floor(Math.random() * 5) + 1;
    const rolo3 = Math.floor(Math.random() * 5) + 1;

    console.log(`\n[ ${rolo1} ] [ ${rolo2} ] [ ${rolo3} ]`);

    if (rolo1 === rolo2 && rolo2 === rolo3) {
      const ganho = aposta * 5;
      fichas += ganho;
      console.log(`Jackpot! Você ganhou ${ganho} fichas!`);
    } else if (rolo1 === rolo2 || rolo1 === rolo3 || rolo2 === rolo3) {
      const ganho = aposta * 2;
      fichas += ganho;
      console.log(`Parabéns! Você ganhou ${ganho} fichas!`);
    } else {
      fichas -= aposta;
      console.log("Que pena! Você perdeu a aposta.");
    }

    if (fichas <= 0) {
      console.log("Você ficou sem fichas! Fim de jogo.");
      rl.close();
      return;
    }

    rl.question("Deseja jogar novamente? (s/n): ", function (resposta) {
      if (resposta.toLowerCase() === "s") {
        jogar();
      } else {
        console.log(`Você terminou com ${fichas} fichas. Obrigado por jogar!`);
        rl.close();
      }
    });
  });
}

console.clear();
console.log("Bem-vindo ao caça-níquel das fichas!");
jogar();
