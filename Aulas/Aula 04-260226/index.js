//! Declaração de variaveis

//! 1 - const // Tipo string - NAO PODE SER ALTERADA
//! 2 - let // Tipo number - PODE SER MUDADA
//! 3 - var // Tipo - PODE SER MUDADA

let idade = 18; // Tipo da variavel é number (integer)
let nota = 8.5; // Tipo da variavel é number (float)
nota = 10;

const nome = "darci"; // Tipo da variavel é string

// console.log() // serve para imprimir variaveis ou valores no terminal
console.log(nome);
console.log(idade);
console.log(nota);

console.log(nome + " tem " + idade);

//! Calculos em Java Script
const nota1 = 7;
const nota2 = 8;
const nota3 = 9;

// + soma
// - subtração
// * multiplicação
// / divisão

const somaNotas = nota1 + nota2 + nota3;

const media = somaNotas / 3;

console.log("O Total das Notas é = " + somaNotas);
console.log("A Media das Notas é = " + media);

//! 2 - Abaixo exemplo de calculo de preço total de leite (usando multiplicação e subtração)
let precoLeite = 7.5;
let quantidadeLeite = 3;

const precoTotal = precoLeite * quantidadeLeite;

console.log("O preço total de minha compra de leite é " + precoTotal);

const saldoEmConta = 100;

const saldoFinal = saldoEmConta - precoTotal;

console.log("O SALDO ATUAL É = " + saldoEmConta);

console.log(
  `O saldo final da minha conta depois de comprar leite é ${saldoEmConta}`,
);

const refri = 5;
const quant = 10;
const venda = refri * quant;
const saldoInic = 100;
const saldoFin = saldoInic - venda;
const lucros = saldoFin / 2;
console.log(" ------------------ ");

console.log("O preço do Refri é = R$ " + refri);
console.log("A quantidade de compra foi = " + quant);
console.log("O valor de venda foi = R$ " + venda);
console.log("Meu saldo é de = R$ " + saldoInic);
console.log("Meu saldo apos a compra é de = R$ " + saldoFin);
console.log("Meu lucro foi de = R$ " + lucros);
