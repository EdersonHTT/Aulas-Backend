const nome = "Ederson"
const sobreNome = "da Silva Schmidt"
const idade = 16
const estudante = true

console.log(`nome: ${nome} ${sobreNome}\nidade: ${idade}\nestudante ${estudante}`)

let conteiner = document.getElementById("conteiner")
let body = document.getElementById("body")

conteiner.innerHTML = `nome: ${nome} ${sobreNome}\nidade: ${idade}\nestudante ${estudante}`

//2

let n1 = 3
let n2 = 4

let n3 = 3
let n4 = 5
let n5 = 2

let n6 = -1

body.innerHTML += `<p class="nu">2</p><div class="conteiner">3 + 4 = ${n1 + n2}<br> (3 x 5) : 2 = ${(n3 * n4) / n5}<br> (5 - 4) x -1 = ${(n4 - n2) * n6}<br> 234 % 5 = ${234 % n4}</div>`

body.innerHTML += `<p class="nu">3</p><div class="conteiner">1==2 = ${1==2}<br> 1 != 2 = ${1 != 2}<br> 1 < 2 = ${1 < 2}<br> 1 > 2 = ${1 > 2}</div>`

let nome1 = prompt("seu nome")
let idade1 = prompt("sua idade")

body.innerHTML += `<p class="nu">4</p><div class="conteiner">Nome: ${nome1}<br> Idade: ${idade1}<br> Maior de Idade: ${idade1 < 18}<br> Idade em 2050: ${Number(idade1) + 26}</div>`
