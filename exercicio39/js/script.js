// Faça um programa que leia 5 números inteiros usando o loop "while" e exiba a média aritmética dos valores lidos.
let contadora = 0; numero = 0; acumuladora = 0
while (contadora < 5) {
    numero = parseInt(prompt("Informe um valor"))
    acumuladora+=numero
    contadora++
}
    numero = acumuladora/5
    alert(numero)