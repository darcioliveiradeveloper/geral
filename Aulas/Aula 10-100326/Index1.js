// Exemplo: Contando de 1 até 5
console.log("--- Iniciando o laço FOR ---");

for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}


// Exemplo: Diminuindo a energia até chegar a zero
console.log("--- Iniciando o laço WHILE ---");

let energia = 3;

while (energia > 0) {
    console.log("Energia atual: " + energia);
    energia--; // Importante: se não diminuir, o laço fica infinito!
}

console.log("Fim da bateria.");
