class pessoa {
    #nome
    #idade

    constructor(nome, idade){
        this.#nome = nome
        this.#idade = idade
    }

    obterNome(){
        return `Nome: ${this.#nome}`
    }

    obterIdade(){
        return `Idade: ${this.#idade}`
    }

    definiridade(idade){
        if(idade > 0){
            this.#idade = idade
            return `Definido`
        }
        return `Coloque um valor valido`
    }
}

const pessoa1 = new pessoa("Ederson", 16)

console.log(pessoa1.obterNome())
console.log(pessoa1.obterIdade())
console.log(pessoa1.definiridade(-12))
console.log(pessoa1.obterIdade())
