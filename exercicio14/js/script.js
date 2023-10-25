// Escreva um programa que leia a idade de uma pessoa em anos, meses e dias, e calcule quantos dias de vida ela tem.
let anos = parseInt(prompt("Quantos anos você tem?"))
let meses = parseInt(prompt("Quantos meses você tem?"))
let dias = parseInt(prompt("Quantos dias você tem?"))
let diasTotais = (anos*365)+(meses*30)+dias
alert(diasTotais)