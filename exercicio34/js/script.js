// Faça um programa que leia a idade de uma pessoa e exiba se ela pode ou não votar. O voto é obrigatório 
// para pessoas entre 18 e 70 anos, e facultativo para pessoas entre 16 e 18 anos e com mais de 70 anos.
let idade = parseInt(prompt("Informe a idade"))
if(idade < 16){
    alert("Não pode votar")
} else if(idade > 15 && idade < 18 || idade > 70){
    alert("Voto facultativo")
} else if(idade > 17 && idade < 71){
    alert("Voto obrigatório")
}