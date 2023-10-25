// Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor.
let numero = parseInt(prompt("Informe um valor"))
let resultado = 0
for(let contadora = 1; contadora < 11; contadora++){
    resultado = numero*contadora
    alert(`${numero} X ${contadora} = ${resultado}`)
}