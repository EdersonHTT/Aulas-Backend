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
        return `${this.nome} está jogando no ataque\nNumero: ${this.numero}`
    }
}

class defesa extends jogador {
    jogar(){
        return `${this.nome} está jogando na defesa\nNumero: ${this.numero}`
    }
}

function jogar (jogando){
    jogando.forEach(jogadores => {
        console.log(jogadores.jogar()+"\n----------------------")
    });
}

jogar([new atacante("Willsom", 10), new defesa("Roberto", 2)])
