// Criando um Algoritimo para uma Tabuada

// Declarar para entrada do usuario
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Entrada do usuario para escolher a tabuada
rl.question('Qual tabuada você deseja calcular? ', (input) => {
    const numero = Number(input);

    console.log(`\n--- Tabuada do ${numero} (0 a 10) ---`);

// O laço FOR começando em 0 e indo até 10
    for (let i = 0; i <= 10; i++) {
      let resultado = numero * i;

      
      console.log(`${numero} x ${i} = ${resultado}`);
 
 rl.close();

}});