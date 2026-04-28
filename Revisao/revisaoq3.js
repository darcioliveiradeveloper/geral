// Questão 3 — Remover Caracteres Duplicados
// Dada uma string, retorne uma nova string sem letras repetidas.

// Exemplo de string
const texto = "banana";
let resultado = "";

// Percorre cada letra do texto
for (let i = 0; i < texto.length; i++) {
    let letraAtual = texto[i];

    // Verifica se a letra já está no resultado
    if (resultado.indexOf(letraAtual) === -1) {
        resultado += letraAtual; // Adiciona a letra se ainda não estiver no resultado
    }
}

console.log("Texto original: " + texto);
console.log("Texto sem letras repetidas: " + resultado);
