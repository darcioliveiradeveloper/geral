// Questão 7 — Encontrar Substring
// Dada uma string maior e uma menor, verifique se a menor existe dentro da maior sem usar
// includes.

function encontrarSubstring(stringMaior, stringMenor) {
    for (let i = 0; i <= stringMaior.length - stringMenor.length; i++) {
        let j;
        for (j = 0; j < stringMenor.length; j++) {
            if (stringMaior[i + j] !== stringMenor[j]) {
                break;
            }
        }
        if (j === stringMenor.length) {
            return true; // Substring encontrada
        }
    }
    return false; // Substring não encontrada
}
// Exemplo de uso:
const stringMaior = "Olá, mundo!";
const stringMenor = "mundo";
const resultado = encontrarSubstring(stringMaior, stringMenor);
console.log(resultado); // true

