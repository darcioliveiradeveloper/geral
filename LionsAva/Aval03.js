const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu nome: ', function(nome) {

rl.question('Digite sua idade: ', function(idade) {

rl.question('Você possui CNH? (sim/não): ', function(resposta) {

let possuiCNH = (resposta.toLowerCase() === 'sim');

      let usuario = {
        nome: nome,              
        idade: parseInt(idade),  
        possuiCNH: possuiCNH    
      };

      console.log('');
      console.log('=== Ficha do Usuário ===');
      console.log('Nome: ' + usuario.nome); 
      console.log('Idade: ' + usuario.idade + ' anos');

      if (usuario.possuiCNH) {
        console.log('Possui CNH: Sim');
      } else {
        console.log('Possui CNH: Não');
      }

      console.log('');
      console.log('Objeto completo:', usuario);

      rl.close();
    });
  });
});
