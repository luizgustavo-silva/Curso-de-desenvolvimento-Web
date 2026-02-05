const readlineSync = require('readline-sync');

let s = readlineSync.question("Qual sua senha? ");

if (s.length >= 8 && s.length <= 16) {
    console.log("senha forte!!");
}