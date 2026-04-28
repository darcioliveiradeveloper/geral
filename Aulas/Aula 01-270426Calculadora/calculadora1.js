// Importa o módulo 'readline' para ler dados do terminal (standard input)
const readline = require("readline");

// Cria a interface de leitura e escrita para interagir com o usuário
const rl = readline.createInterface({
  input: process.stdin, // Entrada de dados (o que você digita)
  output: process.stdout, // Saída de dados (o que o programa exibe)
});

// Função principal que organiza as perguntas
function iniciarCalculadora() {
  console.log("=== CALCULADORA NODE.JS ===\n");

  // Pergunta 1: Primeiro número
  rl.question("Digite o primeiro número: ", (valor1) => {
    // Pergunta 2: Operação
    rl.question("Escolha a operação (+, -, *, /): ", (operacao) => {
      // Pergunta 3: Segundo número
      rl.question("Digite o segundo número: ", (valor2) => {
        // Converte as entradas de string para números decimais
        const num1 = parseFloat(valor1);
        const num2 = parseFloat(valor2);
        let resultado;

        // Validação: Verifica se as entradas são números válidos
        if (isNaN(num1) || isNaN(num2)) {
          console.log("\n[ERRO]: Você deve inserir números válidos!");
        } else {
          // Lógica de cálculo baseada no símbolo da operação
          switch (operacao) {
            case "+":
              resultado = num1 + num2;
              break;
            case "-":
              resultado = num1 - num2;
              break;
            case "*":
              resultado = num1 * num2;
              break;
            case "/":
              // Validação: Impede a divisão por zero
              if (num2 !== 0) {
                resultado = num1 / num2;
              } else {
                resultado = "Erro: Divisão por zero!";
              }
              break;
            default:
              resultado = "Operação inválida!";
          }

          // Exibe o resultado final no terminal
          console.log(
            `\n> Resultado: ${num1} ${operacao} ${num2} = ${resultado}`,
          );
        }

        // Fecha a interface do terminal para o programa encerrar
        rl.close();
      });
    });
  });
}

// Executa a função
iniciarCalculadora();
