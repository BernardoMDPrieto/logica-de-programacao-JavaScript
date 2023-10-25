// Crie um programa que leia o nome e a idade de várias pessoas usando o loop "while" 
// até que o nome "fim" seja informado. Ao final, exiba a média das idades.
let nome; idadeTotal = 0  
while (nome != "fim") {
    nome = prompt("Informar algum nome?")
    if(nome != "fim"){
    idade = parseInt(prompt("Informe a idade de " + nome ))
    idadeTotal+=idade
    }
}
alert(idadeTotal)
