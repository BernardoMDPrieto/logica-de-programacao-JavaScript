// Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário.
let contadora = 1; fatorial = 1
let numero = parseInt(prompt("Informe o valor"))
    for(contadora = 1; contadora <= numero; contadora++) {
        fatorial *= contadora;
    }
    alert("O fatorial de " + numero + " é: " + fatorial);
