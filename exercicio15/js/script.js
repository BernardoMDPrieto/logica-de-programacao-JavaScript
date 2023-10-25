// Crie um programa que leia o salário de um funcionário e calcule o novo salário com um aumento de 15%.
let salario = parseFloat(prompt("Informe o salário do funcionário"))
let novoSalario = salario + (salario*15)/100
alert(`O salário do funcionário passou de R$${salario} para  R$${novoSalario}`)