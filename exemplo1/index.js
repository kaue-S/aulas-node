let aluno = "Zezin";
let nota1 = 7.8;
let nota2 = 6.4;
let media = (nota1 + nota2) / 2;

console.log(media);
console.log("========================");

let dados = {
    "nome": "Zezin",
    "idade": 45,
    "signo": "Peixe"
};

console.log(dados.nome);
console.table(dados);
console.log("========================");

if (media >= 7) {
    console.log(`O aluno ${aluno} está aprovado`);
} else {
    console.log(`O aluno ${aluno} está reprovado`);

}
console.log("========================");