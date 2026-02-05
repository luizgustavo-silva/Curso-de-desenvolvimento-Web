const readlineSync = require('readline-sync');  
var preco_produto = Number(readlineSync.question("Qual o preco do produto? R$: "))
var custo_frete = Number(readlineSync.question("Qual o custo do frete? R$: "))
var total = preco_produto + custo_frete
console.log("O preco do produto eh R$: " + preco_produto.toFixed(2))
console.log("O custo do frete eh R$: " + custo_frete.toFixed(2))
console.log("O preco total eh R$: " + total.toFixed(2))