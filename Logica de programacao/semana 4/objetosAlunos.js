import readline from "readline-sync";

let objeto_aluno = {
  nome: readline.question("Qual o nome do aluno: "),
  nome_matricula: readline.question("Qual o numero de matricula: "),
  media_final: readline.questionFloat("Qual a media final: "),
  curso: readline.question("Qual o curso: "),
};
if (objeto_aluno.media_final >= 7) {
  objeto_aluno.situacao = "Aprovado";
} else {
  objeto_aluno.situacao = "Reprovado";
}
console.log(objeto_aluno);
