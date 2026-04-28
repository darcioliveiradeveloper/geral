// ============================================
// ATIVIDADE PRÁTICA 1 - Ler e Exibir Informações do Usuário
// Objetivo: Aprender a usar entrada e saída de dados no Node.js
// ============================================

// Importamos o módulo 'readline' que vem junto com o Node.js
// Ele nos permite ler o que o usuário digita no terminal
const readline = require('readline');

// Criamos uma "interface" de leitura
// process.stdin = entrada de dados (teclado)
// process.stdout = saída de dados (terminal/tela)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variável para guardar o nome do usuário
let nomeUsuario = '';

// Perguntamos o nome do usuário
// O 'question' mostra uma mensagem e espera o usuário digitar
rl.question('Digite seu nome: ', function(nome) {

  // Guardamos o nome digitado na variável
  nomeUsuario = nome;

  // Agora perguntamos a idade
  rl.question('Digite sua idade: ', function(idade) {

    // Convertemos a idade de texto (string) para número inteiro
    // Por padrão, tudo que vem do teclado é texto!
    let idadeNumero = parseInt(idade);

    // Exibimos a mensagem personalizada com as informações do usuário
    console.log(''); // linha em branco para organizar
    console.log('=== Informações do Usuário ===');
    console.log('Olá, ' + nomeUsuario + '!');
    console.log('Você tem ' + idadeNumero + ' anos.');

    // Fechamos a interface de leitura, pois não precisamos mais dela
    rl.close();
  });
});
