// Herança typescript
class animal {
    protected nome:string
    protected idade:number
    constructor(nome:string, idade:number){
        this.nome = nome
        this.idade = idade
    }

    public rugir():void{
        console.log(`O animal ${this.nome} com ${this.idade} anos ruge`)
    }

    public info():void{
        console.log(`animal ${this.nome} com ${this.idade} anos`)
    }
}

class gato extends animal {
    private raca: string
    constructor(nome:string, idade:number, raca:string){
        super(nome, idade)
        this.raca = raca
    }

    public rugir():void{
        super.info()
        console.log(`gato ${this.nome} com ${this.idade} anos da raça ${this.raca}\nmiau miau`)
    }
}

const gato1 = new gato("yoru", 1000, "gato grande")

gato1.rugir()