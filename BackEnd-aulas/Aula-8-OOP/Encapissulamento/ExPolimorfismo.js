class jogador {
    constructor(nome, numero){
        this.nome = nome
        this.numero = numero
    }

    jogar(){
        return "Ele joga"
    }
}

class atacante extends jogador {
    jogar(){
        return `${this.nome} está jogando\nNumero: ${this.numero}`
    }
}

const atacante1 = new atacante("Ronaldo", 10)

console.log(atacante1.jogar())
