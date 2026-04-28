// ============================================
// ATIVIDADE PRÁTICA 15 - Ingressos
// Objetivo: Usar arrays, laço FOR e acumulação de valores
// ============================================

// ===== ARRAY COM OS LOTES DE INGRESSOS =====
// Cada número representa quantos ingressos foram vendidos em cada lote
let lotes = [50, 40, 60, 30, 70];

// Variável acumuladora - começa em 0 e vai somando os valores
let totalIngressos = 0;

console.log('=== Controle de Ingressos ===');
console.log('Lotes de ingressos: ' + lotes);
console.log('');

// ===== LAÇO FOR =====
// O for percorre cada posição do array
// i = 0: começa na posição 0 (primeiro elemento)
// i < lotes.length: continua enquanto não chegar ao final do array
// i++: incrementa i em 1 a cada repetição
for (let i = 0; i < lotes.length; i++) {

  // lotes[i] pega o valor na posição 'i' do array
  let ingressosDoLote = lotes[i];

  // Somamos os ingressos do lote atual ao total
  // totalIngressos += ingressosDoLote é o mesmo que:
  // totalIngressos = totalIngressos + ingressosDoLote
  totalIngressos += ingressosDoLote;

  // Exibimos o progresso da soma
  console.log('Lote ' + (i + 1) + ': ' + ingressosDoLote + ' ingressos | Total acumulado: ' + totalIngressos);
}

// Exibimos o resultado final
console.log('');
console.log('O total de ingressos vendidos foi: ' + totalIngressos);
