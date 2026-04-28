const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const usuarioCorreto = "admin";
const senhaCorreta = "1234";

// Inicia a sequência de perguntas
rl.question('Digite o usuário: ', (usuario) => {
    rl.question('Digite a senha: ', (senha) => {

        if (usuario === usuarioCorreto && senha === senhaCorreta) {
            console.log("Acesso liberado!");
        } 
        else if (usuario === usuarioCorreto && senha !== senhaCorreta) {
            console.log("Usuário correto, mas a senha está errada.");
        } 
        else if (usuario !== usuarioCorreto && senha === senhaCorreta) {
            console.log("Usuário errado, mas a senha está correta.");
        } 
        else {
            console.log("Ambos os dados estão incorretos.");
        }

        rl.close();
    });
});