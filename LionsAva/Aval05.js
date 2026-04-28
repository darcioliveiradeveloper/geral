const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite sua idade: ', function(idade) {
  let idadeNumero = parseInt(idade);
  let ehMaiorDeIdade = (idadeNumero >= 18);

  console.log('');
  console.log('=== Verificação de Maioridade ===');
  console.log('Idade informada: ' + idadeNumero + ' anos');

  if (ehMaiorDeIdade) {
    console.log('Resultado: Você é MAIOR de idade! ✓');
    console.log('Você pode votar, dirigir e praticar outros atos civis.');
  } else {
    console.log('Resultado: Você é MENOR de idade.');

    let anosFaltando = 18 - idadeNumero;
    console.log('Faltam ' + anosFaltando + ' ano(s) para você atingir a maioridade.');
  }

  rl.close();
});
