// Crie um programa que leia o nome e a idade de 5 pessoas e exiba a média das idades. 
let contadora = 0; idade = 0; media = 0
for(contadora = 0; contadora < 5; contadora++){
    idade = parseInt(prompt("informe uma idade"))
    media+=idade
}
    media=media/5
    alert(media)