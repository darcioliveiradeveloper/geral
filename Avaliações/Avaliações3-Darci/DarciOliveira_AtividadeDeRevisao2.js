const listaTotal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let listaImpar = [];
let listaPar = [];

for (let i = 0; i < listaTotal.length; i++) {
  let numero = listaTotal[i];

  if (numero % 2 === 0) {
    listaPar.push(numero);
  } else {
    listaImpar.push(numero);
  }
}

console.log("--- RESULTADOS ---");
console.log("\nlista Completa:", listaTotal);
console.log("\nNúmeros Impares:", listaImpar);
console.log("\nNúmeros Pares:", listaPar);
console.log("");
