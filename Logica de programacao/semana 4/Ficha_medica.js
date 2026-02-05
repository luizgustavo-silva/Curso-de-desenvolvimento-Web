import readline from "readline-sync";

function calcularIMC(peso, altura) {
  return peso / altura ** 2;
}

function situacao(imc, nome) {
  if (imc < 18.5) {
    return `O paciente ${nome} está abaixo do peso.`;
  } else if (imc < 25) {
    return `O paciente ${nome} está no peso normal.`;
  } else if (imc < 30) {
    return `O paciente ${nome} está com sobrepeso.`;
  } else if (imc < 35) {
    return `O paciente ${nome} está com obesidade grau I.`;
  } else if (imc < 40) {w
    return `O paciente ${nome} está com obesidade grau II.`;
  } else {
    return `O paciente ${nome} está com obesidade grau III.`;
  }
}

const paciente = {
  nome: readline.question("Digite o nome do paciente: "),
  idade: readline.questionInt("Digite a idade do paciente: "),
  peso: readline.questionFloat("Digite o peso do paciente: "),
  altura: readline.questionFloat("Digite a altura do paciente: "),
  alergias: {},
};
let polen;
let abelhas;
let fruto_do_mar;
let pelos_animais;
let lactose;
(paciente.alergias.polen = readline.question("Vc tem alergia a polen? [S/N] ")), (paciente.alergias.polen = polen == "s" ? true : false);
(paciente.alergias.abelhas = readline.question("Vc tem alergia a abelhas? [S/N] ")), (paciente.alergias.abelhas = abelhas == "s" ? true : false);
(paciente.alergias.fruto_do_mar = readline.question("Vc tem alergia a frutos do mar? [S/N] ")), (paciente.alergias.fruto_do_mar = fruto_do_mar == "s" ? true : false);
(paciente.alergias.pelos_animais = readline.question("Vc tem alergia a pelos de animais? [S/N] ")), (paciente.alergias.pelos_animais = pelos_animais == "s" ? true : false);
(paciente.alergias.lactose = readline.question("Vc tem alergia a lactose? ")), (paciente.alergias = lactose == "s" ? true : false);

const imcCalculado = calcularIMC(paciente.peso, paciente.altura);
console.log(`Ficha do paciente:
                ${console.log(paciente.alergias)}`);
