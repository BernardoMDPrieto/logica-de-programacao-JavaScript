// Faça um programa que leia um número inteiro e exiba a sua tabuada de multiplicação até o décimo valor.
let numero = parseInt(prompt("Informe o número"))
for (let i = 1; i < 11; i++){
    let resultado = numero*i
    alert(`${numero} X ${i} = ${resultado}`)
}