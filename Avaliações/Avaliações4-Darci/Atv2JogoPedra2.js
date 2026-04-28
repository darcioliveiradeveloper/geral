const readline = require("readline");
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const opcoes = ["pedra", "papel", "tesoura", "lagarto", "spock"];
let p = 0;
let c = 0;

console.log("1 Pedra | 2 Papel | 3 Tesoura | 4 Lagarto | 5 Spock | Q sair");

process.stdin.on("keypress", (str, key) => {
  if (key.name === "q") {
    console.log("Placar Final:", p, "x", c);
    process.exit();
  }
  let j;
  if (str === "1") j = "pedra";
  if (str === "2") j = "papel";
  if (str === "3") j = "tesoura";
  if (str === "4") j = "lagarto";
  if (str === "5") j = "spock";
  if (!j) return;

  let cpu = opcoes[Math.floor(Math.random() * opcoes.length)];
  console.log("\nVocê:", j, "CPU:", cpu);

  if (j === cpu) console.log("Empate");
  else if (
    (j === "pedra" && cpu === "tesoura") ||
    (j === "pedra" && cpu === "lagarto") ||
    (j === "papel" && cpu === "pedra") ||
    (j === "papel" && cpu === "spock") ||
    (j === "tesoura" && cpu === "papel") ||
    (j === "tesoura" && cpu === "lagarto") ||
    (j === "lagarto" && cpu === "papel") ||
    (j === "lagarto" && cpu === "spock") ||
    (j === "spock" && cpu === "pedra") ||
    (j === "spock" && cpu === "tesoura")
  ) {
    p++;
    console.log("Você Ganhou");
  } else {
    c++;
    console.log("Você Perdeu");
  }
  console.log("Placar:", p, "x", c);
});
