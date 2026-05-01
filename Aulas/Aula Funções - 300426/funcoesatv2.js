// Questão 2 - Identificar Número Primo
// Crie uma função que receba um número inteiro e verifique se ele é um número primo.
// Um número primo é aquele que é divisível apenas por 1 e por ele mesmo (e deve ser maior que 1).
// Exemplo:
// - ePrimo(7) → true
// - ePrimo(10) → false

function ePrimo(n) {
    // Verificamos se o número é menor ou igual a 1, pois números menores ou iguais a 1 não são primos
    if (n <= 1) {
        return false; // Retorna falso para números menores ou iguais a 1
    }

    // Criamos um laço que começa em 2 e vai até a raiz quadrada de 'n'
    // Isso é eficiente porque um número não pode ser dividido por um fator maior que sua raiz quadrada sem ter um fator correspondente menor que ela
    for (let i = 2; i <= Math.sqrt(n); i++) {
        
        // Verificamos se 'n' é divisível por 'i'
        if (n % i === 0) {
            return false; // Se for divisível, então 'n' não é primo, retornamos falso
        }
    }

    // Se o laço terminar sem encontrar nenhum divisor, então 'n' é primo
    return true; // Retorna verdadeiro para números primos
}

// Testamos a função com alguns exemplos
console.log("7 é primo? " + ePrimo(7)); // Deve retornar true
console.log("10 é primo? " + ePrimo(10)); // Deve retornar false
console.log("1 é primo? " + ePrimo(1)); // Deve retornar false
console.log("2 é primo? " + ePrimo(2)); // Deve retornar true
console.log("15 é primo? " + ePrimo(15)); // Deve retornar false
