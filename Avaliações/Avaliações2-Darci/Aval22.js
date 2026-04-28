const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let carrinho = [];

rl.question("Nome do produto 1: ", (nome1) => {
  rl.question("Preço: ", (preco1) => {
    rl.question("Quantidade: ", (qtd1) => {

      carrinho.push({nome: nome1, preco: Number(preco1), quantidade: Number(qtd1)});

      rl.question("Nome do produto 2: ", (nome2) => {
        rl.question("Preço: ", (preco2) => {
          rl.question("Quantidade: ", (qtd2) => {

            carrinho.push({nome: nome2, preco: Number(preco2), quantidade: Number(qtd2)});

            console.log("\nItens no carrinho:");

            let total = 0;

            for (let i = 0; i < carrinho.length; i++) {

              let subtotal = carrinho[i].preco * carrinho[i].quantidade;

              console.log(carrinho[i].nome + " | Preço: R$" + carrinho[i].preco + " | Quantidade: " + carrinho[i].quantidade + " | Subtotal: R$" + subtotal);

              total = total + subtotal;
            }

            console.log("\nTotal da compra: R$" + total);

            rl.close();

          });
        });
      });

    });
  });
});
