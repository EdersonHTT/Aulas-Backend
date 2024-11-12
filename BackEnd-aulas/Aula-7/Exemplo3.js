// Subclasse carro, que herda de transporte
class carro extends Trasporte {
    mover(){
        console.log("O carro anda")
    }
}

//Subclasse avião, que também herda de transporte
class aviao extends Transporte {
    mover(){
        console.log("aviao esta andando")
    }
}

// Intancia de carro e aviao