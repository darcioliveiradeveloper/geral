const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let funcionarios = [
  {
    nome: "Teste1",
    cargo: "Dev",
    salario: 1000,
  },
];

function exibirMenu() {
  console.log(`
    ---------- MENU ----------
    1. Cadastrar Funcionário
    2. Excluir Funcionário
    3. Editar Funcionário
    4. Listar Todos
    5. Maior Salário
    6. Menor Salário
    7. Sair
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
        excluir();
        break;
      case "3":
        editar();
        break;
      case "4":
        listar();
        break;
      case "5":
        maiorSal();
        break;
      case "6":
        menorSal();
        break;
      case "7":
        console.log("Saindo...!");
        rl.close();
        break;
      default:
        console.log("Opção inválida!");
        exibirMenu();
        break;
    }
  });
}

function cadastrar() {
  rl.question("Nome: ", (nome) => {
    rl.question("Cargo: ", (cargo) => {
      rl.question("Salário: ", (salario) => {
        if (isNaN(salario) || salario <= 0) {
          console.log("Por favor, insira um salário válido.");
          return cadastrar();
        }

        funcionarios.push({
          nome: nome,
          cargo: cargo,
          salario: parseFloat(salario),
        });

        console.log("Cadastrado com sucesso!");
        exibirMenu();
      });
    });
  });
}

function excluir() {
  if (funcionarios.length === 0) {
    console.log("Nenhum funcionário para excluir.");
    return exibirMenu();
  }

  listarSemMenu();

  rl.question("Digite o número do funcionário para excluir: ", (index) => {
    index = parseInt(index);

    if (isNaN(index) || index < 0 || index >= funcionarios.length) {
      console.log("Índice inválido!");
    } else {
      const removido = funcionarios.splice(index, 1);
      console.log(`Funcionário ${removido[0].nome} removido com sucesso!`);
    }

    exibirMenu();
  });
}

function editar() {
  if (funcionarios.length === 0) {
    console.log("Nenhum funcionário para editar.");
    return exibirMenu();
  }

  listarSemMenu();

  rl.question("Digite o número do funcionário para editar: ", (index) => {
    index = parseInt(index);

    if (isNaN(index) || index < 0 || index >= funcionarios.length) {
      console.log("Índice inválido!");
      return exibirMenu();
    }

    const funcionario = funcionarios[index];

    rl.question(`Novo nome (${funcionario.nome}): `, (nome) => {
      rl.question(`Novo cargo (${funcionario.cargo}): `, (cargo) => {
        rl.question(`Novo salário (${funcionario.salario}): `, (salario) => {
          if (salario !== "" && (isNaN(salario) || salario <= 0)) {
            console.log("Salário inválido!");
            return exibirMenu();
          }

          funcionario.nome = nome || funcionario.nome;
          funcionario.cargo = cargo || funcionario.cargo;
          funcionario.salario = salario
            ? parseFloat(salario)
            : funcionario.salario;

          console.log("Funcionário atualizado com sucesso!");
          exibirMenu();
        });
      });
    });
  });
}

function listar() {
  console.log("\n--- LISTA DE FUNCIONÁRIOS ---");

  if (funcionarios.length === 0) {
    console.log("Nenhum funcionário cadastrado.");
  } else {
    funcionarios.forEach((f, i) => {
      console.log(
        `${i}. ${f.nome} - Cargo: ${f.cargo} - R$ ${f.salario.toFixed(2)}`,
      );
    });
  }

  exibirMenu();
}

function listarSemMenu() {
  console.log("\n--- LISTA DE FUNCIONÁRIOS ---");

  funcionarios.forEach((f, i) => {
    console.log(
      `${i}. ${f.nome} - Cargo: ${f.cargo} - R$ ${f.salario.toFixed(2)}`,
    );
  });
}

function maiorSal() {
  if (funcionarios.length === 0) {
    console.log("A lista está vazia.");
  } else {
    const maior = funcionarios.reduce((prev, current) =>
      prev.salario > current.salario ? prev : current,
    );

    console.log(
      `\nMaior salário: ${maior.nome} - ${maior.cargo} - (R$ ${maior.salario.toFixed(
        2,
      )})`,
    );
  }

  exibirMenu();
}

function menorSal() {
  if (funcionarios.length === 0) {
    console.log("A lista está vazia.");
  } else {
    const menor = funcionarios.reduce((prev, current) =>
      prev.salario < current.salario ? prev : current,
    );

    console.log(
      `\nMenor salário: ${menor.nome} - ${menor.cargo} - (R$ ${menor.salario.toFixed(
        2,
      )})`,
    );
  }

  exibirMenu();
}

exibirMenu();
