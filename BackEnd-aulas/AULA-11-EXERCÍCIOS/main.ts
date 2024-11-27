const readline = require("readline-sync")

import { livro } from "./Livro"
import { Eletronicos } from "./Eletronicos"
import { Alimento } from "./Alimentos"
import { Produtos } from "./Produto"
import { CartaoDeCredito } from "./CartaoDeCredito"
import { Pix } from "./Pix"
import { Dinheiro } from "./Dinheiro"

const cartaoDeCredito = new CartaoDeCredito()
const pix = new Pix()
const dinheiro = new Dinheiro()

function comprarProduto(tipo:number) {
    let a:Produtos
        switch(tipo){
        case 1:
            console.clear()
            a = new Alimento(readline.question("Qual Alimento?\nDigite: "), 8, 2)
            readline.question("Item adicionado: "+carrinho.push(a)+"\nEnter para prosseguir...")
            break
        case 2:
            a = new Eletronicos(readline.question("Qual Eletronico?\nDigite: "), 800, 20)
            readline.question("Item adicionado: "+carrinho.push(a)+"\nEnter para prosseguir...")
            break
        case 3:
            a = new livro(readline.question("Nome\nDigite: "), 10, 10)
            readline.question("Item adicionado: "+carrinho.push(a)+"\nEnter para prosseguir...")
            break
    }
}

function verCarrinho(){
    let total:number = 0
    for(let i in carrinho){
        console.log(`Produto: ${carrinho[i].nome} - ${carrinho[i].valorCusto}R$\nTaxa: ${carrinho[i].taxa}`)
        total += carrinho[i].valorCusto + carrinho[i].taxa
    }
    console.log("Total: "+ total)
    readline.question("Enter para prosseguir...")
}

function pagar(metodo:Number){
    switch(metodo){
        case 1:
            readline.question(pix.Pagar()+"\nEnter para prosseguir")
            ask = 4
            break
        case 2:
            readline.question(cartaoDeCredito.Pagar()+"\nEnter para prosseguir")
            ask = 4
            break
        case 3:
            readline.question(dinheiro.Pagar()+"\nEnter para proseguir")
            ask = 4
            break
    }
}

let carrinho: Array<Produtos> = []

let ask:number
do{
    console.clear()
    ask = Number(readline.question("[1] - Adicionar item no carrinho\n[2] - Ver carrinho\n[3] - Pagar\n[4] - Sair\nDigite um numero: "))
    switch(ask){
        case 1:
            console.clear()
            console.log(comprarProduto(ask = Number(readline.question("[1] - Alimentos\n[2] - Eletronico\n[3] - livro\nDigite um numero: "))))
            break
        case 2:
            console.clear()
            console.log(verCarrinho())
            break
        case 3:
            console.clear()
            console.log(pagar(ask = Number(readline.question("[1] - Pix\n[2] - Cartao\n[3] - Dinheiro\nDigite um numero: "))))
            break
    }
}while(ask != 4)