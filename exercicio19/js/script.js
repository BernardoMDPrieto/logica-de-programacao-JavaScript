// Faça um programa que receba três notas de um aluno e exiba se ele foi aprovado ou reprovado.
// A média para aprovação é 7.
let notaA = parseFloat(prompt("Informe a primeira nota do aluno"))
let notaB = parseFloat(prompt("Informe a segunda nota do aluno"))
let notaC = parseFloat(prompt("Informe a terceira nota do aluno"))
let media = (notaA+notaB+notaC)/3
if(media > 6){
    alert(` Nota: ${media} \n ALUNO APROVADO`)
} else{
    alert(` Nota: ${media} \n ALUNO REPROVADO`)
}  