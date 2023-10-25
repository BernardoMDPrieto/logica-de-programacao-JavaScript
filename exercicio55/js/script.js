// Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo 
// valor usando o loop "do-while".
let contadora = 1; resultado = 0
let numero = parseInt(prompt("Informe um valor"))
do{
    resultado = numero*contadora
    alert(`${numero} X ${contadora} = ${resultado}`)
    contadora++
}while(contadora<11)