// Escreva um programa que calcule a média aritmética entre três números reais inseridos pelo usuário. 
let valorTotal = 0; contadora = 1; mediaAritmetica = 0
do{
    let valor = parseInt(prompt("Informe o valor"))
    valorTotal+= valor    
    mediaAritmetica = valorTotal/3
    contadora++
}while(contadora < 4)
alert(`A média aritmética dos 3 valores é de ${mediaAritmetica}`)