const readline=require('readline');
const rl=readline.createInterface({input:process.stdin,output:process.stdout});
const op=["pedra","papel","tesoura"];
let p=0,c=0;
function jogo(){
 rl.question("Escolha ou sair: ",j=>{
  if(j==="sair"){console.log(p,"x",c);rl.close();return;}
  let cpu=op[Math.floor(Math.random()*3)];
  if(j===cpu) console.log("Empate");
  else if((j==="pedra"&&cpu==="tesoura")||(j==="papel"&&cpu==="pedra")||(j==="tesoura"&&cpu==="papel")){p++;console.log("Ganhou");}
  else {c++;console.log("Perdeu");}
  console.log(p,"x",c);
  jogo();
 });
}
jogo();