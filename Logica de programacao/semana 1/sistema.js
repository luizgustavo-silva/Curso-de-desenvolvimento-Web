const readlineSync = require('readline-sync');

function reajuste(d) {
    return ((salario_atual * d) / 100 + salario_atual);
}

let salario_atual = readlineSync.questionFloat("Qual o salario atual do funcionario?");
let d = readlineSync.questionFloat("Quantos % tem que reajustar o salario? ")

console.log("O novo salario do funcionario eh " + reajuste(d))