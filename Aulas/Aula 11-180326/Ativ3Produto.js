const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

    let codProduto = "";

rl.question("Digite o Código do Produto? ", (input) => {
    codProduto = (input)
        
    switch (codProduto) {
      case "A1":
      case "a1":
      console.log("Cod: A1 - Você escolheu: Batata Chips");
      break;

      case "B2":
      case "b2":
      console.log("Cod: B2 - Você escolheu: Amendoim");
      break;

      case "C3":
      case "c3":
      console.log("Cod: C3 - Você escolheu: Biscoito de Chocolate");
      break;

      default:
      console.log("Código inválido. Tente novamente");
      break;
 }
    rl.close();
});
