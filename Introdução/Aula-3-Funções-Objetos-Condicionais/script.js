
let conteiner = document.getElementById("conteiner")
let body = document.getElementById("body")

function olaMundo(){
    let arr = ["O", "l", "a",","," ", "m", "u", "n", "d", "o", "!"]
    let frase

    for(let x of arr){
        if(!frase){
            frase = x
        } else {
            frase += x
        }
    }
    conteiner.innerHTML = frase
}

olaMundo()

//2

body.innerHTML += `<p class="nu">2</p>`

function calculo (nota1, nota2, nota3){
    media = (nota1 + nota2 + nota3)/3
    return media.toFixed(2)
}


body.innerHTML += `<div id="conteiner" class="conteiner">${calculo(8,10,4)}</div>`

//3

body.innerHTML += `<p class="nu">3</p>`

function pizzaClac (pizza, coca){
    let valorPraCada = (pizza + coca)/3
    return valorPraCada.toFixed(2)
}


body.innerHTML += `<div id="conteiner" class="conteiner">O valor para cada um pagar sera: ${pizzaClac(78,10)}</div>`

//3

body.innerHTML += `<p class="nu">4</p>`

let filme = {
    nome: "Carros",
    lancamento: 2006,
    elenco: ["Owen Wilson", "Larry the Cable Guy"],
    personagens: ["<br>- Relâmpago McQueen", "<br>- Mater"],
    viu: true,
    resumo: `"Carros" (2006) é um filme de animação produzido pela Pixar Animation Studios e distribuído pela Walt Disney Pictures. A história se passa no mundo de carros antropomorfizados, onde veículos vivem e interagem como seres humanos.

O protagonista é Relâmpago McQueen, um carro de corrida ambicioso, mas um tanto arrogante, que está em busca do título de campeão da Piston Cup. Durante uma viagem para a final do campeonato, McQueen acaba se perdendo e, por acidente, é levado à cidadezinha isolada de Radiator Springs. Lá, ele conhece diversos personagens, como o simpático Mate (um guincho rustico), a mecânica Sally e o veterano Doc Hudson, que tem um passado misterioso.

Enquanto McQueen tenta encontrar um jeito de sair da cidade para voltar à corrida, ele começa a aprender importantes lições sobre amizade, humildade e o valor de desacelerar, apreciando o que a vida tem a oferecer além da fama e do sucesso imediato. No final, McQueen entende que sua verdadeira vitória não está apenas nas corridas, mas nas relações e no crescimento pessoal.

O filme aborda temas como a superação do ego, a importância das raízes e da comunidade, e como encontrar equilíbrio entre o trabalho e a vida pessoal. "Carros" foi um grande sucesso e gerou duas sequências, além de uma série de produtos e atrações.`
}

if(filme.viu === true){
    filme.viu = "sim"
} else {
    filme.viu = "não"
}

filme.elenco[0] = "xuxa"

body.innerHTML += `<div id="conteiner" class="conteiner"><img id="ca" src="https://play-lh.googleusercontent.com/kHt8qbche40zkE6yZwA8IUe5ARINp4PjrJ5mi622GEzQFYWCaGTQDAl58rrRKRKyhnD2">Nome: ${filme.nome}<br>Lançamento: ${filme.lancamento}<br>Elenco: ${filme.personagens[0]} => ${filme.elenco[0]}${filme.personagens[1]} => ${filme.elenco[1]}<br>Visto: ${filme["viu"]}<br>Resumo: <p style="font-size: 15px; line-height: 15px;">${filme.resumo}</p></div>`

//3

body.innerHTML += `<p class="nu">5</p>`

function compoarar(nu1, nu2){
    if(Number(nu1) === Number(nu2)){
        div.innerHTML += "Sim"
    } else {
        div.innerHTML += "Não"
    }
}



let div = document.createElement("div")
let inp1 = document.createElement("input")
let inp2 = document.createElement("input")

body.appendChild(div)
div.appendChild(inp1)
div.appendChild(inp2)

inp1.type = "number"
inp2.type = "number"

inp1.id = "inp1"
inp2.id = "inp2"

div.id = "conteiner2"
div.className = "conteiner"

let nu1
let nu2

inp1.addEventListener("click", ()=>{
    alert(Number(inp1.value))
    nu1 = Number(inp1.value)
    
    nu2 = inp2.value
})
compoarar(nu1, nu2)
/*
//4

body.innerHTML += `<p class="nu">6</p>`

let inicial = prompt()

switch(inicial){
    case "1":
        body.innerHTML += `<div id="conteiner" class="conteiner">charmander</div>`
        break
    case "2":
        body.innerHTML += `<div id="conteiner" class="conteiner">bulbasour</div>`
        break
    case "3":
        body.innerHTML += `<div id="conteiner" class="conteiner">squirtle</div>`
        break
}


*/
