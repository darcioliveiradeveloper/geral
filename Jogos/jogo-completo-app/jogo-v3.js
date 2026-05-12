const fs = require('fs');
let ranking = [];
try { ranking = JSON.parse(fs.readFileSync('ranking.json')); } catch {}

ranking.push({ nome: "Jogador", tentativas: 3 });

fs.writeFileSync('ranking.json', JSON.stringify(ranking, null, 2));
console.log("Ranking salvo!");
