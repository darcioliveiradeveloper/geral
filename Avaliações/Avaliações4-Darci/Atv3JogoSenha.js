const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const caracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

rl.question("Digite o Tamanho da senha em caracteres: ", (comprimentoSenha) => {
  comprimentoSenha = parseInt(comprimentoSenha);

  if (isNaN(comprimentoSenha) || comprimentoSenha <= 0) {
    console.log("Por favor, digite um número válido.");
    rl.close();
    return;
  }

  let senha = "";

  for (let i = 0; i < comprimentoSenha; i++) {
    const numeroAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(numeroAleatorio);
  }

  console.log(`Senha gerada: ${senha}`);

  rl.close();
});
