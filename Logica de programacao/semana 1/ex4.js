const readlineSync = require('readline-sync');  
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve,ms))
    }


async function main() {
var nome_titular = readlineSync.question("Qual o seu nome completo? ");
var numero_cartao = readlineSync.question("Qual o numero do cartao? ");
var validade_cartao = readlineSync.question("Qual a validade do cartao? (MM/AA");
var codigo_seguranca = readlineSync.question("Qual o codigo de seguranca? ");






console.log("Cartao cadastrando....");
await sleep (2000);
console.log("Nome completo: " + nome_titular);
console.log("Numero do cartao: " + numero_cartao);
console.log("Validade: " + validade_cartao);
console.log("Codigo de seguranca: " + codigo_seguranca);
console.log("Processo finalizado.");
}
main(); // chama a funcao principal