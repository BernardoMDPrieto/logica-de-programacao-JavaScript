// Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "while".
let numero = parseInt(prompt("Informe um valor"))
let resto = 0
while (numero > 0) {
    resto = numero % 10
    alert(resto)
    numero = (numero - resto) / 10
}