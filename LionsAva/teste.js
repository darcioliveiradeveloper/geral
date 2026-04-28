const readline = require('readline');

// Configura a interface de entrada e saída no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite sua data de nascimento (AAAA-MM-DD): ', (dataDigitada) => {
  
  const hoje = new Date();
  const nascimento = new Date(dataDigitada);

  // Validação simples para evitar datas inválidas
  if (isNaN(nascimento.getTime())) {
    console.log("Formato de data inválido! Use AAAA-MM-DD (Ex: 1995-05-20)");
    rl.close();
    return;
  }

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();
  const dia = hoje.getDate() - (nascimento.getDate() + 1); // Ajuste de fuso horário local

  // Lógica de verificação de aniversário
  if (mes < 0 || (mes === 0 && dia < 0)) {
    idade--;
  }

  console.log(`---------------------------`);
  console.log(`Sua idade atual é: ${idade} anos`);
  console.log(`---------------------------`);

  rl.close();
});

