const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Variável para armazenar o valor acumulado do cálculo
let acumulador = 0;
let primeiraEntrada = true;

console.log("=== CALCULADORA ACUMULATIVA NODE.JS ===");
console.log("Digite os números e a operação. Digite 'sair' para encerrar.\n");

// Função principal que se chama repetidamente (Recursão) para criar o loop
function realizarCalculo() {
  // Se for a primeira vez, precisamos de um número inicial
  if (primeiraEntrada) {
    rl.question("Digite o número inicial: ", (valor) => {
      if (valor.toLowerCase() === "sair") return rl.close();

      acumulador = parseFloat(valor);
      primeiraEntrada = false;
      realizarCalculo(); // Chama a função novamente para a próxima etapa
    });
  } else {
    // Após o primeiro número, pedimos a operação
    rl.question("Operação (+, -, *, /) ou 'sair': ", (op) => {
      if (op.toLowerCase() === "sair") {
        console.log(`\nResultado Final: ${acumulador}`);
        return rl.close();
      }

      // Pedimos o próximo número para aplicar à operação
      rl.question("Próximo número: ", (proximoValor) => {
        const num = parseFloat(proximoValor);

        if (isNaN(num)) {
          console.log("[ERRO] Digite um número válido.");
        } else {
          // Aplica a operação ao acumulador existente
          switch (op) {
            case "+":
              acumulador += num;
              break;
            case "-":
              acumulador -= num;
              break;
            case "*":
              acumulador *= num;
              break;
            case "/":
              if (num !== 0) acumulador /= num;
              else console.log("[ERRO] Divisão por zero!");
              break;
            default:
              console.log("[ERRO] Operação inválida.");
          }
        }

        console.log(`> Subtotal: ${acumulador}\n`);
        realizarCalculo(); // Loop: chama a função de novo para continuar calculando
      });
    });
  }
}

// Inicia o processo
realizarCalculo();
