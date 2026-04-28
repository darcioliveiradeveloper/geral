const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let listaAlunos = [];
let continuar = "s";

console.log("\n=== Cadastro ===");

rl.question("Nome: ", (nome) => {
  rl.question("Idade: ", (idade) => {
    rl.question("Curso: ", (curso) => {
      listaAlunos.push({
        nome: nome,
        idade: parseInt(idade),
        curso: curso,
      });

      console.log("\nAluno cadastrado!\n");

      rl.question("Deseja cadastrar outro? (s/n): ", (resposta) => {
        if (resposta.toLowerCase() === "s") {
          rl.question("Nome: ", (nome) => {
            rl.question("Idade: ", (idade) => {
              rl.question("Curso: ", (curso) => {
                listaAlunos.push({
                  nome: nome,
                  idade: parseInt(idade),
                  curso: curso,
                });

                console.log("\nAluno cadastrado!\n");

                console.log("\n=== Lista de Alunos ===");

                listaAlunos.forEach((aluno, i) => {
                  console.log("\nAluno " + (i + 1));
                  console.log("Nome: " + aluno.nome);
                  console.log("Idade: " + aluno.idade);
                  console.log("Curso: " + aluno.curso);
                });

                rl.close();
              });
            });
          });
        } else {
          console.log("\n=== Lista de Alunos ===");

          listaAlunos.forEach((aluno, i) => {
            console.log("\nAluno " + (i + 1));
            console.log("Nome: " + aluno.nome);
            console.log("Idade: " + aluno.idade);
            console.log("Curso: " + aluno.curso);
          });

          rl.close();
        }
      });
    });
  });
});
