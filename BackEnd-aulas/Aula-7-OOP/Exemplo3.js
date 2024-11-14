class Trasporte {
    constructor(transport){
        this.transport = transport
    }

    mover(){
        console.log("movendo")
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

// Intancias de carro e avião
const carro1 = new carro ("AZUL")
const aviao1 = new aviao (779)

// chamando o método mover() para cada intância
carro1.mover()
aviao1.mover() 