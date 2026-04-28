const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let estoque = [];

rl.question("Produto: ", (nome) => {
  rl.question("Quantidade: ", (qtd) => {

    estoque.push({nome: nome, quantidade: Number(qtd)});

    console.log("\nProduto cadastrado:");

    for (let i = 0; i < estoque.length; i++) {
      console.log(estoque[i].nome + " | Quantidade: " + estoque[i].quantidade);
    }

    rl.close();

  });
});
