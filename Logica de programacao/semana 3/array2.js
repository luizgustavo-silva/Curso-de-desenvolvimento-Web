import readline from 'readline-sync';
    
function one(condicao) {
    if (condicao == 1) {
        let qtd_p = readline.questionInt("Quantas pessoas você quer inserir? ");
        for (let i = 1; i <= qtd_p; i++) {
            let nome = readline.question(`Digite o nome da ${i}ª pessoa: `);
            comuns.push(nome);
        }
    }
}

function two(condicao) {
    if (condicao == 2) {
        if (exclusivos.length > 0) {
            let nome = exclusivos.shift();
            console.log(`Pessoa atendida (prioridade): ${nome}`);
        } else if (comuns.length > 0) {
            let nome = comuns.shift();
            console.log(`Pessoa atendida: ${nome}`);
        } else {
            console.log("Nenhuma pessoa na fila para atender.");
        }
    }
}

function three(condicao) {
    if (condicao == 3) {
        console.log(`\nFila de prioridade: ${exclusivos}`);
        console.log(`Fila comum: ${comuns}`);
        console.log("Fila completa:", [...exclusivos, ...comuns]);
    }
}
function four(condicao) {
    if (condicao == 4) {
        if (comuns.length > 0) {
            let nome = comuns.pop();
            console.log(`A última pessoa (${nome}) foi retirada.`);
        } else if (exclusivos.length > 0) {
            let nome = exclusivos.pop();
            console.log(`A última pessoa (${nome}) foi retirada.`);
        } else {
            console.log("Nenhuma pessoa na fila.");
        }
    }
}

function five(condicao) {
    if (condicao == 5) {
        let p = readline.question("Qual o nome da pessoa que é prioridade? ");
        exclusivos.push(p);
    }
}

function six(condicao) {
    if (condicao === 6) {
        console.log("Encerrando programa...");
        continuar = false;
    }
}

function other() {
    let p = readline.question(`Você quer fazer outra operação? [S/N] `);
    if (p.toLowerCase() !== "s") {
        continuar = false;
        console.log("Programa finalizado.");
    }
}
    let exclusivos = [];
    let comuns = [];
    let continuar = true;
while (continuar) {
    console.log("\n| 1 - Quer colocar uma pessoa no atendimento                   |");
    console.log("| 2 - Atender a pessoa no início da fila                       |");
    console.log("| 3 - Exibir a fila                                            |");
    console.log("| 4 - Retirar a última pessoa da fila por causa da desistência |");
    console.log("| 5 - Prioridade                                               |");
    console.log("| 6 - Finalizar                                                |");
    
    let condicao = readline.questionInt("Qual operação deseja fazer? ");

    one(condicao);
    two(condicao);
    three(condicao);
    four(condicao);
    five(condicao);
    six(condicao);

    if (continuar) {
        other();
    }
}