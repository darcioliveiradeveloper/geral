const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro: ', function(entrada) {
  let numero = parseInt(entrada);



  let resto = numero % 2;

  console.log('');
  console.log('=== Resultado ===');
  console.log('Número digitado: ' + numero);
  console.log('Resto da divisão por 2: ' + resto);

  if (resto === 0) {
    console.log('O número ' + numero + ' é PAR! ✓');
  } else {
    console.log('O número ' + numero + ' é ÍMPAR! ✓');
  }

  rl.close();

})
