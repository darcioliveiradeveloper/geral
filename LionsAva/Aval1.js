// Declarando comando para entrada de dados

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Criando Entrada do usuario
const dadosUsuario = []; // Array para armazenar dados

rl.question("Digite seu Nome: " , (input0) => { // Nome
 const nome = (input0);
 dadosUsuario.push(nome);

 rl.question("Digite sua Idade: " , (input1) => { // Idade
    const idade = (input1);
    dadosUsuario.push(idade);

// Exibindo no Terminal

    console.log("Seu nome é: " + dadosUsuario[0] , "\nSua Idade é: " + dadosUsuario[1]); 
    console.log(`Seu nome é: ${nome} , e sua idade é: ${idade}`);

// Fechando o console    
    rl.close();

})
})
