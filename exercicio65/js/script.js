// Crie um programa que leia o nome e a idade de várias pessoas usando o loop "do-while" até que o nome "fim" 
// seja informado. Ao final, exiba a média das idades.
let nome; idadeTotal = 0  
do{
    nome = prompt("Informar algum nome?")
    if(nome != "fim"){
    idade = parseInt(prompt("Informe a idade de " + nome ))
    idadeTotal+=idade
    }
}while (nome != "fim") 
alert(idadeTotal)