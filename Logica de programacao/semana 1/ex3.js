const readlineSync = require('readline-sync');
let c = 1;
while (c <= 6) {
    let cidade = readlineSync.question("Qual sua cidade? ");
    let sigla = readlineSync.question("Qual a sigla do seu estado? (Ex: SP)");
    console.log("a cidade " + cidade + " fica no estado " + sigla);
}