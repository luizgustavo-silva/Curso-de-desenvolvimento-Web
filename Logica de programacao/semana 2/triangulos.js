const readlineSync = require('readline-sync');

function eqIsEs() {
    if (lados[0] + lados[1] <= lados[2]) {
        console.log("Os valores nao formam um triangulo");
    } else if (lados[0] === lados[1] && lados[1] === lados[2]) {
        console.log("O triângulo é equilátero.");
    } else if (lados[0] === lados[1] || lados[1] === lados[2] || lados[0] === lados[2]) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
}

let lados = [];

for (let i = 1; i <= 3; i++) {
    const valor = readlineSync.questionFloat(`Qual o ${i}º lado: `);
    if (valor <= 0) {
        console.log("Lado deve ser maior que zero. Digite novamente.");
        i--;
        continue;
    }
    lados.push(valor);
}

lados.sort((a, b) => a - b);

eqIsEs();