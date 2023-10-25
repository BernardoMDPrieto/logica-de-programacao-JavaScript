// Escreva um programa que leia o nome de um mês e exiba a quantidade de dias que 
// ele possui. Considere apenas meses válidos. 
let mes = prompt("Informe o mês:")
switch (mes){
    case "Janeiro":
        alert("31")
        break;
    case "Fevereiro":
        alert("28 e em ano bissexto 29")
        break;
    case "Março":
        alert("31")
        break;
    case "Abril":
        alert("30")
        break;
    case "Maio":
        alert("31")
        break;
    case "Junho":
        alert("30")
        break;
    case "Julho":
        alert("31")
        break;
    case "Agosto":
        alert("31")
        break;
    case "Setembro":
        alert("30")
        break;
    case "Outubro":
        alert("31")
        break;
    case "Novembro":
        alert("30")
        break;
    case "Dezembro":
        alert("31")
        break;
    default:
        alert("Nome de mês inválido")
        break;        
}