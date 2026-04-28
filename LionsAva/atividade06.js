// ============================================
// ATIVIDADE PRÁTICA 6 - Verificação Simples (Sim/Não)
// Objetivo: Praticar conversão de strings em booleanos
// ============================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fazemos uma pergunta de sim ou não ao usuário
rl.question('Você gosta de café? (sim/não): ', function(resposta) {

  // Convertemos a resposta para letras minúsculas
  // Assim "SIM", "Sim", "sim" e "S" são tratados da mesma forma
  let respostaMinuscula = resposta.toLowerCase().trim(); // trim() remove espaços extras

  // Convertemos a resposta em booleano (verdadeiro ou falso)
  // Se a resposta for "sim" ou "s", gostaDeCafe = true
  // Caso contrário, gostaDeCafe = false
  let gostaDeCafe = (respostaMinuscula === 'sim' || respostaMinuscula === 's');

  console.log('');
  console.log('=== Resultado ===');
  console.log('Sua resposta: ' + resposta);
  console.log('Valor booleano: ' + gostaDeCafe); // Exibe true ou false

  // Respondemos de acordo com o booleano
  if (gostaDeCafe) {
    console.log('Que ótimo! Café é uma das bebidas mais populares do mundo! ☕');
    console.log('O Brasil é o maior produtor de café do planeta!');
  } else {
    console.log('Tudo bem! Existem muitas outras bebidas deliciosas.');
    console.log('Que tal um chá ou um suco? 🍵');
  }

  rl.close();
});
