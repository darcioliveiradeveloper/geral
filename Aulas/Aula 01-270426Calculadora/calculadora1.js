const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function iniciarCalculadora() {
  console.log("=== CALCULADORA NODE.JS COM TRATAMENTO DE ERROS ===\n");

  rl.question("Digite o primeiro número: ", (valor1) => {
    rl.question("Escolha a operação (+, -, *, /, %): ", (operacao) => {
      rl.question("Digite o segundo número: ", (valor2) => {
        
        // Convertendo as strings recebidas para números
        const num1 = parseFloat(valor1);
        const num2 = parseFloat(valor2);
        let resultado;

        // --- TRATAMENTO DE ERROS COM TYPEOF ---
        // Verificamos se a conversão resultou em um tipo 'number' 
        // e se não é um NaN (Not a Number)
        if (typeof num1 !== 'number' || isNaN(num1) || typeof num2 !== 'number' || isNaN(num2)) {
          console.log("\n[ERRO]: Entrada inválida. Verifique se digitou apenas números.");
        } else {
          
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
              resultado = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero!";
              break;
            case "%":
              resultado = (num1 / 100) * num2;
              break;
            default:
              resultado = "Operação inválida!";
          }

          // Validação secundária do resultado usando typeof
          // Se o resultado for uma string (como a mensagem de erro da divisão por zero),
          // o typeof nos ajuda a formatar a saída de forma diferente.
          if (typeof resultado === "string") {
            console.log(`\n> Atenção: ${resultado}`);
          } else if (typeof resultado === "number") {
            console.log(`\n> Resultado Final: ${resultado.toFixed(2)}`);
          }
        }

        rl.close();
      });
    });
  });
}

iniciarCalculadora();