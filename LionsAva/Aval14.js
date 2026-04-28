let temperaturaAgua = 90;

console.log('=== Simulação de Aquecimento de Água ===');
console.log('Temperatura inicial: ' + temperaturaAgua + ' graus');
console.log('');

while (temperaturaAgua < 100) {

  console.log('A temperatura está em ' + temperaturaAgua + ' graus. Aquecendo...');
  temperaturaAgua += 2;
}

console.log('');
console.log('A temperatura está em ' + temperaturaAgua + ' graus. Aquecendo...');
console.log('');
console.log('=== A água está fervendo! Temperatura: ' + temperaturaAgua + '°C ===');
