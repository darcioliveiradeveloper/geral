const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numero = []

rl.question('Digite um número inteiro: ', (input) => {
  const escolha = parseInt(input);
  numero.push(escolha);
  
  let resto = numero % 2;

  if (resto == 0) {
    console.log("Seu numero é Par\n");
  } else {
    console.log("Seu numero é Impar\n");
  }

  rl.close();

})
