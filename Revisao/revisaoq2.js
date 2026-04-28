// Questão 2 — Interseção de Arrays
// Dadas duas listas, retorne um novo array contendo apenas os elementos que existem em ambas as listas.

// Duas listas de exemplo
const lista1 = [1, 2, 3, 4, 5];
const lista2 = [4, 5, 6, 7, 8];

// Filtra os elementos de lista1 que também estão em lista2
// .filter() percorre cada elemento da lista1
// .includes() verifica se o elemento está presente em lista2
const intersecao = lista1.filter((elemento) => lista2.includes(elemento));

// Mostra a primeira lista
console.log("Lista 1: " + lista1);
// Mostra a segunda lista
console.log("Lista 2: " + lista2);
// Mostra o resultado da interseção (elementos que existem nas duas listas)
console.log("Interseção: " + intersecao);

