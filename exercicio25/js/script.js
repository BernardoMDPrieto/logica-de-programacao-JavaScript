// Faça um programa que leia o número de faltas de um aluno em uma disciplina e exiba sua situação. 
// Se o número de faltas for maior que 15, ele é reprovado por falta.
let faltas = parseInt(prompt("Informe as faltas do aluno em uma matéria"))
if(faltas > 15){
    alert("Reprovado")
} else{
    alert("Aprovado")
}