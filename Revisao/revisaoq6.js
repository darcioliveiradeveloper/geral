// Questão 6 — Agrupar Pares e Ímpares
// Dada uma lista de números, retorne um objeto com duas listas: pares e ímpares.

// Lista de números para testar
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Função que separa os números em pares e ímpares
function agruparParesImpares(lista) {
    // Cria um objeto com duas listas vazias
    const resultado = {
        pares: [],    // Vai guardar os números pares
        impares: []   // Vai guardar os números ímpares
    };

    // Percorre cada número da lista
    for (let numero of lista) {
        // Se o número for par (resto da divisão por 2 é zero)
        if (numero % 2 === 0) {
            resultado.pares.push(numero); // Adiciona em pares
        } else {
            resultado.impares.push(numero); // Senão, adiciona em ímpares
        }
    }

    // Retorna o objeto com as duas listas preenchidas
    return resultado;
}

// Chama a função e guarda o resultado
const agrupados = agruparParesImpares(numeros);

// Mostra a lista original
console.log("Números: " + numeros);
// Mostra a lista de pares
console.log("Pares: " + agrupados.pares);
// Mostra a lista de ímpares
console.log("Ímpares: " + agrupados.impares);


//pares e impares