// Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci.
let proximoNumero=0
let numero1 = 1
let numero2 = 1
alert(numero1)
alert(numero2)
let contadora = 1
for(contadora = 1; contadora<21; contadora++){
    proximoNumero = numero1+numero2
    alert(proximoNumero)
    numero1 = numero2
    numero2 = proximoNumero
}