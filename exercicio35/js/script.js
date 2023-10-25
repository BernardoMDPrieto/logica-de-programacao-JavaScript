// Escreva um programa que leia três números inteiros e exiba a média aritmética. Se a média for maior ou igual a 7, 
// exiba a mensagem "Aprovado", caso contrário, exiba a mensagem "Reprovado".
let valor = 0; valorTotal = 0
for(let i = 0; i < 3; i++){
    valor = parseInt(prompt("Informe um valor"))
    valorTotal+=valor
}
valorTotal = valorTotal/3
if(valorTotal > 6){
    alert("Aprovado")
} else{
    alert("Reprovado")
}