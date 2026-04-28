const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let alunos = [{ nome: "Aluno1", idade: 18, curso: "Dev", nota: 100 }];

function menu() {
  console.log("=== Cadastro de Alunos ===");
  console.log("1 - Cadastrar Novo Aluno");
  console.log("2 - Buscar Aluno pelo nome");
  console.log("3 - Exibir todos os Alunos");
  console.log("4 - Excluir um Aluno");
  console.log("5 - Maior nota");
  console.log("6 - Média das Notas");
  console.log("7 - Encerrar");
  console.log("==========================");

  rl.question("Escolha uma opção: ", function (opcao) {
    if (opcao === "1") {
      cadastrar();
    } else if (opcao === "2") {
      buscar();
    } else if (opcao === "3") {
      exibir();
    } else if (opcao === "4") {
      excluir();
    } else if (opcao === "5") {
      maior();
    } else if (opcao === "6") {
      media();
    } else if (opcao === "7") {
      console.log("Encerrando o programa. Até logo!");
      rl.close();
    } else {
      console.log("Opção inválida! Tente novamente.");
      menu();
    }
  });
}

function cadastrar() {
  console.log("\n--- Cadastrar Novo Aluno ---");

  rl.question("Nome: ", function (nome) {
    rl.question("Idade: ", function (idade) {
      rl.question("Curso: ", function (curso) {
        rl.question("Nota: ", function (nota) {
          let novoaluno = {
            nome: nome,
            idade: parseInt(idade),
            curso: curso,
            nota: parseFloat(nota),
          };

          alunos.push(novoaluno);

          console.log('✓ Aluno "' + nome + '" cadastrado com sucesso!\n');
          menu();
        });
      });
    });
  });
}

function buscar() {
  console.log("\n--- Buscar Aluno ---");

  rl.question("Digite o nome do Aluno: ", function (busca) {
    let minuscula = busca.toLowerCase();

    let encontrado = [];

    for (let i = 0; i < alunos.length; i++) {
      let atual = alunos[i];
      if (atual.nome.toLowerCase().includes(minuscula)) {
        encontrado.push(atual);
      }
    }

    console.log("");
    if (encontrado.length === 0) {
      console.log('\nNenhum Aluno encontrado com o nome: "' + busca + '".\n');
    } else {
      console.log("\nAluno encontrado (" + encontrado.length + "):\n");
      {
        console.table(encontrado);
        console.log("");
      }
    }

    menu();
  });
}

function exibir() {
  console.log("\n--- Todos os Alunos ---");

  if (alunos.length === 0) {
    console.log("\nNenhum aluno cadastrado!\n");
  } else {
    console.table(alunos);
  }

  menu();
}

// novas funcoes

function excluir() {
  console.log("\n--- Excluir Aluno ---");
  rl.question("Digite o nome exato do aluno para excluir: ", function (nome) {
    const totalAntes = alunos.length;
    alunos = alunos.filter(
      (aluno) => aluno.nome.toLowerCase() !== nome.toLowerCase(),
    );
    if (alunos.length < totalAntes) {
      console.log(`\n✓ Aluno "${nome}" removido com sucesso!\n`);
    } else {
      console.log(`\n! Aluno "${nome}" não encontrado.\n`);
    }
    menu();
  });
}

function maior() {
  console.log("\n--- Aluno com a Maior Nota ---");
  if (alunos.length === 0) {
    console.log("\nNenhum aluno cadastrado.\n");
  } else {
    let melhorAluno = alunos.reduce((prev, current) =>
      prev.nota > current.nota ? prev : current,
    );
    console.log(
      `\nO aluno com a maior nota é ${melhorAluno.nome} com nota ${melhorAluno.nota}.\n`,
    );
  }
  menu();
}

function media() {
  console.log("\n--- Média das Notas ---");
  if (alunos.length === 0) {
    console.log("\nNão há notas para calcular.\n");
  } else {
    let soma = alunos.reduce((acc, aluno) => acc + (aluno.nota || 0), 0);
    let resultado = soma / alunos.length;
    console.log(`\nA média geral da turma é: ${resultado.toFixed(2)}\n`);
  }
  menu();
}

menu();
