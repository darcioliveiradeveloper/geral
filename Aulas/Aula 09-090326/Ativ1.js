/// Como utilizar rl.question
const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
});


const listaTarefas = []


rl.question("Digite a sua primeira Tarefa: " , (input0) => {
 const tarefa1 = (input0);
 listaTarefas.push(tarefa1);

rl.question("Digite a sua segunda Tarefa: " , (input1) => {
 const tarefa2 = (input1);
 listaTarefas.push(tarefa2);

rl.question("Digite a sua terceira Tarefa: " , (input2) => {
 const tarefa3 = (input2);
 listaTarefas.push(tarefa3);
   

console.log("Voce tem " + listaTarefas.length + ' tarefas para realizar ainda');
console.log("São estas: " + listaTarefas);


rl.question("Voce deseja finalizar a ultima tarefa? ", (inputr) => {
    const removerTarefa = (inputr);

    if(removerTarefa =="sim"){
        listaTarefas.pop()
        console.log("Voce tem " + listaTarefas.length + ' tarefas para realizar ainda');
        console.log("São estas: " + listaTarefas);

    }else{
        console.log("Voce tem " + listaTarefas.length + ' tarefas para realizar ainda');
        console.log("São estas: " + listaTarefas);

}

    rl.close();

})
})
})
})