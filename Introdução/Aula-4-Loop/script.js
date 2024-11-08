
let conteiner = document.getElementById("conteiner")
let body = document.getElementById("body")

function olaMundo(){
    let pizza = ["fatia", "fatia", "fatia", "fatia", "fatia", "fatia", "fatia", "fatia", "fatia", "fatia", "fatia"]

    for(let x of pizza){
        conteiner.innerHTML += "<br>"+x
    }
    conteiner.innerHTML += "não tem mais pizza"
}

olaMundo()

//2 

body.innerHTML += `<p class="nu">2</p>`

function loop(){
    let turOrFal = true
    let numeros = []
    let nu
    let soma
    while(turOrFal){
        nu = prompt()
        if(nu != "0" ){
            numeros.push(nu)
        } else {
            turOrFal = false
        }
    }

    for(let x of numeros ){
        if(!soma){
            soma = Number(x)
        } else {
            soma += Number(x)
        }
    }

    return `os numeros são: ${numeros} <br>a soma é ${soma}`
}

body. innerHTML += `<div id="conteiner" class="conteiner">${loop()}</div>`
