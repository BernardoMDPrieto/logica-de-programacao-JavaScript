// Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "while". 
let numero = parseInt(prompt("Informe o valor"))
let divisor = 1
while (divisor <= numero){
    if(numero % divisor == 0){
        alert(divisor)
    }
    divisor++
}
