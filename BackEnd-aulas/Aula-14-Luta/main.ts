import { Ryu } from "./Ryu";
import { Ken } from "./Ken";
import { Personagem } from "./Personagem";

const ask = require("readline-sync")

function main (jogador: Personagem, inimigo: Personagem){
    console.clear()
    if(Number(ask.question(`${jogador.getNome()} VS ${inimigo.getNome()}\n[1] - Lutar\n[2] - Sair`)) === 1){
        let fimBatalha: string = "continua"
        do{
            console.clear()
            console.log(`${jogador.getNome()} - Vida: ${jogador.getVida()}\n${inimigo.getNome()} - Vida: ${inimigo.getVida()}`)
            if(jogador.getVida() > 0 && inimigo.getVida() > 0){
                switch(Number(ask.question("\n\n[1] - Ataque Leve\n[1] - Ataque Pesado\n[1] - Ataque Especial"))){
                    case 1:
                        jogador.golpeLeve(inimigo)
                        inimigo.golpeLeve(jogador)
                        break
                    case 2:
                        jogador.golpePesado(inimigo)
                        inimigo.golpePesado(jogador)
                        break
                    case 3:
                        jogador.golpeEspecial(inimigo)
                        inimigo.golpeEspecial(jogador)
                        break
                }
            }else{
                fimBatalha = "acabou"
            }
        }while(fimBatalha != "acabou")
        if(jogador.getVida() <=0){
            ask.question()
        }
    } else {
        (escolhaPerson())
    }
}

function inimigoAleatorio(jogador: Personagem): void{
    let personagens: Array<Personagem> = [new Ryu(), new Ryu()]
    let refazer:string = "não"
    do{
        
        switch(Number(Math.floor(Math.random()*2))){
            case 1:
                if(jogador != personagens[0]){
                    main(jogador, personagens[0])
                    refazer = "sim"
                }
                break
            case 2:
                if(jogador != personagens[1]){
                    main(jogador, personagens[1])
                    refazer = "sim"
                }
                break
        }
    }while(refazer != "sim")
}

function escolhaPerson(): void{
    
    switch(Number(ask.question("Escolher Personagem\n[1] - Ryu\n[2] - Ken\nEscolha: "))){
        case 1:
            inimigoAleatorio(new Ryu())
            break
        case 2:
            inimigoAleatorio(new Ken())
            break
    }
}

escolhaPerson()