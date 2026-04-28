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

        rl.question("Digite o número 5: ", (n5) => {
          numeros.push(Number(n5));

          let pares = 0;

          for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 === 0) {
              pares++;
            }
          }

          console.log("Quantidade de números pares: " + pares);

          rl.close();

        });
      });
    });
  });
});
