import readline from 'readline-sync';
function crescente() {
   
    if (array <= maior && array <= meio) {
        menor = array
    } else if (array <= maior && array >= menor) {
        meio = array
    } else {
        maior = array
    }
    return;
}
let menor = -Infinity;
let meio = -Infinity;
let maior = -Infinity;
let array = [];
for (let i = 1; i <= 3; i++) {
    let n = readline.question(`Digit the ${i} number: `);
    array.push(n);
    crescente();
}
console.log(`${menor} ${meio} ${maior}`);