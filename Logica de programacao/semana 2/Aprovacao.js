const readlineSync = require('readline-sync');

function aprovacao(rendacomprov, clienteAnt, clientePre, nomeN) {
    rendacomprov = rendacomprov.toUpperCase();
    clienteAnt = Number(clienteAnt);
    clientePre = clientePre.toUpperCase();
    nomeN = nomeN.toUpperCase();

    if ((rendacomprov !== "S" && rendacomprov !== "N") || (clientePre !== "S" && clientePre !== "N") || (nomeN !== "S" && nomeN !== "N")) {
        return "Valores invalidos."
    } else if (nomeN === "S") {
        return "Voce nao foi aprovado!";
    } else if (rendacomprov === "S" || (clienteAnt >= 5 && clientePre === "S")) {
        return "Voce foi aprovado para emprestimos.";
    } else {
        return "Voce nao foi aprovado para emprestimos.";
    }
}
let nN = readlineSync.question("Seu nome eh negativado? (S/N): ");
let rC = readlineSync.question("Sua renda eh comprovada? (S/N): ");
let cA = readlineSync.questionInt("Quantos anos vc ja esta inscrito no banco? ");
let cP = readlineSync.question("Voce eh vip? (S/N) ");

const r = aprovacao(rC, cA, cP, nN);

console.log(r)