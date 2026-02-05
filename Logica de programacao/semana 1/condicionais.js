const readlineSync = require('readline-sync');

function classificarAlunos(qtdAlunos) {
  let turmaInfantil = 0;
  let turmaA = 0;
  let turmaB = 0;
  let turmaC = 0;

  for (let i = 0; i < qtdAlunos; i++) {
    let idade = parseInt(readlineSync.question(`Qual a idade do aluno ${i + 1}? `));

    if (idade < 12) {
      turmaInfantil++;
    } else if (idade >= 12 && idade <= 14) {
      turmaA++;
    } else if (idade >= 15 && idade <= 17) {
      turmaB++;
    } else {
      turmaC++;
    }
  }

  console.log("\n📊 Resultado Final:");
  console.log("Total de alunos na Turma Infantil: " + turmaInfantil);
  console.log("Total de alunos na Turma A: " + turmaA);
  console.log("Total de alunos na Turma B: " + turmaB);
  console.log("Total de alunos na Turma C: " + turmaC);
}

// --- Programa principal ---
let qtd = parseInt(readlineSync.question("Quantos alunos deseja cadastrar? "));
classificarAlunos(qtd);