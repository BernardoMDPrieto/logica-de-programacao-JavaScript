// Escreva um programa que leia a idade de uma pessoa e exiba uma mensagem indicando se ela é criança, 
// adolescente, adulto ou idoso.
let idade = parseInt(prompt("Informe sua idade"))
if(idade < 0){
    alert("Valor inválido")
}else if(idade < 13){
    alert("O usuário é uma criança")
} else if( idade > 12 && idade < 20){
    alert("O usuário é um adolescente")
} else if(idade > 19 && idade < 60){
    alert("O usuário é um adulto")
} else{
    alert("O usuário é um idoso")
}