class Trasporte {
    constructor(transport){
        this.transport = transport
    }

    voar(){
        console.log("voando")
    }
}

// Subclasse carro, que herda de transporte
class carro extends Trasporte {
    mover(){
        console.log(`O carro ${this.transport} anda`)
    }
}

//Subclasse avião, que também herda de transporte
class aviao extends Trasporte {
    mover(){
        console.log(`aviao ${this.transport} está andando`)
    }
}

// Intancia de carro e avião
const carro1 = new carro ("AZUL")
const carro2 = new carro ("preto")

carro1.mover()
carro2.mover()

const aviao1 = new aviao (779)

aviao1.mover()