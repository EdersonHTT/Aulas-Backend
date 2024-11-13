class conta {
    #saldo = 500

    constructor(nome){
        this.nome = nome
    }

    //método público para adcionar saldo

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor
            return `Depósito de R$ ${valor} realizado`
        }
    }

    //método público para acessar o saldo

    obterSaldo(){
        return `O saldo é ${this.#saldo}`
    }
}

const conta1 = new conta("João")

conta1.depositar(132213)

