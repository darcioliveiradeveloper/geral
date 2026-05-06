const readline = require("readline"); // Importa o módulo 'readline' do Node.js para ler dados do terminal.

const rl = readline.createInterface({ // Cria a interface de entrada e saída.
  input: process.stdin, // Define o teclado como entrada.
  output: process.stdout, // Define o terminal como saída.
});

function iniciarCalculadora() { // Define a função principal da calculadora.
  console.log("=== CALCULADORA NODE.JS COM REPETIÇÃO EM CASO DE ERRO ===\n"); // Exibe o título.

  

  pedirNum1(); // Inicia o ciclo chamando a primeira pergunta.
} // Fim da função iniciarCalculadora.

iniciarCalculadora(); // Executa o programa.

