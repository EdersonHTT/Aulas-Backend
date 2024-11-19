class docera {
    #receitas = []
    #nuDoces = 0

    adicionar(receita){
        if(receita){
            this.#receitas.push(receita)
            return `Receita ${receita} adicionada`
        }
        return "Erro"
    }

    mostrarReceitas(){
        return `Receitas: ${this.#receitas}`
    }

    produzir(receita){
        if(this.#receitas.includes(receita)){
            this.#nuDoces += 1
            return `Receita encontrada`
        } else {
            return `Erro`
        }
    }

    total(){
        return `Receita numero: ${this.#nuDoces}`
    }

}

const doce = new docera()

console.log(doce.adicionar("morango"))
console.log(doce.mostrarReceitas())
console.log(doce.produzir("morango"))
console.log(doce.total())