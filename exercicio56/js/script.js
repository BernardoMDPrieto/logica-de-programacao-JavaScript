// Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "do-while".
let numero = parseInt(prompt("Informe o valor"))
let divisor = 1
do{
    if(numero % divisor == 0){
        alert(divisor)
    }
    divisor++
}while (divisor <= numero)