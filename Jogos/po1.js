const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const opcoes = ["pedra","papel","tesoura"];
const cpu = opcoes[Math.floor(Math.random()*3)];

rl.question("Opções: pedra, papel, tesoura - Escolha: ", (escolha) => {
 if(escolha===cpu) console.log("Empate");
 else if((escolha==="pedra"&&cpu==="tesoura")||(escolha==="papel"&&cpu==="pedra")||(escolha==="tesoura"&&cpu==="papel"))
 console.log("Venceu");
 else console.log("Perdeu");
 rl.close();
});