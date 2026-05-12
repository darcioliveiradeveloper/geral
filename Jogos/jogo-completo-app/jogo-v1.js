const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const numeroSecreto = Math.floor(Math.random() * 5) + 1;

rl.question("Adivinhe (1 a 5): ", (palpite) => {
    if (parseInt(palpite) === numeroSecreto) {
        console.log("Acertou!");
    } else {
        console.log("Errou! Era " + numeroSecreto);
    }
    rl.close();
});
