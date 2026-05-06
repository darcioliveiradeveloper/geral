function pedirNum2(num1, operacao) { // Define uma sub-função para pedir o segundo número.
    rl.question("Digite o segundo número: ", (valor2) => { // Pergunta o segundo valor.
      const num2 = parseFloat(valor2); // Tenta converter para número decimal.
      if (isNaN(num2)) { // Verifica se a entrada não é um número válido.
        console.log("[ERRO]: Entrada inválida. Por favor, digite apenas números."); // Exibe erro.
        pedirNum2(num1, operacao); // Repete a pergunta do segundo número em caso de erro.
      } else if (operacao === "/" && num2 === 0) { // Verifica especificamente se o usuário tenta dividir por zero.
        console.log("[ERRO]: Divisão por zero não é permitida. Digite outro número."); // Exibe erro matemático.
        pedirNum2(num1, operacao); // Pede o segundo número novamente para evitar o erro matemático.
      } else { // Se tudo estiver correto, realiza o cálculo.
        realizarCalculo(num1, operacao, num2); // Chama a função final de processamento.
      }
    });
  }

module.exports = pedirNum2; // Exporta a função para ser usada em outros arquivos do projeto.

