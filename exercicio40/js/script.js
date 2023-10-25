// Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "while".
let numero = parseInt(prompt("Informe um valor"))
let contadora = 1
while(contadora < 11){
    let resultado = numero*contadora
    alert(`${numero} X ${contadora} = ${resultado}`)
    contadora
} 