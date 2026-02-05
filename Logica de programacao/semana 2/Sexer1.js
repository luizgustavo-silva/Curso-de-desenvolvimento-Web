const readlineSync = require('readline-sync');

function valida(sazonal, excesso) {
    sazonal = sazonal.toUpperCase();
    excesso = excesso.toUpperCase();

    if ((sazonal !== "S" && sazonal !== "N") || (excesso !== "S" && excesso !== "N")) {
        return "Entrada inválida";
    } else if (sazonal === "S" && excesso === "S" || p >= 80) {
        r = p * 0.10 + p
        return "Ganhou desconto!";
    } else {
        return "Nao ganhou desconto";
    }
}
let r = 0;
let p = readlineSync.questionFloat("Qual o preco do produto? ");
let pS = readlineSync.question("O produto eh sazonal? (S/N) ");
let pEE = readlineSync.question("O produto ta em excesso no estoque? (S/N) ");
const resultado = valida(pS, pEE);

console.log(resultado);
console.log(`O preco total foi de: $${r}`);