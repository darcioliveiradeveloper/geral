// ============================================
// ATIVIDADE PRÁTICA 12 - Cadastro de Alunos
// Objetivo: Reforçar vetores, objetos e laço de repetição
// ============================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array que vai guardar os objetos de cada aluno
let listaAlunos = [];

// Perguntamos quantos alunos serão cadastrados
rl.question('Quantos alunos deseja cadastrar? ', function(quantidade) {

  let qtd = parseInt(quantidade);

  if (isNaN(qtd) || qtd <= 0) {
    console.log('Quantidade inválida!');
    rl.close();
    return;
  }

  let contador = 0; // Contador de alunos cadastrados

  console.log('');
  console.log('=== Cadastro de Alunos ===');

  // Função para cadastrar cada aluno
  function cadastrarAluno() {

    // Se já cadastramos todos, exibimos a lista
    if (contador >= qtd) {
      exibirListaAlunos();
      return;
    }

    console.log('\n--- Aluno ' + (contador + 1) + ' ---');

    // Perguntamos o nome do aluno
    rl.question('Nome: ', function(nome) {

      // Perguntamos a idade do aluno
      rl.question('Idade: ', function(idade) {

        // Perguntamos o curso do aluno
        rl.question('Curso: ', function(curso) {

          // Criamos um OBJETO para representar o aluno
          // Cada aluno tem nome, idade e curso como propriedades
          let aluno = {
            nome: nome,
            idade: parseInt(idade),
            curso: curso
          };

          // Adicionamos o objeto aluno ao array de alunos
          listaAlunos.push(aluno);

          contador++; // Aumentamos o contador

          console.log('Aluno cadastrado com sucesso! ✓');

          // Chama a função novamente para o próximo aluno
          cadastrarAluno();
        });
      });
    });
  }

  // Função para exibir todos os alunos cadastrados
  function exibirListaAlunos() {
    console.log('');
    console.log('=============================');
    console.log('=== Lista de Alunos Cadastrados ===');
    console.log('Total de alunos: ' + listaAlunos.length);
    console.log('=============================');

    // Percorremos o array com forEach para exibir cada aluno
    listaAlunos.forEach(function(aluno, indice) {
      console.log('\nAluno ' + (indice + 1) + ':');
      console.log('  Nome: ' + aluno.nome);       // Acessa propriedade do objeto
      console.log('  Idade: ' + aluno.idade + ' anos');
      console.log('  Curso: ' + aluno.curso);
    });

    rl.close();
  }

  // Inicia o cadastro do primeiro aluno
  cadastrarAluno();
});
