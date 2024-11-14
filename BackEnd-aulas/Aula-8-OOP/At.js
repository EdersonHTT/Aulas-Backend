class animal {    
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log("o animal falou")
    }
}

class cachorro extends animal {
    constructor(nome){
        super(nome) 
    }

    falar(){
        console.log("o cachorro disse: AU AU")
    }
}

const cachorro1 = new cachorro("Pato")
cachorro1.falar()