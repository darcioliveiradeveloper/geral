const estaChovendo = true;
const estaNublado = false;
const estaSol = true;
const levarGuardaChuva = estaChovendo == true || estaNublado == true;
const levarProtetor = estaSol == true;
console.log(estaChovendo);
console.log(estaNublado);
console.log(levarGuardaChuva);
console.log(levarProtetor);
//
//
//
const estaChovendo1 = true;
const estaNublado1 = false;
const estaSol1 = true;
const levarGuardaChuva1 = (estaChovendo1 || estaNublado1) && !estaSol1;
console.log("Devo levar Guard chuva testando 1 = " + levarGuardaChuva1);
//
//
//
const estaChovendo2 = false;
const estaNublado2 = true;
const estaSol2 = true;
const levarGuardaChuva2 = estaChovendo2 || (estaNublado2 && !estaSol2);
console.log("Devo levar Guard chuva testando 2 = " + levarGuardaChuva2);
//
//
//
const resposta1 = estaChovendo ? "Sim" : "Não";
const resposta2 = estaNublado ? "Sim" : "Não";
const resposta3 = estaSol ? "Sim" : "Não";
const resposta4 = levarGuardaChuva ? "Sim" : "Não";

console.log("Chovendo = " + resposta1);
console.log("Nublado = " + resposta2);
console.log("Esta Sol = " + resposta3);
console.log("Levar Guard Chuva = " + resposta4);
