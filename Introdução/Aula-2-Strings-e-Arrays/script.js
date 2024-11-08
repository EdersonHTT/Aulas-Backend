function a (){
    conteiner.textContent = `${document.getElementById("texto").value}`
}

let conteiner = document.getElementById("conteiner")
let body = document.getElementById("body")

let idade = 25

conteiner.innerHTML += `<label for="texto">Nome</label><input id="texto" type="text" name="texto" value="aa">`

let nomeTodo = "Ederson"

let texto = document.getElementById("texto")

window.addEventListener("keydown", a)

//2

const frase = "Hoje comi cenoura"

body.innerHTML += `<p class="nu">2</p>`

if(frase.includes("cenoura")){
    body.innerHTML += `<div id="conteiner" class="conteiner">"${frase}"<br>Tem cenoura na frase? Sim</div>`
} else {
    body.innerHTML += `<div id="conteiner" class="conteiner">"${frase}"<br>Tem cenoura na frase? Não</div>`
}


//2

let cachorros = ["pincher", "scoobDoo", "pitbull", "Inuyasha", "kon"]

body.innerHTML += `<p class="nu">3</p>`

body.innerHTML += `<div id="conteiner" class="conteiner">Cachorro: ${cachorros[0]}<br>Que eu gosto: ${cachorros[4]}<br>Tamanho array: ${cachorros.length}</div>`

//2

let roupas = ["camisa", "calças", "botas"]
let look = []

for(let x of roupas){
    look.push(x)
}

body.innerHTML += `<p class="nu">4</p>`

body.innerHTML += `<div id="conteiner" class="conteiner">Meu Look: ${look}</div>`

