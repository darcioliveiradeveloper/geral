const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let alunos = [];

rl.question("Nome do aluno 1: ", (nome1) => {
  alunos.push({nome: nome1});

  rl.question("Nome do aluno 2: ", (nome2) => {
    alunos.push({nome: nome2});

    rl.question("Nome do aluno 3: ", (nome3) => {
      alunos.push({nome: nome3});

      console.log("\nLista de alunos:");

      for (let i = 0; i < alunos.length; i++) {
        console.log((i+1) + " - " + alunos[i].nome);
      }

      rl.close();

    });
  });
});
