const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let anoAtual = new Date().getFullYear();

console.log('Ano atual: ' + anoAtual);

rl.question('Digite seu ano de nascimento: ', function(anoNascimento) {

  let anoNascimentoNumero = parseInt(anoNascimento);
  let idade = anoAtual - anoNascimentoNumero;

  if (anoNascimentoNumero > anoAtual) {
    console.log('Ano de nascimento inválido! Não pode ser no futuro.');
  } else if (idade > 130) {
    console.log('Ano de nascimento inválido! Valor muito antigo.');
  } else {
    console.log('');
    console.log('=== Resultado ===');
    console.log('Ano de nascimento: ' + anoNascimentoNumero);
    console.log('Ano atual: ' + anoAtual);
    console.log('Sua idade é: ' + idade + ' anos');
  }

  rl.close();
});
