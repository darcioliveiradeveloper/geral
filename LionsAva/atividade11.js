// ============================================
// ATIVIDADE PRÁTICA 11 - Calculadora de Média
// Objetivo: Reforçar o uso de vetores e operações matemáticas
// ============================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array que vai guardar os números digitados pelo usuário
let numeros = [];

// Perguntamos quantos números o usuário quer calcular a média
rl.question('Quantos números você quer calcular a média? ', function(quantidade) {

  // Convertemos para número inteiro
  let qtd = parseInt(quantidade);

  // Verificamos se é um número válido e maior que zero
  if (isNaN(qtd) || qtd <= 0) {
    console.log('Quantidade inválida! Digite um número maior que zero.');
    rl.close();
    return;
  }

  let contador = 0; // Conta quantos números já foram digitados

  // Função para pedir cada número
  function pedirNumero() {

    // Verificamos se já coletamos todos os números
    if (contador >= qtd) {
      calcularMedia(); // Vai para a função de cálculo
      return;
    }

    // Pedimos o próximo número
    rl.question('Digite o número ' + (contador + 1) + ': ', function(valor) {

      // Convertemos para número decimal (parseFloat aceita números com vírgula/ponto)
      let numero = parseFloat(valor);

      // Verificamos se é um número válido
      if (isNaN(numero)) {
        console.log('Valor inválido! Por favor, digite um número.');
        pedirNumero(); // Pede o mesmo número novamente
        return;
      }

      // Adicionamos o número ao array
      numeros.push(numero);
      contador++;

      // Chama a função novamente para pedir o próximo número
      pedirNumero();
    });
  }

  // Função para calcular e exibir a média
  function calcularMedia() {
    // ===== CÁLCULO DA MÉDIA =====
    // Passo 1: Somamos todos os números do array
    let soma = 0;

    // Percorremos o array somando cada valor
    for (let i = 0; i < numeros.length; i++) {
      soma = soma + numeros[i]; // soma acumulada
    }

    // Passo 2: Dividimos a soma pela quantidade de números
    let media = soma / numeros.length;

    // Exibimos os resultados
    console.log('');
    console.log('=== Resultado ===');
    console.log('Números digitados: ' + numeros.join(', ')); // join() une os itens com vírgula
    console.log('Quantidade de números: ' + numeros.length);
    console.log('Soma total: ' + soma);
    console.log('Média: ' + media.toFixed(2)); // toFixed(2) mostra só 2 casas decimais

    rl.close();
  }

  // Inicia pedindo o primeiro número
  pedirNumero();
});
