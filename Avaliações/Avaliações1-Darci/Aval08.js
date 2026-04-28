/// Como utilizar rl.question
const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
});


const listaHobbies = []


rl.question("Digite o seu primeiro Hobbie: " , (input1) => {
    const hobbie1 = (input1);
    listaHobbies.push(hobbie1);

rl.question("Digite o seu segundo Hobbie: " , (input2) => {
    const hobbie2 = (input2);
    listaHobbies.push(hobbie2);

rl.question("Digite o seu terceiro Hobbie: " , (input3) => {
    const hobbie3 = (input3);
    listaHobbies.push(hobbie3);
             

console.log("Voce tem " + listaHobbies.length + ' Hobbies');
console.log("São estes: " + listaHobbies);



    rl.close();

})
})
})