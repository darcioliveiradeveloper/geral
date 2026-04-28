const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nomes = [];

rl.question("Digite o nome 1: ", (n1) => {
  nomes.push(n1);

  rl.question("Digite o nome 2: ", (n2) => {
    nomes.push(n2);

    rl.question("Digite o nome 3: ", (n3) => {
      nomes.push(n3);

      rl.question("Digite o nome 4: ", (n4) => {
        nomes.push(n4);

        console.log("\nLista de nomes:");

        for (let i = 0; i < nomes.length; i++) {
          console.log((i+1) + " - " + nomes[i]);
        }

        rl.close();

      });
    });
  });
});
