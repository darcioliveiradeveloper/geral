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
            console.log("Por favor, insira um Salario válido.");
            cadastrar();
            return;
        }else {
            funcionarios.push({
                nome: nome,
                cargo: cargo,
                salario: parseFloat(salario),
            });
            console.log("Cadastrado com sucesso!");
        listar();
        };
    });
  })
})
}

function excluir(){
    console.log("Opção 2 - Excluir Funcionário (em construção)");
    exibirMenu();
    
}

function editar(){
    console.log("Opção 3 - Editar Funcionário (em construção)");
    exibirMenu();
    
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

function maiorSal() {
  if (funcionarios.length === 0) {
    console.log("A lista está vazia.");
  } else {
    const maior = funcionarios.reduce((prev, current) => {
      return prev.salario > current.salario ? prev : current;
    });
    console.log(
      `\nMaior salário: ${maior.nome} - ${maior.cargo} - (R$ ${maior.salario.toFixed(2)})`,
    );
  }
  exibirMenu();
}

function menorSal() {
  if (funcionarios.length === 0) {
    console.log("A lista está vazia.");
  } else {
    const menor = funcionarios.reduce((prev, current) => {
      return prev.salario < current.salario ? prev : current;
    });
    console.log(
      `\nMenor salário: ${menor.nome} - ${menor.cargo} - (R$ ${menor.salario.toFixed(2)})`,
    );
  }
  exibirMenu();
}

exibirMenu();
