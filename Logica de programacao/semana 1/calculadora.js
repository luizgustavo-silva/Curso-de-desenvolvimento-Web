const readlineSync = require('readline-sync');

console.log("------ Calculadora ------");

let numero1 = readlineSync.questionInt("Qual o primeiro numero? ");
let numero2 = readlineSync.questionInt("Qual o segundo numero? ");
let operacao = readlineSync.question("Qual operacao voce deseja realizar? (+, -, x, /): ");

function calcularOperacao(numero1, numero2, operacao) {
    let resultado;
    switch (operacao) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case 'x':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
        default:
            console.log("Operacao invalida!");
            return null;
    }
    return resultado;
}

console.log("O resultado da operacao é: " + calcularOperacao(numero1, numero2, operacao));