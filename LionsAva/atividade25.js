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

      rl.question("Digite o número 4: ", (n4) => {
        numeros.push(Number(n4));

        let soma = 0;

        for (let i = 0; i < numeros.length; i++) {
          soma = soma + numeros[i];
        }

        console.log("Soma total: " + soma);

        rl.close();

      });
    });
  });
});
