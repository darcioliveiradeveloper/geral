const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let listaTotal = [27, 10, 3, 0, 20, 5, 6, 3];
let listaPar = [];
let listaImpar = [];

rl.question("\nQual é a sua idade? ", (resposta) => {
  let idade = parseInt(resposta);
  listaTotal.push(idade);

  for (let i = 0; i < listaTotal.length; i++) {
    let numero = listaTotal[i];

    if (numero % 2 === 0) {
      listaPar.push(numero);
    } else {
      listaImpar.push(numero);
    }
  }

  console.log("\n--- RESULTADOS ---");
  console.log("\nLista Total (com sua idade):", listaTotal);
  console.log("Lista Pares:", listaPar);
  console.log("Lista Ímpares:", listaImpar);
  rl.close();
});
