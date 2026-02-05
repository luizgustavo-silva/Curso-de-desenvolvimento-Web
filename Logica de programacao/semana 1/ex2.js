const readlineSync = require('readline-sync');

var nome = readlineSync.question("Qual seu nome? ");
console.log("Hello, " + nome + "! Welcome to the programming world");