// Crie um programa que leia a idade de um grupo de pessoas e exiba quantas são menores de
//  idade e quantas são maiores de idade.
let resposta
let maioresDeIdade = 0
let menoresDeIdade = 0
let totalPessoas = 0
do{
    let idade = parseInt(prompt("Informe a idade:"))

    if(idade > 17){
        maioresDeIdade++
    } else{
        menoresDeIdade++
    }
    totalPessoas++
    resposta = prompt("Deseja inserir a idade de mais uma pessoa? (s/n)")
}while(resposta != "n")
alert(` Total de pessoas do grupo: ${totalPessoas} \n Pessoas menores de idade: ${menoresDeIdade} \n Pessoas maiores de idade: ${maioresDeIdade}`)