const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedir ao usuário qual tabuada ele deseja
rl.question('Qual tabuada você deseja calcular? ', (numero) => {
  
  const n = parseInt(numero);

// Verificamos se o que foi digitado é realmente um número
  if (isNaN(n)) {
    console.log("Por favor, digite um número válido.");
  } else {
    console.log(`\n--- Tabuada do ${n} (0 a 100) ---`);

// O laço FOR começando em 0 e indo até 100
    for (let i = 0; i <= 100; i++) {
      let resultado = n * i;
      
// Exibição formatada
// Usamos o .padStart para alinhar os números e ficar visualmente bonito
      let linha = `${n} x ${i.toString().padStart(2, ' ')} = ${resultado}`;
      console.log(linha);
    }
  }

  rl.close();
});