// Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido.
let numero = parseInt(prompt("Informe um valor"))
let contadora = 0; acumuladora = 0
for(contadora = 1;contadora < numero; contadora++){
    if(contadora % 2 == 0){
        acumuladora+=contadora
    }
}
alert(acumuladora)