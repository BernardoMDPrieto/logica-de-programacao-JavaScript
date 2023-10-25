// Crie um programa que leia a idade de uma pessoa e seu sexo (M ou F) e exiba uma mensagem indicando se ela pode ou não 
// se aposentar. Homens podem se aposentar com 65 anos ou mais, e mulheres com 60 anos ou mais. 
let idade = 0
let sexo = prompt("Informe o sexo da pessoa (M/F)")
switch (sexo){
    case "M":
        idade = parseInt(prompt("Informe a idade do funcionario"))
        if(idade>64){
            alert("O funcionario pode requerir aposentadoria")
        }else{
            alert("O funcionario não pode requerir aposentadoria")
        }
        break;
        case "F":
            idade = parseInt(prompt("Informe a idade da funcionaria"))
            if(idade>59){
                alert("A funcionaria pode requerir aposentadoria")
            }else{
                alert("A funcionaria não pode requerir aposentadoria")
            }
            break;  
        default:
            alert("Valor inválido")   
            break;       
}