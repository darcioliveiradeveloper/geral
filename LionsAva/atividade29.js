const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", (num) => {

  num = Number(num);

  console.log("Tabuada:");

  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
  }

  rl.close();

});
