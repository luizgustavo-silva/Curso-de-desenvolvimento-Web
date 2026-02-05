import readline from 'readline-sync';

let array = [];

for (let i = 1; i <= 5; i++) {
    let list = readline.question(`What is the ${i} item? `);
    array.push(list);
}
console.log(`the items typed were ${array}`);
