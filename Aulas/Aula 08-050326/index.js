//! Usando Arrays

const teste = [0,10,20,30,40,50];
    console.log(teste[3]);

//! Crie uma condicional que compare dois valores de uma array
//! E retorne o maior valor no console.log
//! Lembrando para acessar valores de uma Array devemos usar os indices nomeDoArray[0]

const numeros = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//! Vamos comparar o segundo elemento (índice 1) com o quarto elemento (índice 3)

if (numeros[1] > numeros[3]) {
  console.log("O maior valor é: " + numeros[1]);
} else if (numeros[3] > numeros[1]) {
  console.log("O maior valor é: " + numeros[3]);
} else {
  console.log("Os valores são iguais.");
}

//! Outra forma sem if
console.log(Math.max(numeros[1], numeros[3]));

//! Mostrar o maior > valor de todos independente da quantidade de itens
const max = Math.max(...numeros);
console.log("O Maior valor é: " + max); // 11

//! Mostrar o menor < valor de todos independente da quantidade de itens
const min = Math.min(...numeros);
console.log("O Menor valor é: " + min); //11

//! Trabalhando com Arrays
// shift, unshift, pop, push, splice, include, IndexOf, Lenght

const Trabalho = [0,1,2,3,4,5];
console.log(Trabalho);
Trabalho.shift();// shift remove o primeiro
console.log(Trabalho);
Trabalho.pop();// pop remove o ultimo
console.log(Trabalho);
Trabalho.unshift(0);// unshift adiciona no primeiro
console.log(Trabalho);
Trabalho.push(5);// push adiciona no ultimo
console.log(Trabalho);
Trabalho.splice(2,2);// splice remove valor especifico de acordo com a posicao e a quantidade. ex (2,2), apartir do indice 2 remove 2 valores
console.log(Trabalho);
