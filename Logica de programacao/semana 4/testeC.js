import readline from "readline-sync";
console.log(`
    1 - Douglas
    2 - penis
    3 - cuzao 
`);
let answer = readline.questionInt("Qual vc quer? ");
if (answer === 1) {
  let douglas = {
    nome: "douglas",
    idade: 12,
    genero: "M",
    cpf: "5555555555555",
  };
  const final = douglas;
  console.log(`As informacoes sao:`);
  console.log(final);
}
