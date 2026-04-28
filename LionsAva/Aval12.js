const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let listaAlunos = [];
  console.log('');
  console.log('=== Cadastro de Alunos ===');

  function cadastrarAluno() {

    rl.question('Nome: ', function(nome) {
      rl.question('Idade: ', function(idade) {
        rl.question('Curso: ', function(curso) {

          let aluno = {
            nome: nome,
            idade: parseInt(idade),
            curso: curso
          };

          listaAlunos.push(aluno);

          console.log('Aluno cadastrado com sucesso! ✓');

          cadastrarAluno();
        });
      });
    });
  }

  function exibirListaAlunos() {
    console.log('');
    console.log('=============================');
    console.log('=== Lista de Alunos Cadastrados ===');
    console.log('Total de alunos: ' + listaAlunos.length);
    console.log('=============================');

    listaAlunos.forEach(function(aluno, indice) {
      console.log('\nAluno ' + (indice + 1) + ':');
      console.log('  Nome: ' + aluno.nome);     
      console.log('  Idade: ' + aluno.idade + ' anos');
      console.log('  Curso: ' + aluno.curso);
    });

    rl.close();
  }

  cadastrarAluno();
