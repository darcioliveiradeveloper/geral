// ============================================
// ATIVIDADE PRÁTICA 5 - Verificador de Maioridade
// Objetivo: Usar números e booleanos para verificações lógicas
// ============================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Perguntamos a idade do usuário
rl.question('Digite sua idade: ', function(idade) {

  // Convertemos a idade de texto para número
  let idadeNumero = parseInt(idade);

  // Verificamos se o valor digitado é realmente um número
  // isNaN = "is Not a Number" = "não é um número"
  if (isNaN(idadeNumero)) {
    console.log('Por favor, digite um número válido!');
    rl.close();
    return; // Para a execução aqui
  }

  // Criamos uma variável booleana para guardar o resultado da verificação
  // O operador >= significa "maior ou igual a"
  let ehMaiorDeIdade = (idadeNumero >= 18);

  // Exibimos o resultado
  console.log('');
  console.log('=== Verificação de Maioridade ===');
  console.log('Idade informada: ' + idadeNumero + ' anos');

  // Verificamos com if/else e exibimos a mensagem correspondente
  if (ehMaiorDeIdade) {
    // Se ehMaiorDeIdade for true (verdadeiro)
    console.log('Resultado: Você é MAIOR de idade! ✓');
    console.log('Você pode votar, dirigir e praticar outros atos civis.');
  } else {
    // Se ehMaiorDeIdade for false (falso)
    console.log('Resultado: Você é MENOR de idade.');

    // Calculamos quantos anos faltam para os 18
    let anosFaltando = 18 - idadeNumero;
    console.log('Faltam ' + anosFaltando + ' ano(s) para você atingir a maioridade.');
  }

  rl.close();
});
