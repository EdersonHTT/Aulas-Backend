const ask = require("readline-sync")

import { Mago } from "./Mago"
import { Guerreiro } from "./Guerreiro"

let termino:boolean = false
const guerreiro = new Guerreiro("Roberto", 15, 3, 10)
const mago = new Mago("Patolino", 10, 7, 5)

do{
    console.clear()

    if (guerreiro.vida > 0){
        ask.question(`Guerreiro: ${guerreiro.nome}\nAtaca \nMago: ${mago.nome}`)
        guerreiro.atacar(mago)
    }
    console.clear()

    if (mago.vida > 0){
        ask.question(`Mago: ${mago.nome}\nAtaca \Guerreiro: ${guerreiro.nome}`)
        mago.atacar(guerreiro)
    }

    if (guerreiro.vida <= 0) {
        console.clear()
        ask.question(`Mago ${mago.nome} Ganhou`)
        termino = true
    } else if(mago.vida <= 0){
        console.clear()
        ask.question(`Guerreiro ${guerreiro.nome} Ganhou`)
        termino = true
    }
}while(!termino)