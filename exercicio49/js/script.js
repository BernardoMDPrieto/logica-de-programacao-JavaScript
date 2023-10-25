// Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "while".
let contadora = 1; fatorial = 1
let numero = parseInt(prompt("Informe o valor"))
    while (contadora <= numero) {
        fatorial *= contadora;
        contadora++;
    }
    alert("O fatorial de " + numero + " é: " + fatorial);
