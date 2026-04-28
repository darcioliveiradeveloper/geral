const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let usuarioCorreto = "admin";
let senhaCorreta = "1234";

rl.question("Digite o usuário: ", (usuario) => {
  rl.question("Digite a senha: ", (senha) => {

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
      console.log("Login realizado com sucesso");
    } else {
      console.log("Usuário ou senha incorretos");
    }

    rl.close();

  });
});
