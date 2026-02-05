
const readlineSync = require('readline-sync');

let peso = readlineSync.questionFloat("Digite seu peso em kg: ");
let altura = readlineSync.questionFloat("Digite sua altura em m: ");

function classificarImc(peso, altura) {
    if (peso <= 0 || altura <= 0) {
        return "Entrada inválida. Informe peso e altura maiores que zero.";
    }

    let imc = peso / (altura ** 2);
    let imcCertin = Number(imc.toFixed(2));

    if (imc < 18.5) {
        console.log("Você está abaixo do peso. Cuidado!");
    } else if (imc < 25) {
        console.log("Você está no peso normal. Parabéns!");
    } else if (imc < 30) {
        console.log("Você está com sobrepeso.");
    } else if (imc < 35) {
        console.log("Você está na obesidade grau I.");
    } else if (imc < 40) {
        console.log("Você está na obesidade grau II.");
    } else {
        console.log("Você está na obesidade grau III (mórbida). Cuidado!");
    }

    console.log(`O seu IMC é ${imcCertin}`);
    return imcCertin;
}

classificarImc(peso, altura);