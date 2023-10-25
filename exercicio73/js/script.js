// Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido.
let sequencia = parseInt(prompt("Informe até onde irá crescer a sequência"))
let proximoNumero=0
let numero1 = 1
let numero2 = 1
alert(numero1)
alert(numero2)
let contadora = 0
for(contadora = 1;contadora < sequencia;contadora++){
    proximoNumero = numero1+numero2
    alert(proximoNumero)
    numero1 = numero2
    numero2 = proximoNumero
}