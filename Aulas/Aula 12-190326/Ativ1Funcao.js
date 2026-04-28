const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let alunos = [
    { nome: "Aluno1", idade: 18, curso: "Dev" },
];

function menu() {
  console.log('');
  console.log('=== Cadastro de Alunos ===');
  console.log('1 - Cadastrar Novo Aluno');
  console.log('2 - Buscar Aluno pelo nome');
  console.log('3 - Exibir todos os Alunos');
  console.log('4 - Sair');
  console.log('');

  rl.question('Escolha uma opção: ', function(opcao) {

    if (opcao === '1') {
      cadastrar();     
    } else if (opcao === '2') {
      buscar();       
    } else if (opcao === '3') {
      exibir(); 
    } else if (opcao === '4') {
      console.log('Encerrando o programa. Até logo!');
      rl.close();         
    } else {
      console.log('Opção inválida! Tente novamente.');
      menu();    
    }
  });
}

function cadastrar() {
  console.log('\n--- Cadastrar Novo Aluno ---');

  rl.question('Nome: ', function(nome) {
    rl.question('Idade: ', function(idade) {
      rl.question('Curso: ', function(curso) {

         let novoaluno = {
          nome: nome,
          idade: parseInt(idade),
          curso: curso,  
        };

        alunos.push(novoaluno);
        
        console.log('\n✓ Aluno "' + nome + '" cadastrado com sucesso!');
        menu(); 
      });
    });
  });
}

function buscar() {
  console.log('\n--- Buscar Aluno ---');

  rl.question('Digite o nome do Aluno: ', function(busca) {

    let minuscula = busca.toLowerCase();

    let encontrado = [];

    for (let i = 0; i < alunos.length; i++) {
      let atual = alunos[i];
      if (atual.nome.toLowerCase().includes(minuscula)) {
        encontrado.push(atual); 
      }
    }

    console.log('');
    if (encontrado.length === 0) {
        console.log('Nenhum Aluno encontrado com o nome: "' + busca + '".');
    } else {
        console.log('Aluno encontrado (' + encontrado.length + '):');
    encontrado.forEach(function(novo, i)
         {
        console.table(encontrado);
      });
    }

    menu(); 
  });
}


function exibir() {
    console.log('\n--- Todos os Alunos ---');
  
    if (alunos.length === 0) {
      console.log('Nenhum aluno cadastrado!');
    } else {
      console.table(alunos);
    }
  
  
    menu(); 
  }
  
  console.log('Bem-vindo ao Sistema de Alunos!');
  menu();
  