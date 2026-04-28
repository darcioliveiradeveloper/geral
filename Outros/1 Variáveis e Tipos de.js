1. Variáveis e Tipos de Dados

No JavaScript moderno, evitamos o uso de var. Entender a diferença entre os tipos de armazenamento é o primeiro passo.

    let: Usada para variáveis que podem ter seu valor alterado.

    const: Usada para valores constantes (que não mudam).

    Tipos Primitivos:

        String: Textos (ex: "Olá Mundo").

        Number: Números inteiros ou decimais (ex: 10, 15.5).

        Boolean: Valores lógicos (true ou false).

2. Operadores Matemáticos e Comparação

Essenciais para construir a lógica de qualquer sistema.
Operador	Descrição	Exemplo
+, -, *, /	Operações básicas	10 / 2 = 5
%	Resto da divisão	10 % 3 = 1
== ou ===	Igualdade	10 === 10 (true)
!= ou !==	Diferença	10 !== 5 (true)
>, <	Maior ou Menor	5 < 8 (true)
3. Estruturas Condicionais (if, else if, else)

Permitem que o código tome decisões baseadas em condições.
JavaScript

let nota = 8;

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

4. Estruturas de Dados: Arrays e Objetos

Para lidar com conjuntos de informações.

    Arrays (Vetores): Listas indexadas por números (começando em 0).

        let frutas = ["Maçã", "Banana"];

    Objetos: Estruturas que usam pares de chave: valor.

        let aluno = { nome: "Lucas", idade: 20 };

5. Entrada e Saída no Node.js

Como o programa se comunica com o usuário através do terminal.
Saída de Dados

    console.log(): Exibe informações comuns.

    console.table(): Exibe arrays ou objetos em formato de tabela (excelente para organização).

Entrada de Dados (Módulo readline)

Para capturar o que o usuário digita no terminal de forma nativa:
JavaScript

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o seu nome? ', (resposta) => {
  console.log(`Olá, ${resposta}!`);
  rl.close();
});

6. Dicas para a Prova

    Atenção aos detalhes: Lembre-se que o JavaScript é case-sensitive (diferencia maiúsculas de minúsculas).

    Clean Code: Mantenha o código indentado (alinhado) para facilitar a leitura.

    Lógica: Antes de codar, pense no passo a passo do problema (o algoritmo).

Boa sorte nos estudos!
