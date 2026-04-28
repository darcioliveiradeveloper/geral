const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (str) => new Promise((resolve) => rl.question(str, resolve));

let alunos = [{ nome: "Aluno1", idade: 18, curso: "Dev", nota: 100 }];

async function menu() {
  console.log(
    "\n=== GESTÃO PRO ===\n1. Cadastrar | 2. Buscar | 3. Listar | 4. Excluir | 5. Maior Nota | 6. Média | 7. Sair",
  );
  const opcao = await question("Escolha: ");

  const acoes = {
    1: cadastrar,
    2: buscar,
    3: () => {
      console.table(alunos);
      menu();
    },
    4: excluir,
    5: maiorNota,
    6: mediaNotas,
    7: () => {
      console.log("Tchau!");
      rl.close();
    },
  };

  if (acoes[opcao]) await acoes[opcao]();
  else {
    console.log("Opção inválida!");
    menu();
  }
}

async function cadastrar() {
  const nome = await question("Nome: ");
  const idade = parseInt(await question("Idade: "));
  const curso = await question("Curso: ");
  const nota = parseFloat(await question("Nota: "));

  alunos.push({ nome, idade, curso, nota });
  console.log("✓ Cadastrado!");
  menu();
}

async function buscar() {
  const busca = (await question("Nome para busca: ")).toLowerCase();
  const resultados = alunos.filter((a) => a.nome.toLowerCase().includes(busca));
  console.table(resultados.length ? resultados : "Nenhum aluno encontrado.");
  menu();
}

async function excluir() {
  const nome = (await question("Nome para remover: ")).toLowerCase();
  const inicial = alunos.length;
  alunos = alunos.filter((a) => a.nome.toLowerCase() !== nome);
  console.log(alunos.length < inicial ? "✓ Removido!" : "! Não encontrado.");
  menu();
}

function maiorNota() {
  if (!alunos.length) return (console.log("Lista vazia!"), menu());
  const top = alunos.reduce((p, c) => (p.nota > c.nota ? p : c));
  console.log(`Top: ${top.nome} (${top.nota})`);
  menu();
}

function mediaNotas() {
  const total = alunos.reduce((acc, a) => acc + a.nota, 0);
  console.log(
    `Média: ${alunos.length ? (total / alunos.length).toFixed(2) : 0}`,
  );
  menu();
}

console.log("Sistema Iniciado.");
menu();
