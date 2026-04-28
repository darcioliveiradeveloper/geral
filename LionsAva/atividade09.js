// ============================================
// ATIVIDADE PRÁTICA 9 - Contador de Caracteres
// Objetivo: Aprender sobre strings e a propriedade length
// ============================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedimos ao usuário para digitar uma frase
rl.question('Digite uma frase: ', function(frase) {

  // ===== PROPRIEDADE LENGTH =====
  // Toda string (texto) tem a propriedade .length
  // ela retorna o número de caracteres (letras, números, espaços, etc.)
  let totalCaracteres = frase.length;

  // Contamos só as letras (sem espaços)
  // replace() substitui partes do texto
  // A expressão / /g significa "todos os espaços"
  let semEspacos = frase.replace(/ /g, ''); // Remove todos os espaços
  let totalSemEspacos = semEspacos.length;

  // Contamos os espaços subtraindo
  let totalEspacos = totalCaracteres - totalSemEspacos;

  // Convertemos para letras maiúsculas com toUpperCase()
  let fraseEmMaiusculas = frase.toUpperCase();

  // Convertemos para letras minúsculas com toLowerCase()
  let fraseEmMinusculas = frase.toLowerCase();

  // Exibimos os resultados
  console.log('');
  console.log('=== Análise da Frase ===');
  console.log('Frase original: "' + frase + '"');
  console.log('Total de caracteres (com espaços): ' + totalCaracteres);
  console.log('Total de caracteres (sem espaços): ' + totalSemEspacos);
  console.log('Total de espaços: ' + totalEspacos);
  console.log('Em maiúsculas: ' + fraseEmMaiusculas);
  console.log('Em minúsculas: ' + fraseEmMinusculas);

  rl.close();
});
