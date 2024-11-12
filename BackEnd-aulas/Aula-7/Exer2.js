class anime {
    constructor(nome, lancamento){
        this.nome = nome
        this.lancamento = lancamento
    }

    exibir(){
        console.log(`Anime: ${this.nome}\nLançamento: ${this.lancamento}\n`)
    }
}

const qualAnime1 = new anime("Bleach", 2001)
const qualAnime2 = new anime("Gleipnir", 2020)

qualAnime1.exibir()
qualAnime2.exibir()