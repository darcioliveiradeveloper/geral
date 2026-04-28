const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

    let genero = "";

rl.question("Digite o gênero do filme? (Ex: ação, terror, comédia, animação)? ", (input) => {
    genero = (input); 
    genero = genero.toLowerCase();

    switch (genero) {
    case "ação":
    case "acao":
    console.log("Filme de Ação: Sala 1.");
    break;
     
    case "comédia":
    case "comedia":
    console.log("Filme de Comédia: Sala 2.");
    break;
  
    case "terror":
    console.log("Filme de Terror: Sala 3.");
    break;
     
    case "animação":
    case "animacao":  
    console.log("Filme de Animação: Sala 4.");
    break;

    default:
    console.log("Gênero não encontrado. Por favor, verifique a escrita ou escolha outra opção.");
    break;
 }
    rl.close();
});
