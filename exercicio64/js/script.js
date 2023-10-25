// Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "do-while".
let contadora = 1; fatorial = 1
let numero = parseInt(prompt("Informe o valor"))
    do{
        fatorial *= contadora;
        contadora++;
    }while (contadora <= numero) 
    alert("O fatorial de " + numero + " é: " + fatorial);
