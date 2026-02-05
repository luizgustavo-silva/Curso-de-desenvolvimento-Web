const readlineSync = require('readline-sync');

function calcularMedia(soma) {
    return soma / 4;
}

function notaAluno(media) {
    if (media < 5) {
        return "Você foi reprovado.";
    } else if (media >= 5 && media <= 6.9) {
        return "Você foi suficiente.";
    } else if (media >= 7 && media <= 8.9) {
        return "Você tirou notas boas!";
    } else {
        return "Você tirou nota máxima, parabéns!!";
    }
}

let somaNotas = 0;

for (let i = 1; i <= 4; i++) {
    const nota = readlineSync.questionFloat(`Digite sua ${i}ª nota: `);
    somaNotas += nota;
}

const media = calcularMedia(somaNotas);
const resultado = notaAluno(media);

console.log(resultado);
console.log(`Sua média foi de ${media.toFixed(1)}`);