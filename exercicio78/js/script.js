// Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente. 
let numero = parseInt(prompt("Digite um número inteiro: "));
let resto = 0
for(let i = 0; numero > 0; i++){
    resto = numero % 10
    alert(resto)
    numero = (numero - resto) / 10
}