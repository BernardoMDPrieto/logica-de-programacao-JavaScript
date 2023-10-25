//Crie um programa que leia o valor do depósito mensal em uma poupança e a taxa de juros
// mensal, e calcule o montante após 12 meses.
let meses = parseInt(prompt("Informe quantos meses irá deixar o dinheiro na poupança:"))
let depositoMensal = parseFloat(prompt("Informe quanto deseja aplicar por mês:"))
let juros = parseInt(prompt("Informe a porcentagem de juros da aplicação:"))
let montante = 0
let jurosFinal = 0
for(let i = 0;i < meses; i++){
    montante+=depositoMensal
    jurosFinal+=montante*(juros/100)
}
let total = montante + jurosFinal
alert(`Total: ${total} \n Meses de aplicação: ${meses}`)