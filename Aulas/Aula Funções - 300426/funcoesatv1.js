// Questão 1 - Cálculo de Fatorial
// Crie uma função que recebe um número inteiro positivo e retorne o seu fatorial.
// O fatorial de um número `n` (representado por `n!`) é a multiplicação de todos os
// inteiros positivos menores ou iguais a ele.
// Lembrando que fatorial de 0 é igual a 1.
// Exemplo: fatorial(5) deve retornar 120 (5*4*3*2*1).


// Definimos a função que recebe um parâmetro 'n' (o número que queremos o fatorial)
function calcularFatorial(n) {
    
    // Verificamos se o número é 0, pois matematicamente o fatorial de 0 é sempre 1
    if (n === 0) {
        return 1; // Se for 0, a função para aqui e retorna 1
    }

    // Criamos uma variável para guardar o valor da multiplicação. 
    // Começamos com 1 porque qualquer número multiplicado por 1 não se altera.
    let resultado = 1;

    // Criamos um laço que começa em 1 e vai até o número 'n'
    // i++ significa que a cada volta o 'i' aumenta 1 valor (1, 2, 3...)
    for (let i = 1; i <= n; i++) {
        
        // Multiplicamos o valor atual de 'resultado' pelo valor de 'i'
        // Exemplo para n=3: 
        // 1ª volta: resultado = 1 * 1 (1)
        // 2ª volta: resultado = 1 * 2 (2)
        // 3ª volta: resultado = 2 * 3 (6)
        resultado *= i; 
    }

    // Após terminar o laço, retornamos o valor final acumulado
    return resultado;
}

// Chamamos a função passando o número 5 e exibimos o resultado no console
console.log("Fatorial de 5 é: " + calcularFatorial(5)); // Deve imprimir 120
console.log(calcularFatorial(5));
