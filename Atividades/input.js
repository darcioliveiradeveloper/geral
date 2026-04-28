//Exercicio Array 2
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//rl.setPrompt('Digite um número: '):
rl.prompt()
console.log("Digite as notas das provas")
let prova1 = []
let prova2 = [] 

let notas1 = ''
let notas2 = ''

rl.on('line', (input) => {

    notas1 = parseFloat(input)
    prova1.push(nota1)

rl.on('line', (input2) => {

    notas2 = parseFloat(input2)
    prova2.push(nota2)
    
    const media = (prova1[0] + prova2[0]) / 2
    console.log(media)
})})

