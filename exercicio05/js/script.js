//Escreva um programa que leia o preço de um produto e a quantidade comprada,
// e calcule o valor total a ser pago com desconto de 10% se a quantidade for maior que 10 unidades. 
let desconto = 0
let preco = parseFloat(prompt("Informe o preço do produto que deseja comprar!"))
let quantidade = parseInt(prompt("Informe a quantidade que deseja comprar!"))
if(quantidade > 10){
    desconto = ((preco*quantidade)*10)/100
}
let valorFinal = (preco*quantidade)-desconto
alert(`O valor final da compra é de R$${valorFinal}`)