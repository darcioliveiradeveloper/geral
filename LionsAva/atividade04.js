// ============================================
// ATIVIDADE PRÁTICA 4 - Cálculo de Idade
// Objetivo: Aprender operações matemáticas com números
// ============================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pegamos o ano atual usando o objeto Date do JavaScript
// new Date() cria uma data com o momento atual
// getFullYear() pega só o ano dessa data
let anoAtual = new Date().getFullYear();

// Exibimos o ano atual para o usuário saber
console.log('Ano atual: ' + anoAtual);

// Perguntamos o ano de nascimento
rl.question('Digite seu ano de nascimento: ', function(anoNascimento) {

  // Convertemos o ano digitado de texto para número
  let anoNascimentoNumero = parseInt(anoNascimento);

  // Calculamos a idade fazendo uma subtração simples
  // Exemplo: 2024 - 1990 = 34 anos
  let idade = anoAtual - anoNascimentoNumero;

  // Verificamos se o ano faz sentido (não pode ser no futuro ou muito antigo)
  if (anoNascimentoNumero > anoAtual) {
    console.log('Ano de nascimento inválido! Não pode ser no futuro.');
  } else if (idade > 130) {
    console.log('Ano de nascimento inválido! Valor muito antigo.');
  } else {
    // Exibimos o resultado
    console.log('');
    console.log('=== Resultado ===');
    console.log('Ano de nascimento: ' + anoNascimentoNumero);
    console.log('Ano atual: ' + anoAtual);
    console.log('Sua idade é: ' + idade + ' anos');
  }

  rl.close();
});
