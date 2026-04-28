const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar() {
  rl.question("Qual é o número de lados do dado? ", (lados) => {
    const numeroLados = parseInt(lados);

    if (isNaN(numeroLados) || numeroLados <= 0) {
      console.log("Por favor, insira um número válido de lados.");
      perguntar();
      return;
    } else {
      const resultado = Math.floor(Math.random() * numeroLados) + 1;
      console.log(`Você lançou o dado e obteve: ${resultado}`);
      reiniciar();
      return;
    }

    function reiniciar() {
      rl.question("Deseja jogar novamente? (s/n): ", function (resposta) {
        if (resposta.toLowerCase() === "s") {
          perguntar();
        } else {
          console.log("Obrigado por jogar!");
          rl.close();
        }
      });
    }
    rl.close();
  });
}
perguntar();
