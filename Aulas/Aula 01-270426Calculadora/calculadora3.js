// Importa o módulo 'readline' que permite interagir com o usuário via terminal
const readline = require("readline");

// Cria a interface para ler a entrada (teclado) e exibir saídas (console)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Variável que guarda o resultado acumulado das operações sucessivas
let acumulador = 0;
// Flag (bandeira) para identificar se é a primeira vez que o usuário insere um número
let primeiraEntrada = true;

console.log("=== CALCULADORA INTERATIVA COM PORCENTAGEM ===");
console.log("Instruções: Digite os números e as operações (+, -, *, /, %).");
console.log("Digite 'sair' a qualquer momento para encerrar o programa.\n");

// Função recursiva que cria o loop da calculadora
function realizarCalculo() {
  // Se for o início do programa, pedimos o valor base
  if (primeiraEntrada) {
    rl.question("Digite o número inicial: ", (valor) => {
      // Verifica se o usuário quer encerrar
      if (valor.toLowerCase() === "sair") return rl.close();

      // Converte a entrada de texto para número decimal e guarda no acumulador
      acumulador = parseFloat(valor);
      primeiraEntrada = false; // Define que agora já temos um valor inicial
      realizarCalculo(); // Chama a função novamente para pedir a operação
    });
  } else {
    // Se já temos um valor, pedimos qual operação será aplicada
    rl.question("Operação (+, -, *, /, %) ou 'sair': ", (op) => {
      // Verifica se o usuário quer sair antes de continuar
      if (op.toLowerCase() === "sair") {
        console.log(`\nResultado Final: ${acumulador}`);
        return rl.close();
      }

      // Pede o próximo número que participará da conta
      rl.question("Próximo número: ", (proximoValor) => {
        const num = parseFloat(proximoValor);

        // Verifica se o que foi digitado é realmente um número
        if (isNaN(num)) {
          console.log("[ERRO] Por favor, digite um número válido.");
        } else {
          // Estrutura de decisão para aplicar a matemática correta
          switch (op) {
            case "+":
              acumulador += num; // Soma
              break;
            case "-":
              acumulador -= num; // Subtração
              break;
            case "*":
              acumulador *= num; // Multiplicação
              break;
            case "/":
              // Verifica divisão por zero antes de realizar o cálculo
              if (num !== 0) {
                acumulador /= num;
              } else {
                console.log("[ERRO] Divisão por zero não é permitida!");
              }
              break;
            case "%":
              // Calcula a porcentagem do acumulador atual
              // Exemplo: 100 * (20 / 100) = 20
              acumulador = acumulador * (num / 100);
              break;
            default:
              console.log(
                "[ERRO] Operação inválida. Use apenas +, -, *, / ou %.",
              );
          }
        }

        // Mostra o subtotal antes de perguntar a próxima operação
        console.log(`> Subtotal atual: ${acumulador}\n`);

        // Chamada recursiva: a função chama a si mesma para continuar o loop
        realizarCalculo();
      });
    });
  }
}

// Inicia a calculadora pela primeira vez
realizarCalculo();
