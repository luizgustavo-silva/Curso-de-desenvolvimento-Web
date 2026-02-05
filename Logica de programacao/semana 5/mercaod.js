import readline from "readline-sync";
const qtd = readline.questionInt("Quantos produtos voce quer colocar na lista? ");
let listas = [];

for (let i = 1; i <= qtd; i++) {
  let nome = readline.question("qual o nome do produto? ");
  let qtdProduto = readline.questionInt(`Quantos ${nome} voce quer adicionar a lista? `);
  let lista = {
    nome: nome,
    quantidade: qtdProduto,
  };
  listas.push(lista);
}

const tamanho_produto_meio_lista = listas.length - 1;
const produto_meio_lista = parseInt(tamanho_produto_meio_lista / 2);

if (qtd > 2) {
  console.log(`O primeiro produto eh ${listas[0].nome}`);
  console.log(`O produto do meio eh ${produto_meio_lista}`);
  console.log(`O ultimo produto eh ${listas[tamanho_produto_meio_lista].nome}`);
} else if (qtd == 2) {
  console.log(`O primeiro produto eh ${listas[0].nome}`);
  console.log(`O ultimo produto eh ${listas[tamanho_produto_meio_lista].nome}`);
} else if (qtd == 1) {
  console.log(`O unico produto eh ${listas[0].nome}`);
} else {
  console.log(`Nao tem itens na lista.`);
}
