// ============================================
// ATIVIDADE PRÁTICA 14 - Temperatura da Água
// Objetivo: Aprender o laço de repetição WHILE
// ============================================

// Criamos a variável com a temperatura inicial da água
let temperaturaAgua = 90; // Começa em 90 graus

console.log('=== Simulação de Aquecimento de Água ===');
console.log('Temperatura inicial: ' + temperaturaAgua + ' graus');
console.log('');

// ===== LAÇO WHILE =====
// O while repete um bloco de código ENQUANTO uma condição for verdadeira
// Aqui: repete enquanto a temperatura for MENOR QUE 100
// Quando a temperatura chegar a 100, o while para
while (temperaturaAgua < 100) {

  // Exibimos a mensagem com a temperatura atual
  console.log('A temperatura está em ' + temperaturaAgua + ' graus. Aquecendo...');

  // Aumentamos a temperatura em 2 graus a cada repetição
  // temperaturaAgua += 2 é o mesmo que: temperaturaAgua = temperaturaAgua + 2
  temperaturaAgua += 2;
}

// Quando o while termina, a água chegou a 100 graus
console.log('');
console.log('A temperatura está em ' + temperaturaAgua + ' graus. Aquecendo...');
console.log('');
console.log('=== A água está fervendo! Temperatura: ' + temperaturaAgua + '°C ===');
