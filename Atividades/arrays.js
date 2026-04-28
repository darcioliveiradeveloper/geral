
//Número inteiro (int) 10
//Número float 1,0

const numeros = [10,20,30,40,50]
console.log(numeros[3])

// Crie uma condicional que compare dois índices de um array 
// e retorne o maior valor no console.log
// Lembrando que para acessar valores em um array devemnos usar
// os cvalores indices nomeDoArray[0]

const grupoArray = [54,69]

if (grupoArray[0]<grupoArray[1]){
    console.log ("O maior número é " + grupoArray[1])
}else{
    console.log ("O maior número é " + grupoArray[0])
}

//Método Push (Adicionar Elemento)
// Adiciona um elemento no final 
let exemplo = [10,20,30,40,50]
exemplo.push(60)
//Vai imprimir [10,20,30,40,50,60]

//-----------------------------------------------------------------------

//Método Pop (Remove o último Elemento)
//Remove o último elemento da linha
let cores = ['azul', 'verde', 'rosa']
cores.pop()
console.log(cores)
//Vai imprimir ['azul', 'verde',]

//-----------------------------------------------------------------------

//Método Shift (Remove o Primeiro Elemento)
let cores2 = ['azul', 'verde', 'rosa']
cores2.shift()
console.log(cores2)
//Vai imprimir ['verde','rosa']

//-----------------------------------------------------------------------

//Método Unshift (Adicionar Elemento no Início)
//Adiciona um elemento no Início
let cores3 = ['verde', 'rosa']
cores3.unshift('azul')
console.log(cores3)
//Vai imprimir ['azul','verde','rosa']

//-----------------------------------------------------------------------

//Método Splice (Remove Elemento Específico)
//Remove um elemento Específico
let cores4 = ['azul', 'verde', 'rosa']
cores4.splice(1, 1)
console.log(cores4)
//Vai imprimir ['azul','rosa']

//-----------------------------------------------------------------------

//Método Includes (Verificar se faz Parte)
//Verificar se faz Parte
let cores5 = ['azul', 'verde', 'rosa']
cores5.includes('verde')
console.log(cores5)
//Vai imprimir [True]

//-----------------------------------------------------------------------

//Método Length (Retorna o Tamanho do Array)
let cores6 = ['azul', 'verde', 'rosa']
console.log(cores6.length)
//Vai imprimir [3]

// push() → adiciona elemento no final do array
// pop() → remove o último elemento
// shift() → remove o primeiro elemento
// unshift() → adiciona elemento no início
// splice() → remove, adiciona ou substitui elementos em qualquer posição
// slice() → copia uma parte do array sem alterar o original
// concat() → junta dois arrays em um novo
// join() → transforma o array em string
// indexOf() → retorna o índice da primeira ocorrência de um valor
// includes() → verifica se existe um valor no array (true/false)
// find() → retorna o primeiro elemento que satisfaz uma condição
// filter() → retorna todos os elementos que passam em uma condição
// map() → cria novo array transformando os valores
// forEach() → percorre o array executando uma função
// sort() → ordena os elementos do array
// reverse() → inverte a ordem do array
// length → propriedade que mostra o tamanho do array

//Exercicio Array 1

let minhaMesa = ['Lucas', 'Darci']
console.log(`Meu nome é ${minhaMesa[0]} e meu colega se chama ${minhaMesa[1]}`)

