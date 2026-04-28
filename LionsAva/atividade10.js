// ============================================
// ATIVIDADE PRÁTICA 10 - Busca em Lista
// Objetivo: Usar condicionais, vetores e laço de repetição
// ============================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ===== LISTA PREDEFINIDA =====
// Criamos um array com números já definidos no programa
let listaPredefinida = [5, 12, 7, 42, 3, 88, 21, 64, 15, 99];

// Exibimos a lista para o usuário saber quais números existem
console.log('Lista de números disponível:');
console.log(listaPredefinida);
console.log('');

// Pedimos ao usuário para digitar um número para buscar
rl.question('Digite um número para buscar na lista: ', function(entrada) {

  // Convertemos o texto para número
  let numeroBuscado = parseInt(entrada);

  // Verificamos se é um número válido
  if (isNaN(numeroBuscado)) {
    console.log('Valor inválido! Digite um número.');
    rl.close();
    return;
  }

  // Variável para guardar se encontramos o número
  // Começa como false (não encontrado)
  let encontrado = false;

  // Variável para guardar em qual posição o número está
  let posicaoEncontrada = -1; // -1 significa "não encontrado"

  // ===== LAÇO DE REPETIÇÃO FOR =====
  // O for percorre cada posição do array
  // i começa em 0 (primeira posição do array)
  // i < listaPredefinida.length = continua enquanto não chegar ao fim
  // i++ = aumenta i em 1 a cada volta
  for (let i = 0; i < listaPredefinida.length; i++) {

    // Verificamos se o número na posição 'i' é igual ao buscado
    if (listaPredefinida[i] === numeroBuscado) {
      encontrado = true;       // Marcamos como encontrado
      posicaoEncontrada = i;   // Guardamos a posição
      break; // Para o laço, não precisa continuar procurando
    }
  }

  // Exibimos o resultado da busca
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
