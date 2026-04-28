// Questão 4 — Contar Frequência de Números
// Dada uma lista de números, retorne um objeto com a contagem de cada número.

const numeros = [1, 2, 2, 3, 3, 3, 4];

let frequencia = {};

for (let i = 0; i < numeros.length; i++) {
    let numeroAtual = numeros[i];
    
    // Verificar se o número já existe no objeto de frequência
    if (frequencia[numeroAtual]) {
        frequencia[numeroAtual] += 1; // Incrementar a contagem se já existir
    } else {
        frequencia[numeroAtual] = 1; // Inicializar a contagem para um novo número
    }
}

console.log("Lista de números: " + numeros);
console.log("Frequência de cada número: ", frequencia);
