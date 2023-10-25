// Faça um programa que leia 5 números inteiros e exiba a média aritmética dos valores lidos.
let numero = 0; media = 0
for(let contadora = 0; contadora < 5; contadora++){
    numero = parseInt(prompt("Informe um valor"))
    media+=numero
}
    media/=5
    alert(media)