let lotes = [50, 40, 60, 30, 70];
let totalIngressos = 0;

console.log('=== Controle de Ingressos ===');
console.log('Lotes de ingressos: ' + lotes);
console.log('');

for (let i = 0; i < lotes.length; i++) {

  let ingressosDoLote = lotes[i];
  totalIngressos += ingressosDoLote;

  console.log('Lote ' + (i + 1) + ': ' + ingressosDoLote + ' ingressos | Total acumulado: ' + totalIngressos);
}

console.log('');
console.log('O total de ingressos vendidos foi: ' + totalIngressos);
