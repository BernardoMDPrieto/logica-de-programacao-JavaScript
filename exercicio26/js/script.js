// Uma lista de produtos com cada produto com um preço e no final aparecer o valor total
// Escreva um programa que leia o código de um produto e a quantidade comprada, e exiba o valor total a ser pago. 
// Considere que cada produto tem um preço diferente.
let resposta
let valorTotal = 0
do{
    let codigo = parseInt(prompt("Informe o código do produto"))
    let quantidade = parseInt(prompt("Informe a quantidade que deseja comprar"))
    let valor = parseFloat(prompt("Informe o valor do produto"))
    valorTotal += (valor * quantidade)
    alert(`Total a pagar: R$${valorTotal}`)
    resposta = prompt("Continuar comprando? (s/n)")
}while(resposta != "n")

    