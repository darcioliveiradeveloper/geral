const readline = require("readline"); // Importa o módulo 'readline' do Node.js para ler dados do terminal.

const rl = readline.createInterface({ // Cria a interface de entrada e saída.
  input: process.stdin, // Define o teclado como entrada.
  output: process.stdout, // Define o terminal como saída.
});

function iniciarCalculadora() { // Define a função principal da calculadora.
  console.log("=== CALCULADORA NODE.JS COM REPETIÇÃO EM CASO DE ERRO ===\n"); // Exibe o título.

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

  function pedirOperacao(num1) { // Define uma sub-função para pedir a operação.
    rl.question("Escolha a operação (+, -, *, /, %): ", (operacao) => { // Pergunta qual operação o usuário deseja.
      const operacoesValidas = ["+", "-", "*", "/", "%"]; // Lista de operações permitidas.
      if (!operacoesValidas.includes(operacao)) { // Verifica se o que foi digitado não está na lista.
        console.log("[ERRO]: Operação inválida! Escolha entre +, -, *, / ou %."); // Exibe mensagem de erro.
        pedirOperacao(num1); // Repete a pergunta da operação se o usuário errar.
      } else { // Se a operação for válida, prossegue.
        pedirNum2(num1, operacao); // Chama a função para pedir o segundo número.
      }
    });
  }

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

  pedirNum1(); // Inicia o ciclo chamando a primeira pergunta.
} // Fim da função iniciarCalculadora.

iniciarCalculadora(); // Executa o programa.


