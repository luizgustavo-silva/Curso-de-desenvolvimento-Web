const readlineSync = require('readline-sync');

function passouounao(soma) {
    let resultado = soma / 4;
    if (resultado >= 6) {
        console.log("Aprovado!!");
        console.log("Sua média foi " + resultado);
    } else {
        console.log("Reprovado!!");
        console.log("Sua média foi " + resultado);
    }
}

let soma = 0;

for (let i = 1; i < 5; i++) {
    let n = readlineSync.questionFloat(`Qual foi sua ${i}ª nota? `);
    soma += n;
}

passouounao(soma);