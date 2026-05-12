// V4 COMPLETO (Terminal PRO)
const readline = require('readline');
const chalk = require('chalk');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

console.log(chalk.blue("🎮 JOGO PRO V4"));
console.log("Digite números e ENTER:");

let input = "";

process.stdin.on('keypress', (str, key) => {
    if (key.name === 'return') {
        let n = parseInt(input);
        tentativas++;

        if (n === numeroSecreto) {
            console.log(chalk.green("\nAcertou em " + tentativas));
            process.exit();
        } else {
            console.log(n < numeroSecreto ? "Maior" : "Menor");
            input = "";
        }
    } else if (!isNaN(str)) {
        input += str;
        process.stdout.write(str);
    }
});
