const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const frase = [];

rl.question('Digite uma frase: ', (frase) => {
  

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
