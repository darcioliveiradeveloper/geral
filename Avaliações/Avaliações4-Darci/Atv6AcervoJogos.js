const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let jogos = [
  {
    nome: "Counter Strike",
    tipo: "Tiro",
    ano: 1986,
  },
  {
    nome: "Super Mario Bros",
    tipo: "Ação",
    ano: 1985,
  },
];

function exibirMenu() {
  console.log(`
    --- MENU JOGOS ---
    1. Cadastrar Jogo
    2. Listar Jogos
    3. Editar Jogo
    4. Excluir Jogo
    5. Sair
    `);
  pergunta();
}

function pergunta() {
  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        cadastrar();
        break;
      case "2":
        listar();
        break;
      case "3":
        editar();
        break;
      case "4":
        excluir();
        break;
      case "5":
        console.log("Saindo...!");
        console.log("Até a próxima!");
        rl.close();
        break;
      default:
        console.log("Opção inválida!");
        console.log("Digite um número entre 1 e 5.");
        exibirMenu();
        break;
    }
  });
}

function cadastrar() {
  rl.question("Nome do Jogo: ", (nome) => {
    rl.question("Tipo: ", (tipo) => {
      rl.question("Ano de Lançamento: ", (ano) => {
        const anoNum = parseInt(ano);

        if (isNaN(anoNum) || anoNum < 1900) {
          console.log("Por favor, insira um ano válido.");
          return cadastrar();
        }

        jogos.push({
          nome: nome,
          tipo: tipo,
          ano: anoNum,
        });

        console.log("\nJogo cadastrado com sucesso!");
        exibirMenu();
      });
    });
  });
}

function excluir() {
  if (jogos.length === 0) {
    console.log("\nNenhum jogo para excluir.");
    return exibirMenu();
  }

  listarSemMenu();

  rl.question("\nDigite o número (index) do jogo para excluir: ", (index) => {
    index = parseInt(index);

    if (isNaN(index) || index < 0 || index >= jogos.length) {
      console.log("Índice inválido!");
    } else {
      const removido = jogos.splice(index, 1);
      console.log(`\nJogo "${removido[0].nome}" removido com sucesso!`);
    }

    exibirMenu();
  });
}

function editar() {
  if (jogos.length === 0) {
    console.log("\nNenhum jogo para editar.");
    return exibirMenu();
  }

  listarSemMenu();

  rl.question("\nDigite o número (index) do jogo para editar: ", (index) => {
    index = parseInt(index);

    if (isNaN(index) || index < 0 || index >= jogos.length) {
      console.log("Índice inválido!");
      return exibirMenu();
    }

    const jogo = jogos[index];

    rl.question(`Novo nome (${jogo.nome}): `, (nome) => {
      rl.question(`Novo tipo (${jogo.tipo}): `, (tipo) => {
        rl.question(`Novo ano (${jogo.ano}): `, (ano) => {
          if (ano !== "" && (isNaN(ano) || parseInt(ano) < 1950)) {
            console.log("Ano inválido!");
            return exibirMenu();
          }

          jogo.nome = nome || jogo.nome;
          jogo.tipo = tipo || jogo.tipo;
          jogo.ano = ano ? parseInt(ano) : jogo.ano;

          console.log("\nJogo atualizado com sucesso!");
          exibirMenu();
        });
      });
    });
  });
}

function listar() {
  console.log("\n--- BIBLIOTECA DE JOGOS ---");

  if (jogos.length === 0) {
    console.log("Nenhum jogo cadastrado.");
  } else {
    console.table(jogos);
  }

  exibirMenu();
}

function listarSemMenu() {
  console.log("\n--- LISTA ATUAL ---");
  if (jogos.length === 0) {
    console.log("Nenhum jogo disponível.");
  } else {
    console.table(jogos);
  }
}

exibirMenu();
