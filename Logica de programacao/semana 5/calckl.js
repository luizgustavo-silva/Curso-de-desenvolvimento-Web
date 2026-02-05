import readline from "readline-sync";

function mostrarMenu() {
  console.log(`
        |    Ingrediente           |    Calorias (kcal)        |
        | 1 -  Pao de hamburguer   |         150               |
        | 2 - Carne de hamburguer  |         200               |
        | 3 - Queijo cheddar       |         100               |
        | 4 - Bacon                |         80                |
        | 5 - Alface               |         5                 |
        | 6 - Tomate               |         10                |
        | 7 - Cebola               |         15                |
        | 8 - Maionese             |         50                |
        | 9 - Ketchup              |         20                |`);
}
function calcularKcal(answer, qtd) {
  const tabela = {
    1: 150,
    2: 200,
    3: 100,
    4: 80,
    5: 5,
    6: 10,
    7: 15,
    8: 50,
    9: 20,
  };
  return tabela[answer] * qtd;
}

let encerrar = false;
let total = 0;
mostrarMenu();
while (!encerrar) {
  let answer = readline.questionInt("Qual ingrediente voce quer? ");
  let qtd = readline.questionInt("Qual a quantidade? ");

  total += calcularKcal(answer, qtd);

  let encerrarOuContinuar = readline.question("Voce quer adicionar mais ingredientes? [S/N]");
  if (encerrarOuContinuar.toLowerCase() == "n") {
    encerrar = true;
  }
}
console.log(`O total de calorias foi ${total} kcal`);
