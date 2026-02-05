import readlineSync from 'readline-sync';
let impar = 0;
let par = 0;
for (let i = 1; i <= 5; i++) {
    let n = readlineSync.questionInt(`Digite o ${i} numero: `);
    if (n % 2 == 1) {
        impar++;
    }   else {
            par++;
        }
}
console.log(`O numero de pares foi de: ${par} \n O numero de impares foi de : ${impar}`);
