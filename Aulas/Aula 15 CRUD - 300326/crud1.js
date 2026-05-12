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
      case "1": cadastrar(); break;
      case "2": excluir(); break;
      case "3": editar(); break;
      case "4": listar(); break;
      case "5": maiorSal(); break;
      case "6": menorSal(); break;
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
        const salNum = parseFloat(salario);
        if (isNaN(salNum) || salNum <= 0) {
          console.log("Por favor, insira um Salário válido.");
          cadastrar();
        } else {
          funcionarios.push({ nome, cargo, salario: salNum });
          console.log("Cadastrado com sucesso!");
          listar();
        }
      });
    });
  });
}

function excluir() {
  if (funcionarios.length === 0) {
    console.log("Nenhum funcionário para excluir.");
    return exibirMenu();
  }

  rl.question("Digite o ID (índice) do funcionário que deseja excluir: ", (id) => {
    const index = parseInt(id);
    if (index >= 0 && index < funcionarios.length) {
      const removido = funcionarios.splice(index, 1);
      console.log(`Funcionário ${removido[0].nome} excluído com sucesso!`);
    } else {
      console.log("ID inválido.");
    }
    exibirMenu();
  });
}

function editar() {
  if (funcionarios.length === 0) {
    console.log("Nenhum funcionário para editar.");
    return exibirMenu();
  }

  rl.question("Digite o ID (índice) do funcionário que deseja editar: ", (id) => {
    const index = parseInt(id);
    if (index >= 0 && index < funcionarios.length) {
      console.log("Deixe em branco para manter o valor atual.");
      
      rl.question(`Novo Nome (${funcionarios[index].nome}): `, (nome) => {
        rl.question(`Novo Cargo (${funcionarios[index].cargo}): `, (cargo) => {
          rl.question(`Novo Salário (${funcionarios[index].salario}): `, (salario) => {
            
            // Atualiza apenas se o usuário digitou algo
            if (nome) funcionarios[index].nome = nome;
            if (cargo) funcionarios[index].cargo = cargo;
            if (salario && !isNaN(salario)) funcionarios[index].salario = parseFloat(salario);

            console.log("Funcionário atualizado com sucesso!");
            exibirMenu();
          });
        });
      });
    } else {
      console.log("ID inválido.");
      exibirMenu();
    }
  });
}

function listar() {
  console.log("\n--- LISTA DE FUNCIONÁRIOS ---");
  if (funcionarios.length === 0) {
    console.log("Nenhum funcionário cadastrado.");
  } else {
    funcionarios.forEach((f, i) => {
      console.log(
        `ID: ${i} | ${f.nome.padEnd(10)} | Cargo: ${f.cargo.padEnd(10)} | Salário: R$ ${f.salario.toFixed(2)}`
      );
    });
  }
  exibirMenu();
}

function maiorSal() {
  if (funcionarios.length === 0) {
    console.log("A lista está vazia.");
  } else {
    const maior = funcionarios.reduce((prev, current) => (prev.salario > current.salario ? prev : current));
    console.log(`\nMaior salário: ${maior.nome} - R$ ${maior.salario.toFixed(2)}`);
  }
  exibirMenu();
}

function menorSal() {
  if (funcionarios.length === 0) {
    console.log("A lista está vazia.");
  } else {
    const menor = funcionarios.reduce((prev, current) => (prev.salario < current.salario ? prev : current));
    console.log(`\nMenor salário: ${menor.nome} - R$ ${menor.salario.toFixed(2)}`);
  }
  exibirMenu();
}

exibirMenu();