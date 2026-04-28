//importar readline para entrada de dados

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Definindo o prompt a ser chamado

rl.setPrompt('Digite seu Nome: ');
rl.prompt()

// Definindo uma variavel para armazenar a entrada do usuario
let entradausuario = ""

 // convertendo os dados de entrada (buffer) para string
rl.on('line' , (input) => {
    entradausuario = input.toString()

// mostrando a mensagem
    console.log("Seu nome é: " + entradausuario);
    rl.close(); //fechando console
})

