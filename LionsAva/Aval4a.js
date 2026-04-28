const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  //! Arrays para armazenar os dados
  const anonasceu = [];
  const anoatual = [];
    

    rl.question('Digite o Ano que nasceu: ', (a1) => {
    rl.question('Digite o Ano Atual: ', (a2) => {
  
    //! Convertendo strings para números e salvando nos arrays
      anonasceu.push(parseInt(a1));
      anoatual.push(parseInt(a2));
  
      //! Calculando a Idade
      const idadeAtual = anoatual[0] - anonasceu[0];
      
        
      //! Exibindo o Resultado 
      console.log('--- Resultado ---');
      console.log(`Nascimento: ${anonasceu[0]}`);
      console.log(`Ano Atual: ${anoatual[0]}`);
      console.log(`Idade Atual: ${idadeAtual} Anos`);
  

      rl.close();
    });
  });
