import { Ryu } from "./Ryu";
import { Ken } from "./Ken";
import { Bison } from "./Bison";
import { Cammy } from "./Cammy";
import { DeeJay } from "./Dee-Jay";
import { Honda } from "./Honda";
import { Blanka } from "./Blanka";
import { Zangief } from "./Zangief";
import { Personagem } from "./Personagem";

const ask = require("readline-sync")

function bot (bot: Personagem, jogador: Personagem){
    let especial:number = 1
    let atacou:boolean = false
    do{
        switch(Math.floor(Math.random()*4)){
            case 1:
                console.clear()
                console.log("Bot:\n")
                bot.golpeLeve(jogador)
                ask.question("Enter para continuar...")
                atacou = true
                break
            case 2:
                console.clear()
                console.log("Bot:\n")
                bot.golpePesado(jogador)
                ask.question("Enter para continuar...")
                atacou = true
                break
            case 3:
                if(especial === 1){
                    console.clear()
                    console.log("Bot:\n")
                    bot.golpeEspecial(jogador)
                    ask.question("Enter para continuar...")
                    especial -= 1 
                    atacou = true
                }
                break
        }  
    }while(!atacou) 
}

function main (p1: Personagem, p2: Personagem, computador: boolean){
    console.clear()
    let menu:number = 0
    if(computador){
        menu = Number(ask.question(`[P1] - ${p1.getNome()} VS ${p2.getNome()} - [Bot]\n\n[1] - Lutar\n[2] - Sair\n\nDigite um numero: `))
    } else {
        menu = Number(ask.question(`[P1] - ${p1.getNome()} VS ${p2.getNome()} - [P2]\n\n[1] - Lutar\n[2] - Sair\n\nDigite um numero: `))
    }
    if(menu === 1){
        let fimBatalha: boolean = false
        let uso1:boolean = true
        let uso2:boolean = true
        let especial1:number = 1
        let especial2:number = 1
        do{
            uso1 = true
            uso2 = true
            console.clear()
            if(p1.getVida() > 0 && p2.getVida() > 0){
                if(p1.getVida() > 0 && p2.getVida() > 0){
                    do{
                        console.log(`
${p1.getNome()}                 ${p2.getNome()}
Vida: ${p1.getVida()}           Vida: ${p2.getVida()}`)
                        if(!computador){
                            console.log("\nP1:")
                        }
                        switch(Number(ask.question("\n[1] - Ataque Leve\n[2] - Ataque Pesado\n[3] - Ataque Especial - "+ especial1 +"\n\nDigite um numero: "))){
                            case 1:
                                console.clear()
                                console.log("P1:\n") 
                                p1.golpeLeve(p2)
                                ask.question("Enter para continuar...")
                                uso1 = true
                                break
                            case 2:
                                console.clear()
                                console.log("P1:\n") 
                                p1.golpePesado(p2)
                                ask.question("Enter para continuar...")
                                uso1 = true
                                break
                            case 3:
                                if(especial1 === 1){
                                    console.clear()
                                    console.log("P1:\n") 
                                    p1.golpeEspecial(p2)
                                    ask.question("Enter para continuar...")
                                    especial1 -= 1 
                                } else {
                                    console.clear()
                                    ask.question("O ataque especial ja foi usado")
                                    console.clear()
                                    uso1 = false
                                }
                                break
                        }
                    }while(!uso1)
                    if(p2.getVida() <= 0){
                        p2.setVida(0)
                    }
                }
                if(p1.getVida() > 0 && p2.getVida() > 0 && computador){
                    bot(p2, p1)
                    if(p1.getVida() <= 0){
                        p1.setVida(0)
                    }
                }
                if(p1.getVida() > 0 && p2.getVida() > 0 && !computador){
                    console.clear()
                    do{
                        console.log(`
${p1.getNome()}                 ${p2.getNome()}
Vida: ${p1.getVida()}           Vida: ${p2.getVida()}`)
                        console.log("\nP2:")
                        switch(Number(ask.question("\n[1] - Ataque Leve\n[2] - Ataque Pesado\n[3] - Ataque Especial - "+ especial2 +"\n\nDigite um numero: "))){
                            case 1:
                                console.clear()
                                console.log("P2:\n") 
                                p2.golpeLeve(p1)
                                ask.question("Enter para continuar...")
                                uso2 = true
                                break
                            case 2:
                                console.clear()
                                console.log("P2:\n") 
                                p2.golpePesado(p1)
                                ask.question("Enter para continuar...")
                                uso2 = true
                                break
                            case 3:
                                if(especial2 === 1){
                                    console.clear()
                                    console.log("P2:\n") 
                                    p2.golpeEspecial(p1)
                                    ask.question("Enter para continuar...")
                                    especial2 -= 1 
                                } else {
                                    console.clear()
                                    ask.question("O ataque especial ja foi usado")
                                    console.clear
                                    uso2 = false
                                }
                                break
                        }
                    }while(!uso2)
                    if(p1.getVida() <= 0){
                        p1.setVida(0)
                    }
                }
            }else {
                fimBatalha = true
            }
        }while(!fimBatalha)
            console.clear()
        if(p1.getVida() <=0){
            if(computador){
                ask.question("=====================\n     Voce perdeu\n=====================\n\nEnter para ir a tela de inicio...")
            } else {
                ask.question("=====================\n     P2 Venceu\n=====================\n\nEnter para ir a tela de inicio...")
            }
            inicio()
        } else {
            if(computador){
                ask.question("=====================\n     Voce Ganhou\n=====================\n\nEnter para ir a tela de inicio...")
            } else {
                ask.question("=====================\n     P1 Venceu\n=====================\n\nEnter para ir a tela de inicio...")
            }
            inicio()
        }
    } else {
        inicio()
    }
}

function inimigoAleatorio(jogador: Personagem): void{
    let personagens: Array<Personagem> = [new Ryu(), new Ken(), new Bison, new Honda, new Zangief, new DeeJay, new Cammy, new Blanka]
    let refazer:boolean = false
    do{  
        const nu:number = Number(Math.floor(Math.random()*3))
        if(jogador.getNome() != personagens[nu].getNome()){
            refazer = false
            main(jogador, personagens[nu], true)
        } else {
            refazer = true
        }
    }while(refazer)
}

function escolhaPerson(selecao: number): void{
    let personagens: Array<Personagem> = [new Ryu(), new Ken(), new Bison, new Honda, new Zangief, new DeeJay, new Cammy, new Blanka]
    console.clear()
    if(selecao === 1){
        inimigoAleatorio(personagens[Number(ask.question("Escolher Personagem\n\n[1] - Ryu\n[2] - Ken\n[3] - Bison\n[4] - Honda\n[5] - Zangief\n[6] - Dee Jay\n[7] - Cammy\n[8] - Blanka\n\nEscolha: "))-1])
    } else {
        let p1:number = Number(ask.question("---> P1\n\nEscolher Personagem\n\n[1] - Ryu\n[2] - Ken\n[3] - Bison\n[4] - Honda\n[5] - Zangief\n[6] - Dee Jay\n[7] - Cammy\n[8] - Blanka\n\nEscolha: "))-1
        console.clear()
        let p2:number = Number(ask.question("---> P2\n\nEscolher Personagem\n\n[1] - Ryu\n[2] - Ken\n[3] - Bison\n[4] - Honda\n[5] - Zangief\n[6] - Dee Jay\n[7] - Cammy\n[8] - Blanka\n\nEscolha: "))-1
        main(personagens[p1], personagens[p2], false)
    }
}

function inicio (){
    console.clear()
    let nu:number = Number(ask.question(`
[1] ---Jogar Contra Bot---
[2] -----2 Jogadores------
[3] ---------Sair---------
    
    Escolha: `))
    if(nu === 1){
        escolhaPerson(1)
    } else if(nu === 2){
        escolhaPerson(2)
    } 
}

inicio ()