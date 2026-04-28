const readline=require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const opcoes =["pedra","papel","tesoura"];
let p = 0;
let c = 0;

console.log("1 Pedra | 2 Papel | 3 Tesoura | Q sair");

process.stdin.on('keypress',(str,key)=>{
 if(key.name==='q') {console.log("Placar Final:",p,"x",c);process.exit();}
 let j;
 if(str==='1')j="pedra";
 if(str==='2')j="papel";
 if(str==='3')j="tesoura";
 if(!j)return;

 let cpu = opcoes[Math.floor(Math.random()*3)];
 console.log("\nVocê:",j,"CPU:",cpu);
 
 if(j===cpu) console.log("Empate");
 else if((j==="pedra"&&cpu==="tesoura")||(j==="papel"&&cpu==="pedra")||(j==="tesoura"&&cpu==="papel")){p++;console.log("Ganhou");}
 else {c++;console.log("Perdeu");}
 console.log("Placar:",p,"x",c);
});



//{console.log(p,"x",c)