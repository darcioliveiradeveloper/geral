const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  //! Arrays para armazenar os dados
  const notas1 = [];
  const notas2 = [];

    rl.question('Digite a Nota 1: ', (n1) => {
    rl.question('Digite a Nota 2: ', (n2) => {
  
    //! Convertendo strings para números e salvando nos arrays
      notas1.push(parseFloat(n1));
      notas2.push(parseFloat(n2));
  
      //! Calculando a soma e a média
      const soma = notas1[0] + notas2[0];
      const media = soma / 2;
        
      //! Exibindo o Resultado 
      console.log('--- Resultado ---');
      console.log(`Nota 1: ${notas1[0]}`);
      console.log(`Nota 2: ${notas2[0]}`);
      console.log(`Soma: ${soma}`);
      console.log(`Média: ${media}`);
  
      rl.close();
    });
  });
