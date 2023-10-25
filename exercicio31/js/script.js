// Faça um programa que leia o valor do salário-mínimo e o 
// salário de um funcionário, e exiba quantos salários-mínimos ele recebe.
let salarioFuncionario = parseFloat(prompt("Informe o salário do funcionário"))
let salarioMinimo = parseFloat(prompt("Informe quanto é o salário mínimo"))
let quantidade = salarioFuncionario/salarioMinimo
alert(`O funcionario recebe: R$${salarioFuncionario} equivalente a ${quantidade} salarios mínimos`)