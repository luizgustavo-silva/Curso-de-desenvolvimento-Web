const readlineSync = require('readline-sync');

let letra = readlineSync.question("Digite uma letra: ");

function ehVogal(caractere) {
  caractere = caractere.toLowerCase();
  if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
    return true;
  } else {
    return false;
  }
}

if (ehVogal(letra)) {
  console.log("É uma vogal!");
} else {
  console.log("Não é uma vogal!");
}