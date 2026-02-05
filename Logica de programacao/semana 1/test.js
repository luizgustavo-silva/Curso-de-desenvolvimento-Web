const readlineSync = require('readline-sync');

function lanche(p, q) {
  if (p === "100") {
    return 1.20 * q;
  }
  else if (p === "101") {
    return 1.30 * q;
  }
  else if (p === "102") {
    return 1.50 * q;
  }
  else if (p === "103") {
    return 1.20 * q;
  }
  else if (p === "104") {
    return 1.30 * q;
  }
  else if (p === "105") {
    return 1.00 * q;
  }
  else {
    return "Codigo invalido!" 
  }
}

console.log("Especificacao     Codigo      Preco")
console.log("Cachorro Quente |  100   |    1,20" )
console.log("Bauru simples   |  101   |    1.30" )
console.log("Bauru com ovo   |  102   |    1,50" )
console.log("Hamburguer      |  103   |    1,20" )
console.log("Cheeseburguer   |  104   |    1,30" )
console.log("Refrigerante    |  105   |    1,00" )

let p = readlineSync.question("Qual lanche voce quer? Escolha pelo codigo: ");
let q = readlineSync.questionInt("Quantas unidades voce quer? ");
console.log("O preco total deu: " + lanche(p, q));
