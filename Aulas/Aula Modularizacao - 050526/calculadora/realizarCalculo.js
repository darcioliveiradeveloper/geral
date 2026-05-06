function realizarCalculo(num1, operacao, num2) { // Função que processa os dados finais e mostra o resultado.
    let resultado; // Declara a variável do resultado.
    switch (operacao) { // Inicia a lógica matemática.
      case "+": resultado = num1 + num2; break; // Soma.
      case "-": resultado = num1 - num2; break; // Subtração.
      case "*": resultado = num1 * num2; break; // Multiplicação.
      case "/": resultado = num1 / num2; break; // Divisão.
      case "%": resultado = (num1 / 100) * num2; break; // Porcentagem.
    }
    console.log(`\n> Resultado Final: ${num1} ${operacao} ${num2} = ${resultado.toFixed(2)}`); // Exibe o resultado formatado.
    rl.close(); // Fecha a interface do terminal.
  }

module.exports = realizarCalculo; // Exporta a função para ser usada em outros arquivos.

