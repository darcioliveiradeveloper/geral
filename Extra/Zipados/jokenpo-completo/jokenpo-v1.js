const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const opcoes = ["pedra","papel","tesoura"];
const cpu = opcoes[Math.floor(Math.random()*3)];

rl.question("Escolha: ", (j) => {
 if(j===cpu) console.log("Empate");
 else if((j==="pedra"&&cpu==="tesoura")||(j==="papel"&&cpu==="pedra")||(j==="tesoura"&&cpu==="papel"))
 console.log("Venceu");
 else console.log("Perdeu");
 rl.close();
});