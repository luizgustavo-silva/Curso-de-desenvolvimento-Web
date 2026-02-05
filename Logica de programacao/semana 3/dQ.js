import readline from "readline-sync";

function for1() {
  for (let i = 0; i < 12; i++) {
    let lucro = readline.questionFloat(`Qual foi o lucro no mes de ${meses[i]}: `);
    lucros.push(lucro);
    soma += lucro;
  }
}

function for2() {
  for (let i = 1; i <= qtd_f; i++) {
    let salario_f = readline.questionFloat(`Qual eh o salario do ${i} funcionario? `);
    salarios.push(salario_f);
    soma2 += salario_f;
  }
}

function valida() {
  if (lucroAnual >= meta && media >= metaPorFuncionario) {
    console.log("A meta foi atingida, entao cada funcionario recebera o decimo quarto.");
    console.log(`Cada funcionario ira receber R$${decimoQuarto.toFixed(2)}`);
  } else {
    console.log("A meta nao foi atingida.");
  }
}

let meses = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let lucros = [];
let salarios = [];

let soma = 0;
let soma2 = 0;
let media = 0;

for1();

let qtd_f = readline.questionInt(`Qual a quantidade de funcionarios? `);

for2();

media = soma2 / qtd_f;

const meta = readline.questionFloat("Qual a meta anual do lucro da empresa? ");

let decimoQuarto = (soma / qtd_f) * 0.5;
let metaPorFuncionario = meta / qtd_f;

let lucroAnual = soma;

valida();
