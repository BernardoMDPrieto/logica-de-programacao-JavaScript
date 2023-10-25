// Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "do-while" e exiba a média das idades.
let contadora = 0; idade = 0; media = 0
do{
    idade = parseInt(prompt("informe uma idade"))
    media+=idade
    contadora++
}while(contadora < 5)
    media=media/5
    alert(media)