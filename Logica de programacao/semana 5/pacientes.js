import readline from "readline-sync";

function mostrarMenu() {
  console.log(`
             |--------------- MENU ---------------|
             | 1 - cadastrar novo paciente        |
             | 2 - encerrar atendimento           |
             | 3 - mostrar pacientes              | 
`);
}

let patients = [];
let encerrar = false;

while (!encerrar) {
  mostrarMenu();
  let code = readline.questionInt("Qual processo vc escolhe? ");

  if (code == 1) {
    let patientName = readline.question("Qual o nome do paciente? ");
    let symptoms = readline.question("Qual o sintoma? ");
    let patient = {
      name: patientName,
      symptoms,
    };
    patients.push(patient);
    console.log(`Paciente cadastrado! 😉`);
  } else if (code == 2) {
    console.log(`Processo finalizado.`);
    encerrar = true;
    break;
  } else if (code == 3) {
    patients.forEach((p, index) => {
      console.log(`${index + 1}. Nome: ${p.name} | Sintoma: ${p.symptoms}`);
    });
    console.log("---------------------------\n");
  }

  let answer = readline.question("Vc quer fazer outro processo? [S/N] ");

  if (answer.toLowerCase() == "n") {
    console.log(`Processo finalizado.`);
    encerrar = true;
    break;
  }
}
