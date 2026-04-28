const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
});

const listaHobbies = []

rl.question("Digite seu primeiro Hobbie: " , (input0) => {
 const hobbie1 = (input0);
 listaHobbies.push(hobbie1);

rl.question("Digite seu segundo Hobbie: " , (input1) => {
 const hobbie2 = (input1);
 listaHobbies.push(hobbie2);

rl.question("Digite seu terceiro Hobbie: " , (input2) => {
 const hobbie3 = (input2);
 listaHobbies.push(hobbie3);
   

console.log("Voce tem " + listaHobbies.length + ' Hobbies para aproveitar');
console.log("São esses: " + listaHobbies);


})

    rl.close();

})
})
