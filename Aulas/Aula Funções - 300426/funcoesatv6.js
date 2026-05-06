// Questão 3 - Sequência de Fibonacci
// Crie uma função que receba um número inteiro `n` e retorne um array contendo os
// primeiros `n` elementos da sequência de Fibonacci.
// Nesta sequência, os dois primeiros números são 0 e 1, e a partir do terceiro termo,
// cada número é a soma dos dois imediatamente anteriores.
// Exemplo: fibonacci(6) → [0, 1, 1, 2, 3, 5]

function fibonacci(n) { // Definimos a função que recebe um parâmetro 'n' (a quantidade de elementos da sequência de Fibonacci que queremos retornar)
    // Criamos um array para armazenar os números da sequência de Fibonacci
    let sequencia = []; // Inicializamos um array vazio para armazenar os números da sequência de Fibonacci

    // Verificamos se 'n' é maior que 0 para evitar retornar um array vazio
    if (n > 0) { // Verificamos se 'n' é maior que 0 para adicionar o primeiro número da sequência
        sequencia.push(0); // Adicionamos o primeiro número da sequência (0)
    }
    if (n > 1) { // Verificamos se 'n' é maior que 1 para adicionar o segundo número da sequência
        sequencia.push(1); // Adicionamos o segundo número da sequência (1)
    }

    // Criamos um laço que começa em 2 e vai até 'n-1' para calcular os próximos números da sequência
    for (let i = 2; i < n; i++) { // Começamos em 2 porque os dois primeiros números já foram adicionados ao array
        // Calculamos o próximo número como a soma dos dois anteriores
        let proximo = sequencia[i - 1] + sequencia[i - 2]; // O próximo número é a soma do último número (sequencia[i - 1]) e do penúltimo número (sequencia[i - 2])
        sequencia.push(proximo); // Adicionamos o próximo número ao array
    }

    return sequencia; // Retornamos o array com os primeiros 'n' elementos da sequência de Fibonacci
}

// Testamos a função com o exemplo fornecido
//console.log(fibonacci(8)); // Deve retornar [0, 1, 1, 2, 3, 5]

const readline = require("readline"); // Importamos o módulo 'readline' para permitir a leitura de entrada do usuário pelo console

const rl = readline.createInterface({ // Criamos uma interface de leitura usando o módulo 'readline' para permitir a entrada de dados pelo console
  input: process.stdin,// Configura a interface de leitura para receber entrada do usuário a partir do console
  output: process.stdout // Configura a interface de leitura para receber entrada do usuário e exibir saída no console
});

rl.question("Digite a Quantidade de posições de Fibonacci que deseja ver ? ", (posicao) => { // Solicita ao usuário a quantidade de posições da sequência de Fibonacci que deseja ver
  console.log(fibonacci(parseInt(posicao))); // Converte a entrada para inteiro e chama a função
  rl.close(); // Fecha a interface de leitura após exibir o resultado
});
