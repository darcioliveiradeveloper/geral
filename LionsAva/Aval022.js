const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nomeUsuario = '';
let idadeUsuario = 0;

rl.question('Digite seu nome: ', function(nome) {
  nomeUsuario = nome;

rl.question('Digite sua idade: ', function(idade) {
  idadeUsuario = parseInt(idade);

rl.question('Você possui CNH (Carteira Nacional de Habilitação)? (sim/não): ', function(resposta) {
    let respostaMinuscula = resposta.toLowerCase();
    let possuiCNH = (respostaMinuscula === 'sim');

      console.log('');
      console.log('=== Informações do Usuário ===');
      console.log('Nome: ' + nomeUsuario);
      console.log('Idade: ' + idadeUsuario + ' anos');

      if (possuiCNH) {
        console.log('Situação CNH: Você possui CNH! Pode dirigir legalmente.');
      } else {
        console.log('Situação CNH: Você não possui CNH. Não pode dirigir.');
      }

      rl.close();
    });
  });
});
