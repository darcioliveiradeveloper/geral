const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  const nota1 = [];
  const nota2 = [];
  const nota3 = [];
  const nota4 = [];

    rl.question('Digite a Nota 1: ', (n1) => {
    rl.question('Digite a Nota 2: ', (n2) => {
    rl.question('Digite a Nota 3: ', (n3) => {
    rl.question('Digite a Nota 4: ', (n4) => {
  
      nota1.push(parseFloat(n1));
      nota2.push(parseFloat(n2));
      nota3.push(parseFloat(n3));
      nota4.push(parseFloat(n4));

      const soma = nota1[0] + nota2[0] + nota3[0] + nota4[0];
      const media = soma / 4;
        
    
      console.log('--- Resultado ---');
      console.log(`Nota 1: ${nota1[0]}`);
      console.log(`Nota 2: ${nota2[0]}`);
      console.log(`Nota 3: ${nota3[0]}`);
      console.log(`Nota 4: ${nota4[0]}`);
      console.log(`Soma: ${soma}`);
      console.log(`Média: ${media}`);
  
      rl.close();

});
});
});
});