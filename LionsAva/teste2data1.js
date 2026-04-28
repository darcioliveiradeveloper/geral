
/// brasil

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite sua data de nascimento (DD/MM/AAAA): ', (entrada) => {
  
  // 1. Divide a string onde tem '/' ou '-'
  const partes = entrada.split(/[\/-]/);
  
  if (partes.length !== 3) {
    console.log("Formato inválido! Use DD/MM/AAAA ou DD-MM-AAAA.");
    rl.close();
    return;
  }

  // 2. Extrai os números (ajustando o mês que no JS começa em 0)
  const diaNasc = parseInt(partes[0]);
  const mesNasc = parseInt(partes[1]) - 1; 
  const anoNasc = parseInt(partes[2]);

  const hoje = new Date();
  const nascimento = new Date(anoNasc, mesNasc, diaNasc);

  // Validação de data real
  if (isNaN(nascimento.getTime())) {
    console.log("Data inválida! Verifique os números digitados.");
  } else {
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    // 3. Lógica: Se o mês atual é antes do nascimento OU
    // se é o mesmo mês mas o dia atual é antes do dia do nascimento...
    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
        idade--;
    }

    console.log(`\n===========================`);
    console.log(`Data: ${entrada}`);
    console.log(`Sua idade atual é: ${idade} anos`);
    console.log(`===========================\n`);
  }

  rl.close();
});
