const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let produtos = [];

rl.question("Nome do produto 1: ", (nome1) => {
  rl.question("Preço do produto 1: ", (preco1) => {
    rl.question("Quantidade em estoque: ", (qtd1) => {

      produtos.push({nome: nome1, preco: preco1, quantidade: qtd1});

      rl.question("Nome do produto 2: ", (nome2) => {
        rl.question("Preço do produto 2: ", (preco2) => {
          rl.question("Quantidade em estoque: ", (qtd2) => {

            produtos.push({nome: nome2, preco: preco2, quantidade: qtd2});

            rl.question("Nome do produto 3: ", (nome3) => {
              rl.question("Preço do produto 3: ", (preco3) => {
                rl.question("Quantidade em estoque: ", (qtd3) => {

                  produtos.push({nome: nome3, preco: preco3, quantidade: qtd3});

                  console.log("\nProdutos cadastrados:");
                  for (let i = 0; i < produtos.length; i++) {
                    console.log((i+1) + " - " + produtos[i].nome + " | Preço: R$ " + produtos[i].preco + " | Estoque: " + produtos[i].quantidade);
                  }

                  rl.close();

                });
              });
            });

          });
        });
      });

    });
  });
});
