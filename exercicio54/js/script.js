// Faça um programa que leia 5 números inteiros usando o loop "do-while" e exiba a média aritmética dos valores lidos.
let contadora = 0; media = 0
do{
    let valor = parseInt(prompt("Informe um valor"))
    media+=valor
    contadora++
}while(contadora<5)
    media = media/5
    alert("A média é " + media)