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

rl.question("Voce possui CNH?: " , (input2) => { // CNH
    const CNH = (input2);
    dadosUsuario.push(CNH);


// Exibindo no Terminal    
    if(CNH =="sim"){
        console.log(`Seu nome é: ${nome} , e sua idade é: ${idade} , e voce esta apto a DIRIGIR`);// Pode Dirigir

    }else{
        console.log(`Seu nome é: ${nome} , e sua idade é: ${idade} , e voce NAO PODE DIRIGIR`);// Nao pode Dirigir
}

// Fechando o console    
    rl.close();

})
})
})