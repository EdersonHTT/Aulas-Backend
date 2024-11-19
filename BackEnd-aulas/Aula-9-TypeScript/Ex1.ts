// Criar uma classe
class Pessoa{
    nome: string
    idade: number
    constructor(nome:string, idade:number){
        this.nome = nome
        this.idade = idade
    }
    // Método para apresentar
    apresentar():void{
        console.log(`Olá cpx, meu nome é ${this.nome} e tenho ${this.idade} anos de idade`)
    }
}

// Criando um objeto de classe pessoa
const pessoa1 = new Pessoa("Roberto", 130)

pessoa1.apresentar()
