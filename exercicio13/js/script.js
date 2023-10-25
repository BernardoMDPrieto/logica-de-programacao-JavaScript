// Faça um programa que leia dois números inteiros e verifique se o primeiro é múltiplo do segundo.
let valorA = parseInt(prompt("Informe o primeiro valor"))
let valorB = parseInt(prompt("Informe o segundo valor"))
if(valorA%valorB == 0){
    alert(`O primeiro valor: ${valorA} é multiplo do segundo ${valorB}`)
} else{
    alert(`O primeiro valor: ${valorA} não é multiplo do segundo valor: ${valorB}`)
}