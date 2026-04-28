// Questão 1 — Segundo Maior Número
// Dada uma lista de números, encontre o segundo maior valor sem usar sort.

const numeros = [10, 5, 8, 20, 15];

let maior = -1000; // Começamos com um valor muito baixo
let segundoMaior = -1000;

for (let i = 0; i < numeros.length; i++) {
  let numeroAtual = numeros[i];

  if (numeroAtual > maior) {
    // Primeiro, guardamos o antigo maior no segundo lugar
    segundoMaior = maior;
    // Depois, atualizamos o campeão
    maior = numeroAtual;
  } else if (numeroAtual > segundoMaior && numeroAtual < maior) {
    // Se não é o maior, mas é maior que o vice, ele vira o novo vice
    segundoMaior = numeroAtual;
  }
}
console.log("Lista de números: " + numeros);
console.log("O maior é: " + maior);
console.log("O segundo maior é: " + segundoMaior);


//maior