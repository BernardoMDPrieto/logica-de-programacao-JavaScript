// Faça um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC) 
// e a sua classificação. Considere a tabela de classificação do IMC.
let altura = parseFloat(prompt("Informe a sua altura"))
let peso = parseFloat(prompt("Informe seu peso"))
let imc = peso/altura**2
alert(imc)
if(imc < 18.5){
    alert("Abaixo do peso normal")
}else if(imc > 18.4 && imc < 25){
    alert("Peso normal")
}else if(imc > 24.9 && imc < 30){
    alert("excesso de peso")
}else if(imc > 29.9 && imc < 35){
    alert("Obesidade | ")
}else if(imc > 34.9 && imc < 40){
    alert("Obesidade || ")
}else if(imc > 39){
    alert("Obesidade |||")
}   