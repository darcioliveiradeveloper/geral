const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma frase: ', (frase) => {
  console.log(`A sua frase é "${frase}" tem ${frase.length} letras.`);
  rl.close();
});