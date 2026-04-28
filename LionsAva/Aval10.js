const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let listaPredefinida = [5, 10, 15, 20, 25, 30];

console.log('Lista de números disponível:');
console.log(listaPredefinida);
console.log('');

rl.question('Digite um número para buscar na lista: ', function(entrada) {
  let numeroBuscado = parseInt(entrada);
  let encontrado = false;
  let posicaoEncontrada = -1; 

  for (let i = 0; i < listaPredefinida.length; i++) {

    if (listaPredefinida[i] === numeroBuscado) {
      encontrado = true; 
      posicaoEncontrada = i; 
      break; 
    }
  }

  console.log('');
  console.log('=== Resultado da Busca ===');
  console.log('Número buscado: ' + numeroBuscado);

  if (encontrado) {
    console.log('✓ O número ' + numeroBuscado + ' FOI ENCONTRADO na lista!');
    console.log('Posição na lista: ' + posicaoEncontrada + ' (contando a partir do 0)');
  } else {
    console.log('✗ O número ' + numeroBuscado + ' NÃO está na lista.');
  }

  rl.close();
});
