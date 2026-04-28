const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

rl.question('Quantos números você quer calcular a média? ', function(quantidade) {

  let qtd = parseInt(quantidade);

  let contador = 0;

  function pedirNumero() {

    if (contador >= qtd) {
      calcularMedia();
      return;
    }

    rl.question('Digite o número ' + (contador + 1) + ': ', function(valor) {
      let numero = parseFloat(valor);
      numeros.push(numero);
      contador++;

      pedirNumero();
    });
  }

  function calcularMedia() {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma = soma + numeros[i]; 
    }

    let media = soma / numeros.length;

    console.log('');
    console.log('=== Resultado ===');
    console.log('Números digitados: ' + numeros.join(', '));
    console.log('Quantidade de números: ' + numeros.length);
    console.log('Soma total: ' + soma);
    console.log('Média: ' + media.toFixed(2));

    rl.close();
  }

  pedirNumero();
});
