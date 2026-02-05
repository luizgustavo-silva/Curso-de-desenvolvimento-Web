import readline from 'readline-sync';
let soma = 0;
let m = 0;
let idade = 0;
let all = [];
let maior = 0;
let menor = 0;
for (let i = 1; i <= 10; i++) {
    idade = readline.questionInt("Qual a sua idade? ");
    soma += idade
    all.push(idade);
    if (idade < 18) {
        menor++
    } else {
        maior++
    }
}
m = soma / 10;

let length = all.length

all.sort((a, b) => a - b);


console.log(`A menor idade foi: ${all[0]}`);
console.log(`A maior idade foi: ${all[length - 1]}`);
console.log(`A media das idades foi: ${m}`);
console.log(`O total de pessoas menores de idade foi: ${menor}`);
console.log(`O total de pessoas maiores de idade foi: ${maior}`);