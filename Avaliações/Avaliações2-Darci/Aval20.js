const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let notas = [];

rl.question("Digite a nota 1: ", (n1) => {
  notas.push(Number(n1));

  rl.question("Digite a nota 2: ", (n2) => {
    notas.push(Number(n2));

    rl.question("Digite a nota 3: ", (n3) => {
      notas.push(Number(n3));

      rl.question("Digite a nota 4: ", (n4) => {
        notas.push(Number(n4));

        let soma = 0;

        for (let i = 0; i < notas.length; i++) {
          soma = soma + notas[i];
        }

        let media = soma / notas.length;

        console.log("Média: " + media);

        if (media >= 7) {
          console.log("Aprovado");
        } else if (media >= 5) {
          console.log("Recuperação");
        } else {
          console.log("Reprovado");
        }

        rl.close();

      });
    });
  });
});
