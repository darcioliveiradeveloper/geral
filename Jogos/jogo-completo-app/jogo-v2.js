const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

function jogar() {
    rl.question("Palpite: ", (p) => {
        tentativas++;
        let n = parseInt(p);

        if (n === numeroSecreto) {
            console.log("Acertou em " + tentativas);
            rl.close();
        } else {
            console.log(n < numeroSecreto ? "Maior" : "Menor");
            jogar();
        }
    });
}
jogar();
