const numeroMaximo = 100;
const tentativasMaximas = 10;
const numeroAleatorioInteiro = Math.floor(Math.random() * numeroMaximo) + 1;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tentativas = 0;

function perguntar() {
  rl.question("Digite um número entre 1 e 100: ", function (resposta) {
    const numeroUsuarioInt = parseInt(resposta);

    if (isNaN(numeroUsuarioInt) || numeroUsuarioInt < 1 || numeroUsuarioInt > numeroMaximo) {
      console.log("Por favor, digite um número válido entre 1 e 100.");
      perguntar();
      return;
    }

    tentativas++;

    if (numeroUsuarioInt === numeroAleatorioInteiro) {
      console.log(`Parabéns! Você acertou o número em ${tentativas} tentativa(s)!`);
      perguntarReinicio();
    } else if (tentativas >= tentativasMaximas) {
      console.log(`Suas tentativas acabaram! O número correto era ${numeroAleatorioInteiro}.`);
      perguntarReinicio();
    } else if (numeroUsuarioInt < numeroAleatorioInteiro) {
      console.log("O número é maior. Tente novamente.");
      perguntar();
    } else {
      console.log("O número é menor. Tente novamente.");
      perguntar();
    }
  });
}

function perguntarReinicio() {
  rl.question("Deseja jogar novamente? (s/n): ", function (resposta) {
    if (resposta.toLowerCase() === "s") {
      tentativas = 0;
      global.numeroAleatorioInteiro = Math.floor(Math.random() * numeroMaximo) + 1;
      perguntar();
    } else {
      console.log("Obrigado por jogar!");
      rl.close();
    }
  });
}

perguntar();