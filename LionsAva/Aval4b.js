const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  //! Arrays para armazenar os dados
  const anonasceu = [];
  const hoje = new Date();
  

    rl.question('Digite o Ano que nasceu: ', (a1) => {
    
    //! Convertendo strings para números e salvando nos arrays
      anonasceu.push(parseInt(a1));
    
      //! Calculando a idade
  
      let idade = hoje.getFullYear() - anonasceu[0];
        
      //! Exibindo o Resultado 
      console.log('--- Resultado ---');
      console.log(`Nascimento: ${anonasceu[0]}`);
      console.log("sua idade é: " + idade , " Anos");

      rl.close();
    });
