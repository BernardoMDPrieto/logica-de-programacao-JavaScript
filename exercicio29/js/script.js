// Escreva um programa que leia o nome e a nota de um aluno e exiba sua situação na disciplina. 
// Se a nota for maior ou igual a 7, o aluno está aprovado. Caso contrário, está em recuperação.
let nome = prompt("Infore o nome do aluno")
let nota = parseInt(prompt("Informe a nota do aluno"))
if(nota < 7){
    alert(` Aluno(a): ${nome} \n reprovado nessa matéria`)
}else{
    alert(` Aluno(a): ${nome} \n aprovado nessa matéria`)
}