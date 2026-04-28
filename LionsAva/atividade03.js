// ============================================
// ATIVIDADE PRÁTICA 3 - Manipulação Básica de Objetos
// Objetivo: Aprender a criar e usar objetos em JavaScript
// ============================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta 1: Nome
rl.question('Digite seu nome: ', function(nome) {

  // Pergunta 2: Idade
  rl.question('Digite sua idade: ', function(idade) {

    // Pergunta 3: CNH
    rl.question('Você possui CNH? (sim/não): ', function(resposta) {

      // Convertemos a resposta para booleano (true ou false)
      let possuiCNH = (resposta.toLowerCase() === 'sim');

      // ===== OBJETO =====
      // Um objeto é como uma "ficha" que agrupa várias informações relacionadas
      // Cada informação é chamada de "propriedade" (chave: valor)
      let usuario = {
        nome: nome,              // propriedade 'nome' recebe o valor digitado
        idade: parseInt(idade),  // propriedade 'idade' recebe a idade como número
        possuiCNH: possuiCNH     // propriedade 'possuiCNH' recebe true ou false
      };

      // Exibimos as informações acessando as propriedades do objeto com ponto (.)
      console.log('');
      console.log('=== Ficha do Usuário ===');
      console.log('Nome: ' + usuario.nome);          // acessa a propriedade 'nome'
      console.log('Idade: ' + usuario.idade + ' anos'); // acessa a propriedade 'idade'

      // Usamos um if para exibir texto amigável ao invés de true/false
      if (usuario.possuiCNH) {
        console.log('Possui CNH: Sim');
      } else {
        console.log('Possui CNH: Não');
      }

      // Também podemos ver o objeto inteiro de uma vez com console.log
      console.log('');
      console.log('Objeto completo:', usuario);

      rl.close();
    });
  });
});
