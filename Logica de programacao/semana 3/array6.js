import readline from 'readline-sync';
let qtd_p = readline.questionInt("Quantas pessoas tem na residencia?");

let s = [];
let soma = 0;

for (let i = 1; i <= qtd_p; i++) {
    let p = readline.questionFloat(`Quantos eh o salario da ${i} pessoa? `);
    s.push(p);
    soma += p
}

let d = soma / qtd_p;

if (d > 1500) {
    console.log("Nao pode receber o beneficio do programa.");
} else {
    console.log("Pode receber o auxilio do programa.");
}
console.log(`Renda per capita: R$${d.toFixed(2)}`);
