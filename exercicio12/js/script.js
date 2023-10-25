//  Crie um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC).
let altura = parseFloat(prompt("Informe a sua altura"))
let peso = parseFloat(prompt("Informe seu peso"))
let imc = peso/altura**2
alert(imc)