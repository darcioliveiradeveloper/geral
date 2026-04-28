// ============================================
// ATIVIDADE PRÁTICA 8 - Explorando Arrays
// Objetivo: Aprender a criar e manipular arrays (listas)
// ============================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ===== O QUE É UM ARRAY? =====
// Um array é uma lista de valores guardados em uma única variável
// Exemplo: let frutas = ['maçã', 'banana', 'laranja'];
// Criamos um array VAZIO para guardar os hobbies
let hobbies = [];

// Definimos quantos hobbies o usuário vai digitar
let quantidadeHobbies = 3;
let contador = 0; // Conta quantos hobbies já foram digitados

console.log('Vamos cadastrar seus hobbies!');
console.log('Digite ' + quantidadeHobbies + ' hobbies, um de cada vez.');
console.log('');

// Função para perguntar um hobby por vez
function perguntarHobby() {

  // Verificamos se já coletamos todos os hobbies
  if (contador >= quantidadeHobbies) {
    // Já temos todos os hobbies, exibimos a lista
    exibirHobbies();
    return; // Para a função aqui
  }

  // Perguntamos o próximo hobby
  // contador + 1 porque começamos a contar do 0, mas mostramos do 1
  rl.question('Digite o hobby ' + (contador + 1) + ': ', function(hobby) {

    // Adicionamos o hobby digitado ao array usando o método push()
    // push() adiciona um item no FINAL do array
    hobbies.push(hobby);

    // Aumentamos o contador
    contador = contador + 1;

    // Chamamos a função novamente para perguntar o próximo hobby
    perguntarHobby();
  });
}

// Função para exibir todos os hobbies
function exibirHobbies() {
  console.log('');
  console.log('=== Seus Hobbies ===');
  console.log('Total de hobbies cadastrados: ' + hobbies.length); // length = tamanho do array

  // forEach() percorre cada item do array
  // Para cada hobby, executamos uma função
  // 'hobby' é o item atual, 'indice' é a posição (começa em 0)
  hobbies.forEach(function(hobby, indice) {
    console.log((indice + 1) + '. ' + hobby); // indice+1 para mostrar 1, 2, 3...
  });

  rl.close();
}

// Iniciamos perguntando o primeiro hobby
perguntarHobby();
