// Faça um programa que receba o salário base de um funcionário e calcule o seu salário líquido, 
// considerando que o funcionário recebe 5% de comissão sobre o salário base.
let salarioBase = parseInt(prompt("Informe o salário base do funcionario"))
let comissao = (salarioBase*5)/100
let salarioLiquido = salarioBase + comissao
alert(`O salário líquido do funcionário é de R$${salarioLiquido}`)