const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

    let notas = "";

rl.question("Digite a Nota do Aluno? ", (input) => {
    notas = parseFloat(input); 
    
    switch (true) {
      case (notas >= 90 && notas <= 100):
        console.log("Voce tirou Nota A, foi APROVADO");
        break;

      case (notas >= 80 && notas <= 89):
        console.log("Voce tirou Nota B, foi APROVADO");
        break;
    
      case (notas >= 70 && notas <= 79):
        console.log("Voce tirou Nota C, foi APROVADO");
        break;

      case (notas >= 60 && notas <= 69):
        console.log("Voce tirou Nota D, foi REPROVADO");
        break;

      case (notas >= 0 && notas <= 59):
        console.log("Voce tirou Nota E, foi REPROVADO");
        break;

      default:
        console.log("Nota Invalida, Por Favor, verifique a escrita.");
        break;
 }
    rl.close();
});
