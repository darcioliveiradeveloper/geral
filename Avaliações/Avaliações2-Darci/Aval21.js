const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contatos = [];

rl.question("Nome do contato 1: ", (nome1) => {
  rl.question("Telefone: ", (tel1) => {
    rl.question("Cidade: ", (cid1) => {

      contatos.push({nome: nome1, telefone: tel1, cidade: cid1});

      rl.question("Nome do contato 2: ", (nome2) => {
        rl.question("Telefone: ", (tel2) => {
          rl.question("Cidade: ", (cid2) => {

            contatos.push({nome: nome2, telefone: tel2, cidade: cid2});

            rl.question("Nome do contato 3: ", (nome3) => {
              rl.question("Telefone: ", (tel3) => {
                rl.question("Cidade: ", (cid3) => {

                  contatos.push({nome: nome3, telefone: tel3, cidade: cid3});

                  console.log("\nLista de contatos:");

                  for (let i = 0; i < contatos.length; i++) {
                    console.log((i+1) + " - " + contatos[i].nome + " | Tel: " + contatos[i].telefone + " | Cidade: " + contatos[i].cidade);
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
