import readlineSync from 'readline-sync';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function verificar(reclame) {
    let subs = reclame;
    let regexCPF = /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/g;

    if (reclame.toUpperCase().includes("BURLAR")) {
        subs = subs.replaceAll(/burlar/gi, "[ADULTERAR]");
    }
    if (reclame.toUpperCase().includes("BOBOCA")) {
        subs = subs.replaceAll(/boboca/gi, "[MAU-CARATER]");
    }
    if (reclame.toUpperCase().includes("PROCON")) {
        subs = subs.replaceAll(/procon/gi, "[NAO PODE CITAR EMPRESAS]");
    }
    if (regexCPF.test(reclame)) {
        subs = subs.replaceAll(regexCPF, "[NAO PODE CPF]");
    }

    console.log("...");
    await sleep(1000);
    console.log("Verificando reclamacao...");
    await sleep(2000);
    console.log("...");
    return subs;
}

console.log("--------------------- SISTEMA ABERTO ---------------------");

let reclame = readlineSync.question("Digite sua reclamacao: ");

console.log("MENSAGEM ENVIADA...");
let resultado = await verificar(reclame);

console.log(`Resultado: ${resultado}`);
