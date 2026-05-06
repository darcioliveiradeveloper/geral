const readline = require("readline"); // Importa o módulo 'readline' do Node.js para ler dados do terminal.

const rl = readline.createInterface({ // Cria a interface de entrada e saída.
  input: process.stdin, // Define o teclado como entrada.
  output: process.stdout, // Define o terminal como saída.
}); // A interface 'rl' é usada para interagir com o usuário, permitindo ler entradas e escrever saídas no terminal.

function iniciarCalculadora() { // Define a função principal da calculadora.
  console.log("=== CALCULADORA NODE.JS COM TRATAMENTO DE ERROS ===\n"); // Exibe o título da calculadora no terminal.

  rl.question("Digite o primeiro número: ", (valor1) => { // Faz a pergunta ao usuário para o primeiro número e aguarda a resposta.
    rl.question("Escolha a operação (+, -, *, /, %): ", (operacao) => { // Pergunta ao usuário qual operação deseja realizar e aguarda a resposta.
      rl.question("Digite o segundo número: ", (valor2) => { // Pergunta ao usuário para o segundo número e aguarda a resposta.
        
        // Convertendo as strings recebidas para números
        const num1 = parseFloat(valor1); // Tenta converter a primeira entrada para um número decimal.
        const num2 = parseFloat(valor2); // Tenta converter a segunda entrada para um número decimal.
        let resultado; // Variável para armazenar o resultado do cálculo.

        // --- TRATAMENTO DE ERROS COM TYPEOF ---
        // Verificamos se a conversão resultou em um tipo 'number' 
        // e se não é um NaN (Not a Number)
        if (typeof num1 !== 'number' || isNaN(num1) || typeof num2 !== 'number' || isNaN(num2)) { // Se qualquer um dos valores não for um número válido, exibimos uma mensagem de erro.
          console.log("\n[ERRO]: Entrada inválida. Verifique se digitou apenas números."); // Exibe mensagem de erro para entradas inválidas.
        } else { // Se ambos os números forem válidos, prosseguimos com a operação escolhida.
          
          switch (operacao) { // Inicia a lógica matemática com base na operação escolhida pelo usuário.
            case "+": // Se a operação for soma, realizamos a adição.
              resultado = num1 + num2; // Calcula a soma dos dois números.
              break; // Se a operação for subtração, realizamos a subtração.
            case "-": // Se a operação for subtração, realizamos a subtração.
              resultado = num1 - num2; // Calcula a diferença entre os dois números.
              break; // Se a operação for multiplicação, realizamos a multiplicação.
            case "*": // Se a operação for multiplicação, realizamos a multiplicação.
              resultado = num1 * num2; // Calcula o produto dos dois números.
              break; // Se a operação for divisão, realizamos a divisão, mas primeiro verificamos se o divisor não é zero para evitar erros matemáticos.
            case "/": // Se a operação for divisão, realizamos a divisão, mas primeiro verificamos se o divisor não é zero para evitar erros matemáticos.
              resultado = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero!"; // Verifica se o segundo número é diferente de zero antes de realizar a divisão. Se for zero, atribui uma mensagem de erro ao resultado.
              break; // Se a operação for porcentagem, realizamos o cálculo de porcentagem.
            case "%": // Se a operação for porcentagem, realizamos o cálculo de porcentagem.
              resultado = (num1 / 100) * num2; // Calcula a porcentagem do primeiro número em relação ao segundo número.
              break; // 
            default: // Se a operação não for reconhecida, atribuímos uma mensagem de erro ao resultado.
              resultado = "Operação inválida!"; // Atribui uma mensagem de erro ao resultado se a operação escolhida não for válida.
          } // 

          // Validação secundária do resultado usando typeof
          // Se o resultado for uma string (como a mensagem de erro da divisão por zero),
          // o typeof nos ajuda a formatar a saída de forma diferente.
          if (typeof resultado === "string") { // Se o resultado for uma string, significa que ocorreu um erro (como divisão por zero ou operação inválida), então exibimos a mensagem de erro.
            console.log(`\n> Atenção: ${resultado}`); // Exibe a mensagem de erro para o usuário.
          } else if (typeof resultado === "number") { // Se o resultado for um número, significa que o cálculo foi realizado com sucesso, então exibimos o resultado formatado.
            console.log(`\n> Resultado Final: ${resultado.toFixed(2)}`); // Exibe o resultado final formatado com duas casas decimais.
          } // Se o resultado for de outro tipo (o que não deveria acontecer), exibimos uma mensagem genérica de erro.
        } // Exibe uma mensagem de erro genérica caso o resultado seja de um tipo inesperado.

        rl.close(); // Fecha a interface do terminal após processar a entrada e exibir o resultado ou mensagem de erro.
      }); // Fecha a pergunta do segundo número.
    }); // Fecha a pergunta da operação.
  }); // Fecha a pergunta do primeiro número.
} // Define a função principal da calculadora, que contém toda a lógica de interação com o usuário e processamento dos dados.

iniciarCalculadora(); // Chama a função 'iniciarCalculadora' para iniciar o programa.

