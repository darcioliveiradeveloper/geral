// ============================================
// ATIVIDADE PRÁTICA 2 - Trabalhando com Booleanos
// Objetivo: Aprender sobre booleanos (true/false) e condições (if/else)
// ============================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variáveis para guardar as respostas do usuário
let nomeUsuario = '';
let idadeUsuario = 0;

// Pergunta 1: Nome
rl.question('Digite seu nome: ', function(nome) {
  nomeUsuario = nome;

  // Pergunta 2: Idade
  rl.question('Digite sua idade: ', function(idade) {
    idadeUsuario = parseInt(idade); // Converte texto para número

    // Pergunta 3: CNH
    rl.question('Você possui CNH (Carteira Nacional de Habilitação)? (sim/não): ', function(resposta) {

      // Convertemos a resposta para letras minúsculas
      // Assim "SIM", "Sim" e "sim" funcionam do mesmo jeito
      let respostaMinuscula = resposta.toLowerCase();

      // Criamos uma variável booleana (true = verdadeiro, false = falso)
      // Se a resposta for "sim", possuiCNH recebe true, senão recebe false
      let possuiCNH = (respostaMinuscula === 'sim');

      // Exibimos as informações
      console.log('');
      console.log('=== Informações do Usuário ===');
      console.log('Nome: ' + nomeUsuario);
      console.log('Idade: ' + idadeUsuario + ' anos');

      // Estrutura condicional if/else
      // Se possuiCNH for true (verdadeiro)...
      if (possuiCNH) {
        console.log('Situação CNH: Você possui CNH! Pode dirigir legalmente.');
      } else {
        // Senão (possuiCNH é false)...
        console.log('Situação CNH: Você não possui CNH. Não pode dirigir.');
      }

      rl.close();
    });
  });
});
