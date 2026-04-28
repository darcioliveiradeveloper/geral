const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let biblioteca = [
  { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
  { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997 },
  { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
];

console.log("=== Biblioteca ===");

function menu() {
  rl.question(
    "\n1-Adicionar livro\n2-Buscar livro\n3-Ver todos\n4-Sair\nEscolha: ",
    (opcao) => {
      // ADICIONAR
      if (opcao == 1) {
        rl.question("Título: ", (titulo) => {
          rl.question("Autor: ", (autor) => {
            rl.question("Ano: ", (ano) => {
              biblioteca.push({
                titulo: titulo,
                autor: autor,
                ano: parseInt(ano),
              });

              console.log("Livro adicionado!");
              menu(); // volta para o menu
            });
          });
        });
      }

      // BUSCAR
      else if (opcao == 2) {
        rl.question("Digite o título: ", (busca) => {
          let encontrado = false;

          for (let i = 0; i < biblioteca.length; i++) {
            if (
              biblioteca[i].titulo.toLowerCase().includes(busca.toLowerCase())
            ) {
              console.log(
                biblioteca[i].titulo +
                  " - " +
                  biblioteca[i].autor +
                  " (" +
                  biblioteca[i].ano +
                  ")",
              );

              encontrado = true;
            }
          }

          if (!encontrado) {
            console.log("Nenhum livro encontrado.");
          }

          menu(); // volta para o menu
        });
      }

      // MOSTRAR TODOS
      else if (opcao == 3) {
        for (let i = 0; i < biblioteca.length; i++) {
          console.log(
            biblioteca[i].titulo +
              " - " +
              biblioteca[i].autor +
              " (" +
              biblioteca[i].ano +
              ")",
          );
        }

        menu(); // volta para o menu
      }

      // SAIR
      else if (opcao == 4) {
        console.log("Encerrando...");
        rl.close();
      } else {
        console.log("Opção inválida.");
        menu();
      }
    },
  );
}

menu();
