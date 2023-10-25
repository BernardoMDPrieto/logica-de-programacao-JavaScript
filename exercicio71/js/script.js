// Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número.
let numero = parseInt(prompt("Informe o valor"))
let divisor = 0
for(divisor = 1; divisor <= numero; divisor++){
    if(numero % divisor == 0){
        alert(divisor)
    }
}
