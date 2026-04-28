const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lancarDado() {
  console.log("Girando o dado...");
  const resultado = Math.floor(Math.random() * 6) + 1;
  console.log(`O resultado do lançamento foi: ${resultado}\n`);
}

function reiniciarJogo() {
  rl.question("Quer jogar de novo? (S ou N)", (resposta) => {
    const usuario = resposta.trim().toLowerCase();

    if (usuario === "sim" || usuario === "s") {
      lancarDado();
      reiniciarJogo();
    } else {
      console.log("Obrigado por jogar!");
      rl.close();
    }
  });
}

lancarDado();
reiniciarJogo();
