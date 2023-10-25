// Escreva um programa que leia a nota de um aluno em uma prova e exiba a sua conceituação conforme a tabela de notas.
let conceito
let notaProva = parseFloat(prompt("Informe a nota da prova do aluno"))
if(notaProva > 8.9 && notaProva < 11){
    conceito = "A"
}else if(notaProva < 9 && notaProva > 7.9){
    conceito = "B"
}else if(notaProva < 8 && notaProva > 6.9){
    conceito = "C"
}else if(notaProva < 7 && notaProva > 5.9){
    conceito = "D"
}else{
    conceito = "F"
}
alert(`Aluno conceito: ${conceito}`)