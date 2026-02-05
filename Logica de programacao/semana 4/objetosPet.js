import readline from "readline-sync";

let pet = {
  nome: readline.question("Qual o nome do seu pet? "),
  peso: readline.questionFloat("Qual o peso do seu pet? "),
  corPelo: readline.question("Qual a cor da pelagem do seu pet? "),
  id: readline.questionInt("Qual a idade do seu pet? "),
};

let ref = readline.questionFloat("Qual o valor de referencia? ");
let limite = (pet.peso * 20) / 100;
let peso2 = limite + pet.peso;
if (peso2 > ref) {
  peso.obesidade = true;
  console.log("O pet esta na obesidade.");
} else {
  peso.obesidade = false;
  console.log("o pet esta na faixa normal de peso.");
}
