const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

rl.question("Digite o número 1: ", (n1) => {
  numeros.push(Number(n1));

  rl.question("Digite o número 2: ", (n2) => {
    numeros.push(Number(n2));

    rl.question("Digite o número 3: ", (n3) => {
      numeros.push(Number(n3));

      let maior = numeros[0];

      for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
          maior = numeros[i];
        }
      }

      console.log("Maior número: " + maior);

      rl.close();

    });
  });
});
