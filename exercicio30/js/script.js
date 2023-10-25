// Crie um programa que leia o número de maçãs compradas e exiba o valor total a ser pago. O preço das 
// maçãs é de R$ 0,50 cada se a quantidade for menor que 12 e R$ 0,40 cada se a quantidade for igual ou maior que 12.
let valor = 0
let quantidade = parseInt(prompt("Informe a quantidade de maçãs que deseja comprar:"))
if(quantidade < 12){
    valor = quantidade*0.50
}else{
    valor = quantidade*0.40
}
alert(`Total: R$${valor}`)