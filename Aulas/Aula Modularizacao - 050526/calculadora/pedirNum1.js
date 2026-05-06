function pedirNum1() { // Define uma sub-função para pedir o primeiro número de forma repetitiva.
    rl.question("Digite o primeiro número: ", (valor1) => { // Faz a pergunta ao usuário.
      const num1 = parseFloat(valor1); // Tenta converter a entrada para número decimal.
      if (isNaN(num1)) { // Verifica se a entrada não é um número válido.
        console.log("[ERRO]: Entrada inválida. Por favor, digite apenas números."); // Exibe mensagem de erro.
        pedirNum1(); // Chama a função 'pedirNum1' novamente (recursividade) para repetir a pergunta.
      } else { // Se o número for válido, prossegue para a próxima etapa.
        pedirOperacao(num1); // Chama a função para pedir a operação, passando o num1 como parâmetro.
      }
    });
  }

module.exports = pedirNum1; // Exporta a função 'pedirNum1' para ser usada em outros arquivos do projeto.

