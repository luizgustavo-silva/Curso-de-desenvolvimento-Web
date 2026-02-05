Você disse:
import readline from 'readline-sync';
function exibirMenu() {
    console.log("| Instituicao   |   Curso                   |        Nota de corte      |");
    console.log("| UFAM          |   Enfermagem              |           861,51          |");
    console.log("| UFAM          |   Odontologia             |           870,62          |");
    console.log("| UFAM          |   Direito                 |           873,47          |");
    console.log("| IFCE          |   Eng.da computacao       |           888,46          |");
    console.log("| UNIFAP        |   Medicina                |           918,34          |");
    console.log("| UFPE          |   Quimica                 |           625,85          |");
    console.log("| UFPE          |   Medicina                |           854,48          |");
    console.log("| UFPE          |   Pedagogia               |           652,25          |");
    console.log("| UFPE          |   C.S                     |           715,56          |");
    console.log("| UFPE          |   Eng. de producao        |           671,32          |");
    console.log("| UFPE          |   Eng. Civil              |           691,15          |");
    console.log("| UFPE          |   Ciencias economicas     |           684,7           |");
}
function perguntas() {
    let l = readline.question("Qual foi sua nota em linguagens? ");
    let m = readline.question("Qual foi sua nota em matematica? ");
    let cH = readline.question("Qual foi sua nota em ciencias humanas? ");
    let cN = readline.question("Qual foi sua nota em ciencias da natureza? ");
    let r = readline.question("Qual foi sua nota em redacao? ");
}

let soma = l + m + cH + cN + r
let d = soma / 5
if (d >= 918.34) {
    console.log("Voce pode escolher qualquer curso.");
}
else if (d >= 888.46 && d < 918.34) {
    console.log("Voce pode escolher alguns, menos medicina.");
}
if (d >= 873.47 && d < 888.46) {
    console.log("Voce pode escolher alguns, menos medicina e engenharia da computacao.");
}
if (d >= 870.62 && d < 873.47) {
    console.log("Voce pode escolher alguns, menos medicina, engenharia da computacao e direito");
}
if (d >= 861.51 && d < 870.62) {
    console.log("Voce pode escolher alguns, menos medicina, engenharia da computacao, direito e odontologia")
}
if (d >= 854.48 && d < 861.51) {
    console.log("Voce pode escolher alguns, menos medicina, engenharia da computacao, direito, odontologia e")
}