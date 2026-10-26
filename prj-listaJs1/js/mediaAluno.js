var nota1 = prompt("Digite a primeira nota: ");
var nota2 = prompt("Digite a segunda nota: ");
var nota3 = prompt("Digite a teceira nota: ");

var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) /3;

if(media < 7){
    alert("Aluno REPROVADO");
    alert("Nota:" +media);
}
else{
    alert("Aluno APROVADO");
    alert("Nota:" +media);
}