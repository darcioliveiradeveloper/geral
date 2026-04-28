const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let saldo = 1000;

console.log("Saldo atual: R$" + saldo);

rl.question("Digite o valor para saque: ", (valor) => {

  valor = Number(valor);

  if (valor <= saldo) {
    saldo = saldo - valor;
    console.log("Saque realizado com sucesso");
    console.log("Saldo restante: R$" + saldo);
  } else {
    console.log("Saldo insuficiente");
  }

  rl.close();

});
