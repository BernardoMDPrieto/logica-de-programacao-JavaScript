// Faça um programa que leia um número inteiro e exiba se ele é um número primo.
let numero = parseInt(prompt("Digite um número:"));
var valor = 0;

for(valor = 2;valor < numero && numero % valor !== 0; valor++) {

}

if (valor == numero) {
    alert(numero + " é um número primo.");
} else {
    alert(`${numero} não é um número primo.`);
}