// ============================================
// ATIVIDADE PRÁTICA 7 - Par ou Ímpar
// Objetivo: Usar o operador de módulo (%) para verificar par/ímpar
// ============================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedimos ao usuário para digitar um número
rl.question('Digite um número inteiro: ', function(entrada) {

  // Convertemos o texto digitado para número inteiro
  let numero = parseInt(entrada);

  // Verificamos se é um número válido
  if (isNaN(numero)) {
    console.log('Valor inválido! Por favor, digite um número.');
    rl.close();
    return;
  }

  // ===== OPERADOR DE MÓDULO (%) =====
  // O operador % retorna o RESTO da divisão
  // Exemplos:
  //   10 % 2 = 0  (10 dividido por 2 = 5, resto 0) → PAR
  //    7 % 2 = 1  ( 7 dividido por 2 = 3, resto 1) → ÍMPAR
  //   15 % 2 = 1  (15 dividido por 2 = 7, resto 1) → ÍMPAR
  //    4 % 2 = 0  ( 4 dividido por 2 = 2, resto 0) → PAR

  let resto = numero % 2; // Calculamos o resto da divisão por 2

  console.log('');
  console.log('=== Resultado ===');
  console.log('Número digitado: ' + numero);
  console.log('Resto da divisão por 2: ' + resto);

  // Se o resto for 0, o número é PAR
  // Se o resto for 1 (ou -1 para negativos), o número é ÍMPAR
  if (resto === 0) {
    console.log('O número ' + numero + ' é PAR! ✓');
  } else {
    console.log('O número ' + numero + ' é ÍMPAR! ✓');
  }

  rl.close();
});
