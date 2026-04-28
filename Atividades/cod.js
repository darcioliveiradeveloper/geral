https://github.com/sharmasapna/Web-scraping-for-images/blob/master/README.md
const readline = require('readline');

// Vetor global de lembretes
let lembretes = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função principal: menu
function executar() {
  console.log("\n=== MENU ===");
  console.log("1 - Adicionar lembrete");
  console.log("2 - Listar lembretes");
  console.log("3 - Editar lembrete");
  console.log("4 - Excluir lembrete");
  console.log("5 - Sair");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        adicionar();
        break;
      case "2":
        listar();
        executar();
        break;
      case "3":
        editar();
        break;
      case "4":
        excluir();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Opção inválida!");
        executar();
    }
  });
}

// Adicionar lembrete
function adicionar() {
  rl.question("Digite o lembrete: ", (texto) => {
    rl.question("Digite o prazo: ", (prazo) => {
      lembretes.push({ lembrete: texto, prazo: prazo, concluido: false });
      console.log("Lembrete adicionado com sucesso!");
      executar();
    });
  });
}

// Listar lembretes
function listar() {
  if (lembretes.length === 0) {
    console.log("Nenhum lembrete cadastrado.");
  } else {
    lembretes.forEach((l, i) => {
      console.log(`${i} - ${l.lembrete} | Prazo: ${l.prazo} | Concluído: ${l.concluido}`);
    });
  }
}

// Editar lembrete
function editar() {
  listar();
  rl.question("Digite o índice do lembrete que deseja editar: ", (indice) => {
    if (lembretes[indice]) {
      rl.question("Novo texto do lembrete: ", (novoTexto) => {
        rl.question("Novo prazo: ", (novoPrazo) => {
          lembretes[indice].lembrete = novoTexto;
          lembretes[indice].prazo = novoPrazo;
          console.log("Lembrete atualizado!");
          executar();
        });
      });
    } else {
      console.log("Índice inválido.");
      executar();
    }
  });
}

// Excluir lembrete
function excluir() {
  listar();
  rl.question("Digite o índice do lembrete que deseja excluir: ", (indice) => {
    if (lembretes[indice]) {
      lembretes.splice(indice, 1);
      console.log("Lembrete excluído com sucesso!");
      executar();
    } else {
      console.log("Índice inválido.");
      executar();
    }
  });
}

// Iniciar programa
executar();
