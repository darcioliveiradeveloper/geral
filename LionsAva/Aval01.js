const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu nome: ', function(nome) {
  let nomeUsuario = nome;

rl.question('Digite sua idade: ', function(idade) {
  let idadeNumero = parseInt(idade);

    console.log('');
    console.log('=== Informações do Usuário ===');
    console.log('Olá, ' + nomeUsuario + '!');
    console.log('Você tem ' + idadeNumero + ' anos.');

    rl.close();
  });
});
