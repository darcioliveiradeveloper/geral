function pedirOperacao(num1) { // Define uma sub-função para pedir a operação.
    rl.question("Escolha a operação (+, -, *, /, %): ", (operacao) => { // Pergunta qual operação o usuário deseja.
      const operacoesValidas = ["+", "-", "*", "/", "%"]; // Lista de operações permitidas.
      if (!operacoesValidas.includes(operacao)) { // Verifica se o que foi digitado não está na lista.
        console.log("[ERRO]: Operação inválida! Escolha entre +, -, *, / ou %."); // Exibe mensagem de erro.
        pedirOperacao(num1); // Repete a pergunta da operação se o usuário errar.
      } else { // Se a operação for válida, prossegue.
        pedirNum2(num1, operacao); // Chama a função para pedir o segundo número.
      }
    });
  }

module.exports = pedirOperacao; // Exporta a função para ser usada em outros arquivos do projeto.

