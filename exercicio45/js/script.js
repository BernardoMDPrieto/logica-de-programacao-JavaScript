// Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "while".
let proximoNumero=0
let numero1 = 1
let numero2 = 1
alert(numero1)
alert(numero2)
let contadora = 1
while(contadora<21){
    proximoNumero = numero1+numero2
    alert(proximoNumero)
    numero1 = numero2
    numero2 = proximoNumero
    contadora++
}