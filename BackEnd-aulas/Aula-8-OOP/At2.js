class treinoBase {
    constructor(treino, duracao, dificuldade){
        this.treino = treino
        this.duracao = duracao
        this.dificuldade = dificuldade
    }

    treinar(){
        console.log("30 minutos de levantamento. Difícel")
    }
}

class treinoPersonalizado extends treinoBase{
    constructor(treino, objetivo, duracao, dificuldade){
        super(treino, duracao, dificuldade)
        this.objetivo = objetivo
    }

    treinar(){
        console.log(`${this.duracao} minutos de ${this.treino} com o objetivo de ${this.objetivo}. \nDificuldade: ${this.dificuldade}`)
    }
}
let treino = new treinoPersonalizado("levantamento de peso", "ganhar", 20, "facil")
treino.treinar()