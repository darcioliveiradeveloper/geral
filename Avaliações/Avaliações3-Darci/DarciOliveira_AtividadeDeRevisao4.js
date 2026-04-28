let notas = [5, 8, 9, 6, 1, 7, 10, 3, 4, 2];
console.log("Notas Antigas: ", notas);
let novaNota = 15;
notas.push(novaNota);
console.log("Notas Atualizadas (com a nova nota):", notas);

let soma = 0;
let notaAlta = notas[0];
let notaBaixa = notas[0];

for (let i = 0; i < notas.length; i++) {
  let notaAtual = notas[i];

  soma += notaAtual;

  if (notaAtual > notaAlta) {
    notaAlta = notaAtual;
  }
  if (notaAtual < notaBaixa) {
    notaBaixa = notaAtual;
  }
}

let media = soma / notas.length;

let acimaMedia = 0;
let reprovados = 0;

for (let i = 0; i < notas.length; i++) {
  if (notas[i] > media) {
    acimaMedia++;
  }
  if (notas[i] < 8.0) {
    reprovados++;
  }
}

console.log("-----------------------------------");
console.log(`Média das notas: ${media}`);
console.log(`Nota mais alta: ${notaAlta}`);
console.log(`Nota mais baixa: ${notaBaixa}`);
console.log(`Aprovados (acima de 8.0): ${acimaMedia}`);
console.log(`Reprovados (abaixo de 8.0): ${reprovados}`);
console.log("-----------------------------------");
