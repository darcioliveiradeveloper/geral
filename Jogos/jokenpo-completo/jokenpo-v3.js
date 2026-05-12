const fs=require('fs');
let r=[];
try{r=JSON.parse(fs.readFileSync('ranking.json'));}catch{}
r.push({nome:"Jogador",pontos:5});
fs.writeFileSync('ranking.json',JSON.stringify(r,null,2));
console.log("Ranking salvo");