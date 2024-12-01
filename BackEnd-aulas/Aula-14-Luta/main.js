"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ryu_1 = require("./Ryu");
var Ken_1 = require("./Ken");
var ask = require("readline-sync");
function bot(bot, jogador) {
    var especial = 1;
    var atacou = false;
    do {
        switch (Math.floor(Math.random() * 4)) {
            case 1:
                console.clear();
                console.log("Bot:");
                bot.golpeLeve(jogador);
                ask.question("Enter para continuar...");
                atacou = true;
                break;
            case 2:
                console.clear();
                console.log("Bot:");
                bot.golpePesado(jogador);
                ask.question("Enter para continuar...");
                atacou = true;
                break;
            case 3:
                if (especial === 1) {
                    console.clear();
                    console.log("Bot:");
                    bot.golpeEspecial(jogador);
                    ask.question("Enter para continuar...");
                    especial -= 1;
                    atacou = true;
                }
                break;
        }
    } while (!atacou);
}
function main(jogador, inimigo) {
    console.clear();
    if (Number(ask.question("[P1] - ".concat(jogador.getNome(), " VS [Bot] - ").concat(inimigo.getNome(), "\n[1] - Lutar\n[2] - Sair\nDigite um numero: "))) === 1) {
        var fimBatalha = false;
        var uso = true;
        var especial = 1;
        do {
            uso = true;
            console.clear();
            if (jogador.getVida() > 0 && inimigo.getVida() > 0) {
                console.log("".concat(jogador.getNome(), " - Vida: ").concat(jogador.getVida(), "\n").concat(inimigo.getNome(), " - Vida: ").concat(inimigo.getVida()));
                var escolhaAtaque = Number(ask.question("\n\n[1] - Ataque Leve\n[2] - Ataque Pesado\n[3] - Ataque Especial - " + especial + "\n\nDigite um numero: "));
                if (jogador.getVida() > 0 && inimigo.getVida() > 0) {
                    switch (escolhaAtaque) {
                        case 1:
                            console.clear();
                            console.log("Jogador:");
                            jogador.golpeLeve(inimigo);
                            ask.question("Enter para continuar...");
                            break;
                        case 2:
                            console.clear();
                            console.log("Jogador:");
                            jogador.golpePesado(inimigo);
                            ask.question("Enter para continuar...");
                            break;
                        case 3:
                            if (especial === 1) {
                                console.clear();
                                console.log("Jogador:");
                                jogador.golpeEspecial(inimigo);
                                ask.question("Enter para continuar...");
                                especial -= 1;
                            }
                            else {
                                console.clear();
                                ask.question("O ataque especial ja foi usado");
                                uso = false;
                            }
                            break;
                    }
                    if (inimigo.getVida() <= 0) {
                        inimigo.setVida(0);
                    }
                }
                if (jogador.getVida() > 0 && inimigo.getVida() > 0 && uso) {
                    bot(inimigo, jogador);
                    if (jogador.getVida() <= 0) {
                        jogador.setVida(0);
                    }
                }
            }
            else {
                fimBatalha = true;
            }
        } while (!fimBatalha);
        console.clear();
        if (jogador.getVida() <= 0) {
            ask.question("=====================\n     Voce perdeu\n=====================\nEnter para ir a tela de inicio...");
            escolhaPerson();
        }
        else {
            ask.question("=====================\n     Voce Ganhou\n=====================\nEnter para ir a tela de inicio...");
            escolhaPerson();
        }
    }
    else {
        escolhaPerson();
    }
}
function inimigoAleatorio(jogador) {
    var personagens = [new Ryu_1.Ryu(), new Ken_1.Ken()];
    var refazer = false;
    do {
        var nu = Number(Math.floor(Math.random() * 3));
        switch (nu) {
            case 1:
                if (jogador.getNome() != personagens[0].getNome()) {
                    refazer = false;
                    main(jogador, personagens[0]);
                }
                else {
                    refazer = true;
                }
                break;
            case 2:
                if (jogador.getNome() != personagens[1].getNome()) {
                    refazer = false;
                    main(jogador, personagens[1]);
                }
                else {
                    refazer = true;
                }
                break;
            default:
                refazer = true;
                break;
        }
    } while (refazer);
}
function escolhaPerson() {
    console.clear();
    switch (Number(ask.question("Escolher Personagem\n[1] - Ryu\n[2] - Ken\nEscolha: "))) {
        case 1:
            inimigoAleatorio(new Ryu_1.Ryu());
            break;
        case 2:
            inimigoAleatorio(new Ken_1.Ken());
            break;
    }
}
escolhaPerson();
