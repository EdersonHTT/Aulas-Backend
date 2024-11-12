class lampada {
    ligar(){
        this.estado = "Ligado"
        console.log("Lâmpada Ligada")
    }

    desligado(){
        this.estado = "Desligado"
        console.log("Lâmpada Desligada")
    }
}

const novalampada = new lampada()

novalampada.ligar()
console.log(novalampada.estado)

setTimeout(()=>{
    novalampada.desligado()
    console.log(novalampada.estado)
}, 2000)