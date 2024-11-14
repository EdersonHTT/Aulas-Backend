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
        return "Valor invalido"
    }

    //método público para acessar o saldo

    obterSaldo(){
        return `O saldo é ${this.#saldo}`
    }
}

const conta1 = new conta("João")

console.log(conta1.depositar(10))
console.log(conta1.obterSaldo())