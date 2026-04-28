const fs = require('fs');
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

console.log("Número secreto gerado!");

function salvar(nome, tentativas) {
    let ranking = [];
    try { ranking = JSON.parse(fs.readFileSync('ranking.json')); } catch {}
    ranking.push({ nome, tentativas });
    fs.writeFileSync('ranking.json', JSON.stringify(ranking, null, 2));
}

console.log("Simulação de ranking (sem readline nesta versão simplificada)");
salvar("Jogador", 3);
