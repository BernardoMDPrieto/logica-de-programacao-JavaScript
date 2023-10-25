// Escreva um programa que leia um número inteiro e exiba a soma de todos os números 
// pares entre 1 e o número lido usando o loop "while".
let numero = parseInt(prompt("Informe um valor"))
let contadora = 1; acumuladora = 0
while(contadora < numero){
    if(contadora % 2 == 0){
        acumuladora+=contadora
    }
    contadora++
}
alert(acumuladora)