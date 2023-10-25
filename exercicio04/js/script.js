let peso1 = 2
let peso2 = 3
let peso3 = 5
let nota1 = parseFloat(prompt("Informe a primeira nota do aluno"))
let nota2 = parseFloat(prompt("Informe a segunda nota do aluno"))
let nota3 = parseFloat(prompt("Informe a terceira nota do aluno"))
let nota = ((nota1 * peso1)+(nota2 * peso2)+(nota3 * peso3))/(peso1+peso2+peso3)
alert(`A media do aluno é de ${nota}`)