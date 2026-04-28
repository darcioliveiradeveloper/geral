const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let biblioteca = [
  { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', ano: 1954 },
  { titulo: 'Harry Potter', autor: 'J.K. Rowling', ano: 1997 },
  { titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: 1899 }
];

function mostrarMenu() {
  console.log('');
  console.log('=== Biblioteca de Livros ===');
  console.log('1 - Adicionar novo livro');
  console.log('2 - Buscar livro por título');
  console.log('3 - Exibir todos os livros');
  console.log('4 - Sair');
  console.log('');

  rl.question('Escolha uma opção: ', function(opcao) {

    if (opcao === '1') {
      adicionarLivro();     
    } else if (opcao === '2') {
      buscarLivro();       
    } else if (opcao === '3') {
      exibirTodosLivros(); 
    } else if (opcao === '4') {
      console.log('Encerrando a biblioteca. Até logo!');
      rl.close();         
    } else {
      console.log('Opção inválida! Tente novamente.');
      mostrarMenu();    
    }
  });
}

function adicionarLivro() {
  console.log('\n--- Adicionar Novo Livro ---');

  rl.question('Título do livro: ', function(titulo) {
    rl.question('Autor: ', function(autor) {
      rl.question('Ano de publicação: ', function(ano) {

         let novoLivro = {
          titulo: titulo,
          autor: autor,
          ano: parseInt(ano)
        };

        biblioteca.push(novoLivro);

        console.log('\n✓ Livro "' + titulo + '" adicionado com sucesso!');
        mostrarMenu(); 
      });
    });
  });
}

function buscarLivro() {
  console.log('\n--- Buscar Livro ---');

  rl.question('Digite o título (ou parte dele): ', function(tituloBusca) {

    let livrosEncontrados = [];

    for (let i = 0; i < biblioteca.length; i++) {
      let livroAtual = biblioteca[i];
      if (livroAtual.titulo.toLowerCase().includes(buscaMinuscula)) {
        livrosEncontrados.push(livroAtual); // 
      }
    }

    console.log('');
    if (livrosEncontrados.length === 0) {
      console.log('Nenhum livro encontrado com "' + tituloBusca + '".');
    } else {
      console.log('Livros encontrados (' + livrosEncontrados.length + '):');
      livrosEncontrados.forEach(function(livro, i) {
        console.log((i + 1) + '. "' + livro.titulo + '" - ' + livro.autor + ' (' + livro.ano + ')');
      });
    }

    mostrarMenu(); 
  });
}

function exibirTodosLivros() {
  console.log('\n--- Todos os Livros ---');

  if (biblioteca.length === 0) {
    console.log('A biblioteca está vazia!');
  } else {
    console.log('Total de livros: ' + biblioteca.length);
    console.log('');

    biblioteca.forEach(function(livro, indice) {
      console.log((indice + 1) + '. "' + livro.titulo + '"');
      console.log('   Autor: ' + livro.autor);
      console.log('   Ano: ' + livro.ano);
    });
  }

  mostrarMenu(); 
}

console.log('Bem-vindo à Biblioteca!');
mostrarMenu();
