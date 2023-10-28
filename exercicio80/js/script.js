// Crie um programa que leia o nome e a idade de várias pessoas até que o nome "fim" 
// seja informado. Ao final, exiba a média das idades. 
let nome; idadeTotal = 0  
let contadora = 0
for(contadora = 0;nome != "fim";contadora++) {
    nome = prompt("Informar algum nome?")
    if(nome != "fim"){
    idade = parseInt(prompt("Informe a idade de " + nome ))
    idadeTotal+=idade
    }
}
let media = idadeTotal/contadora
alert(media)
