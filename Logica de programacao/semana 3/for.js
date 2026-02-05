import readline from 'readline-sync';
function situacaoImc(p, a) {
    imc = p / (a ** 2);
    if (imc <= 18.5) {
        situacao = "Abaixo do peso! Cuidado!";
    } else if (imc >= 18.6 && imc <= 24.9) {
        situacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = "Obesidade grau I";
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = "Obesidade grau II";
    } else if (imc >= 40) {
        situacao = "Obesidade grau III, tome cuidado!";
    }
    return situacao;
}
let limite = readline.questionInt("Quantas pessoas vc quer atender? ");
let situacao;
let imc;
for (let i = 1; i <= limite; i++) {
    const n = readline.question("Qual o seu nome? ");
    let p = readline.questionFloat("Qual o seu peso? ");
    let a = readline.question("Qual a sua altura? ");
    situacaoImc(p, a);
    console.log(` Nome: ${n} \n Peso: ${p} \n Altura: ${a} \n O estado do paciente eh: ${situacao} \n O imc do paciente eh: ${imc.toFixed(2)}`);

}