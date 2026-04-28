// ============================================
// ATIVIDADE PRÁTICA 13 - Biblioteca de Livros
// Objetivo: Reforçar vetores, objetos e laços de repetição
// ============================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array que representa nossa biblioteca (começa com alguns livros)
let biblioteca = [
  { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', ano: 1954 },
  { titulo: 'Harry Potter', autor: 'J.K. Rowling', ano: 1997 },
  { titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: 1899 }
];

// Função para mostrar o menu de opções
function mostrarMenu() {
  console.log('');
  console.log('=== Biblioteca de Livros ===');
  console.log('1 - Adicionar novo livro');
  console.log('2 - Buscar livro por título');
  console.log('3 - Exibir todos os livros');
  console.log('4 - Sair');
  console.log('');

  rl.question('Escolha uma opção: ', function(opcao) {

    // Verificamos qual opção foi escolhida
    if (opcao === '1') {
      adicionarLivro();     // Vai para a função de adicionar
    } else if (opcao === '2') {
      buscarLivro();        // Vai para a função de buscar
    } else if (opcao === '3') {
      exibirTodosLivros();  // Vai para a função de exibir
    } else if (opcao === '4') {
      console.log('Encerrando a biblioteca. Até logo!');
      rl.close();           // Fecha o programa
    } else {
      console.log('Opção inválida! Tente novamente.');
      mostrarMenu();        // Volta ao menu
    }
  });
}

// Função para adicionar um novo livro
function adicionarLivro() {
  console.log('\n--- Adicionar Novo Livro ---');

  rl.question('Título do livro: ', function(titulo) {
    rl.question('Autor: ', function(autor) {
      rl.question('Ano de publicação: ', function(ano) {

        // Criamos um objeto para o novo livro
        let novoLivro = {
          titulo: titulo,
          autor: autor,
          ano: parseInt(ano)
        };

        // Adicionamos o livro ao array da biblioteca
        biblioteca.push(novoLivro);

        console.log('\n✓ Livro "' + titulo + '" adicionado com sucesso!');
        mostrarMenu(); // Volta ao menu
      });
    });
  });
}

// Função para buscar um livro pelo título
function buscarLivro() {
  console.log('\n--- Buscar Livro ---');

  rl.question('Digite o título (ou parte dele): ', function(tituloBusca) {

    // Convertemos para minúsculas para a busca não ser sensível a maiúsculas
    let buscaMinuscula = tituloBusca.toLowerCase();

    // Array para guardar os livros encontrados
    let livrosEncontrados = [];

    // Percorremos todos os livros da biblioteca com for
    for (let i = 0; i < biblioteca.length; i++) {
      let livroAtual = biblioteca[i];

      // Verificamos se o título do livro contém o texto buscado
      // includes() verifica se um texto contém outro texto
      if (livroAtual.titulo.toLowerCase().includes(buscaMinuscula)) {
        livrosEncontrados.push(livroAtual); // Adiciona aos encontrados
      }
    }

    // Exibimos os resultados
    console.log('');
    if (livrosEncontrados.length === 0) {
      console.log('Nenhum livro encontrado com "' + tituloBusca + '".');
    } else {
      console.log('Livros encontrados (' + livrosEncontrados.length + '):');
      livrosEncontrados.forEach(function(livro, i) {
        console.log((i + 1) + '. "' + livro.titulo + '" - ' + livro.autor + ' (' + livro.ano + ')');
      });
    }

    mostrarMenu(); // Volta ao menu
  });
}

// Função para exibir todos os livros
function exibirTodosLivros() {
  console.log('\n--- Todos os Livros ---');

  if (biblioteca.length === 0) {
    console.log('A biblioteca está vazia!');
  } else {
    console.log('Total de livros: ' + biblioteca.length);
    console.log('');

    // Percorremos todos os livros com forEach
    biblioteca.forEach(function(livro, indice) {
      console.log((indice + 1) + '. "' + livro.titulo + '"');
      console.log('   Autor: ' + livro.autor);
      console.log('   Ano: ' + livro.ano);
    });
  }

  mostrarMenu(); // Volta ao menu
}

// Iniciamos o programa mostrando o menu
console.log('Bem-vindo à Biblioteca!');
mostrarMenu();
