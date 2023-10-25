// Crie um programa que leia o nome e o turno (M ou V) de um aluno e exiba uma mensagem de saudação de 
// acordo com o turno. Matutino: "Bom dia, aluno", Vespertino: "Boa tarde, aluno".
let periodo = prompt("Informe o período: Matutino ou Vespertino (M/V)")
switch (periodo) {
    case "M":
        alert("Bom dia, aluno")
        break;
    case "V":
        alert("Boa tarde, aluno")
        break;
    default:
        alert("Entrada inválida!")
        break;
}