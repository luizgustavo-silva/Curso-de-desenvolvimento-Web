import readline from 'readline-sync';
let a = [];
for (let i = 1; i <= 3; i++) {
    let n = readline.question(`Qual o ${i} nome? `);
    a.push(n)
}
let length = a.length
let ultimo = length - 1
console.log(`O primeiro nome eh: ${a[0]} e o ultimo eh ${a[ultimo]}`);