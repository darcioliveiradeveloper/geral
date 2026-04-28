const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  const gostaCafe = []

rl.question("Você gosta de café? (sim/não): " , (input) => {
  const resposta = (input);
  gostaCafe.push(resposta);

  if (gostaCafe == "sim") {
    console.log('Que ótimo! Café é uma das bebidas mais populares do mundo! ☕');
    console.log('O Brasil é o maior produtor de café do planeta!');
  } else {
    console.log('Tudo bem! Existem muitas outras bebidas deliciosas.');
    console.log('Que tal um chá ou um suco? 🍵');
  }

  rl.close();
});
