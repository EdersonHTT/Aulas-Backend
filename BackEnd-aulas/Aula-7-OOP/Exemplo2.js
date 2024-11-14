
class pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    exibir(){
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}`)
    }
}

const pessoa1 = new pessoa("Ederson", 16)
pessoa1.exibir()