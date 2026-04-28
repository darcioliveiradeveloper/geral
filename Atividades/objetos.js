//Criando um obejto

const { disconnect } = require ("cluster")

let carro = {
    fabricante: "ford",
    modelo : "ka",
    ano: 2009
}
console.log(carro.ano)

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
})



