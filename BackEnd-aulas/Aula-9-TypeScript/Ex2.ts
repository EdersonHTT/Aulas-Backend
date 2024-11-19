// Exemplo simples de soma 
function somar(nu1:number, nu2:number){// Tem que colocar o tipo no parametro, porque ele obrigatoriamente precisa
    return nu1 + nu2
}

// Criando variaveis com os valores
let nu1 = 100// Não há necessidade de tipo por conta que já tem no parametro da função
let nu2 = 100

// Exibir 
console.log(`${nu1} + ${nu2} = ${somar(nu1, nu2)}`)
