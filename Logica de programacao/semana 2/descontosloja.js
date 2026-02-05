const readlineSync = require('readline-sync');

console.log("Valor da Compra (valorTotal) |  Desconto Aplicado");
console.log("Maior ou igual a R$ 500      |  20% de desconto (VIP)");
console.log("Maior ou igual a R$ 200      |  10% de desconto (Padrao)");
console.log("Menor que R$ 200             |  Sem desconto");

let compra = readlineSync.questionFloat("Qual o valor da compra? ");

function descontocompra(valorCompra) {
    let d = 0;
    if (valorCompra >= 500) {
        d = 20;
    } else if (valorCompra >= 200) {
        d = 10;
    } else {
        d = 0;
    }
    const valorTot = valorCompra - (valorCompra * d) / 100;
    return { valorTot, d };
}

const resultado = descontocompra(compra);
console.log(`Desconto aplicado: ${resultado.d}%`);
console.log(`Preco final: R$ ${resultado.valorTot.toFixed(2)}`);