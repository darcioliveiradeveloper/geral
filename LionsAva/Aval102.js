const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let listaNumeros = [5, 10, 15, 20];

console.log('Lista disponível:');
console.log(listaNumeros);

rl.question('Digite um número para buscar na lista: ', function(input) {
  let escolha = parseInt(input);
  let encontrado = false;
  
  for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] === escolha) {
      encontrado = true;
  
    }
  }

  console.log('=== Resultado da Busca ===');
  console.log('Número buscado: ' + escolha);

  if (encontrado) {
    console.log('✓ O número ' + escolha + ' FOI ENCONTRADO na lista!');
  
  } else {
    console.log('✗ O número ' + escolha + ' NÃO está na lista.');
  }

  rl.close();
}
);