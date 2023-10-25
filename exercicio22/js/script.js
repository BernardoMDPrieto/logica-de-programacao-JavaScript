// Faça um programa que receba o salário de um funcionário e exiba o valor do seu bônus. Se o salário 
// for maior que R$ 2000, o bônus é de 10%, caso contrário, é de 5%.
let salario = parseFloat(prompt("Informe o salário do funcionário"))
let bonus = 0
if(salario > 2000){
    bonus = (salario*10)/100
}else{
    bonus = (salario*5)/100
}
salario+=bonus
alert(`O valor final do salário do funcionário foi de R$${salario}`)