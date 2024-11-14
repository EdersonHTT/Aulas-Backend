class produto {
    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    exibir(){
        console.log(`Produto: ${this.nome}\nQuantidade: ${this.quantidade}\nPreço: ${this.preco}R$\nTotal: ${this.preco * this.quantidade}R$\n`)
    }
}

const oProduto = new produto("Pera", 3, 15)

oProduto.exibir()

