"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ryu_1 = require("./Ryu");
var Ken_1 = require("./Ken");
var Bison_1 = require("./Bison");
var Cammy_1 = require("./Cammy");
var Dee_Jay_1 = require("./Dee-Jay");
var Honda_1 = require("./Honda");
var Blanka_1 = require("./Blanka");
var Zangief_1 = require("./Zangief");
var ask = require("readline-sync");
function bot(bot, jogador) {
    var especial = 1;
    var atacou = false;
    do {
        switch (Math.floor(Math.random() * 4)) {
            case 1:
                console.clear();
<<<<<<< HEAD
                console.log("Bot:");
=======
                console.log("Bot:\n");
>>>>>>> 7ef68acfc32a6116c15823e61a763066c2f04f1e
                bot.golpeLeve(jogador);
                ask.question("Enter para continuar...");
                atacou = true;
                break;
            case 2:
                console.clear();
<<<<<<< HEAD
                console.log("Bot:");
=======
                console.log("Bot:\n");
>>>>>>> 7ef68acfc32a6116c15823e61a763066c2f04f1e
                bot.golpePesado(jogador);
                ask.question("Enter para continuar...");
                atacou = true;
                break;
            case 3:
                if (especial === 1) {
                    console.clear();
<<<<<<< HEAD
                    console.log("Bot:");
=======
                    console.log("Bot:\n");
>>>>>>> 7ef68acfc32a6116c15823e61a763066c2f04f1e
                    bot.golpeEspecial(jogador);
                    ask.question("Enter para continuar...");
                    especial -= 1;
                    atacou = true;
                }
                break;
        }
    } while (!atacou);
}
<<<<<<< HEAD
function main(jogador, inimigo) {
    console.clear();
    if (Number(ask.question("[P1] - ".concat(jogador.getNome(), " VS [Bot] - ").concat(inimigo.getNome(), "\n[1] - Lutar\n[2] - Sair\nDigite um numero: "))) === 1) {
=======
function main(p1, p2, computador) {
    console.clear();
    var menu = 0;
    if (computador) {
        menu = Number(ask.question("[P1] - ".concat(p1.getNome(), " VS ").concat(p2.getNome(), " - [Bot]\n\n[1] - Lutar\n[2] - Sair\n\nDigite um numero: ")));
    }
    else {
        menu = Number(ask.question("[P1] - ".concat(p1.getNome(), " VS ").concat(p2.getNome(), " - [P2]\n\n[1] - Lutar\n[2] - Sair\n\nDigite um numero: ")));
    }
    if (menu === 1) {
>>>>>>> 7ef68acfc32a6116c15823e61a763066c2f04f1e
        var fimBatalha = false;
        var uso = true;
        var especial = 1;
        do {
            uso = true;
            console.clear();
<<<<<<< HEAD
            if (jogador.getVida() > 0 && inimigo.getVida() > 0) {
                console.log("".concat(jogador.getNome(), " - Vida: ").concat(jogador.getVida(), "\n").concat(inimigo.getNome(), " - Vida: ").concat(inimigo.getVida()));
                var escolhaAtaque = Number(ask.question("\n\n[1] - Ataque Leve\n[2] - Ataque Pesado\n[3] - Ataque Especial - " + especial + "\n\nDigite um numero: "));
                if (jogador.getVida() > 0 && inimigo.getVida() > 0) {
                    switch (escolhaAtaque) {
                        case 1:
                            console.clear();
                            console.log("Jogador:");
                            jogador.golpeLeve(inimigo);
=======
            if (p1.getVida() > 0 && p2.getVida() > 0) {
                console.log("".concat(p1.getNome(), " - Vida: ").concat(p1.getVida(), "\n").concat(p2.getNome(), " - Vida: ").concat(p2.getVida()));
                if (!computador) {
                    console.log("\nP1:");
                }
                if (p1.getVida() > 0 && p2.getVida() > 0) {
                    switch (Number(ask.question("\n[1] - Ataque Leve\n[2] - Ataque Pesado\n[3] - Ataque Especial - " + especial + "\n\nDigite um numero: "))) {
                        case 1:
                            console.clear();
                            console.log("P1:\n");
                            p1.golpeLeve(p2);
>>>>>>> 7ef68acfc32a6116c15823e61a763066c2f04f1e
                            ask.question("Enter para continuar...");
                            break;
                        case 2:
                            console.clear();
<<<<<<< HEAD
                            console.log("Jogador:");
                            jogador.golpePesado(inimigo);
=======
                            console.log("P1:\n");
                            p1.golpePesado(p2);
>>>>>>> 7ef68acfc32a6116c15823e61a763066c2f04f1e
                            ask.question("Enter para continuar...");
                            break;
                        case 3:
                            if (especial === 1) {
                                console.clear();
<<<<<<< HEAD
                                console.log("Jogador:");
                                jogador.golpeEspecial(inimigo);
=======
                                console.log("P1:\n");
                                p1.golpeEspecial(p2);
>>>>>>> 7ef68acfc32a6116c15823e61a763066c2f04f1e
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
<<<<<<< HEAD
                    if (inimigo.getVida() <= 0) {
                        inimigo.setVida(0);
                    }
                }
                if (jogador.getVida() > 0 && inimigo.getVida() > 0 && uso) {
                    bot(inimigo, jogador);
                    if (jogador.getVida() <= 0) {
                        jogador.setVida(0);
=======
                    if (p2.getVida() <= 0) {
                        p2.setVida(0);
                    }
                }
                if (p1.getVida() > 0 && p2.getVida() > 0 && computador) {
                    bot(p2, p1);
                    if (p1.getVida() <= 0) {
                        p1.setVida(0);
                    }
                }
                if (p1.getVida() > 0 && p2.getVida() > 0 && !computador) {
                    console.clear();
                    console.log("".concat(p1.getNome(), " - Vida: ").concat(p1.getVida(), "\n").concat(p2.getNome(), " - Vida: ").concat(p2.getVida()));
                    console.log("\nP2:");
                    switch (Number(ask.question("\n[1] - Ataque Leve\n[2] - Ataque Pesado\n[3] - Ataque Especial - " + especial + "\n\nDigite um numero: "))) {
                        case 1:
                            console.clear();
                            console.log("P2:\n");
                            p2.golpeLeve(p1);
                            ask.question("Enter para continuar...");
                            break;
                        case 2:
                            console.clear();
                            console.log("P2:\n");
                            p2.golpePesado(p1);
                            ask.question("Enter para continuar...");
                            break;
                        case 3:
                            if (especial === 1) {
                                console.clear();
                                console.log("P2:\n");
                                p2.golpeEspecial(p1);
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
                    if (p1.getVida() <= 0) {
                        p1.setVida(0);
>>>>>>> 7ef68acfc32a6116c15823e61a763066c2f04f1e
                    }
                }
            }
            else {
                fimBatalha = true;
            }
        } while (!fimBatalha);
        console.clear();
<<<<<<< HEAD
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
=======
        if (p1.getVida() <= 0) {
            if (computador) {
                ask.question("=====================\n     Voce perdeu\n=====================\n\nEnter para ir a tela de inicio...");
            }
            else {
                ask.question("=====================\n     P1 Perdeu\n=====================\n\nEnter para ir a tela de inicio...");
            }
            inicio();
        }
        else {
            if (computador) {
                ask.question("=====================\n     Voce Ganhou\n=====================\n\nEnter para ir a tela de inicio...");
            }
            else {
                ask.question("=====================\n     P2 Perdeu\n=====================\n\nEnter para ir a tela de inicio...");
            }
            inicio();
        }
    }
    else {
        inicio();
    }
}
function inimigoAleatorio(jogador) {
    var personagens = [new Ryu_1.Ryu(), new Ken_1.Ken(), new Bison_1.Bison, new Honda_1.Honda, new Zangief_1.Zangief, new Dee_Jay_1.DeeJay, new Cammy_1.Cammy, new Blanka_1.Blanka];
    var refazer = false;
    do {
        var nu = Number(Math.floor(Math.random() * 3));
        if (jogador.getNome() != personagens[nu].getNome()) {
            refazer = false;
            main(jogador, personagens[nu], true);
        }
        else {
            refazer = true;
        }
    } while (refazer);
}
function escolhaPerson(selecao) {
    var personagens = [new Ryu_1.Ryu(), new Ken_1.Ken(), new Bison_1.Bison, new Honda_1.Honda, new Zangief_1.Zangief, new Dee_Jay_1.DeeJay, new Cammy_1.Cammy, new Blanka_1.Blanka];
    console.clear();
    if (selecao === 1) {
        inimigoAleatorio(personagens[Number(ask.question("Escolher Personagem\n\n[1] - Ryu\n[2] - Ken\n[3] - Bison\n[4] - Honda\n[5] - Zangief\n[6] - Dee Jay\n[7] - Cammy\n[8] - Blanka\n\nEscolha: ")) - 1]);
    }
    else {
        var p1 = Number(ask.question("---> P1\n\nEscolher Personagem\n\n[1] - Ryu\n[2] - Ken\n[3] - Bison\n[4] - Honda\n[5] - Zangief\n[6] - Dee Jay\n[7] - Cammy\n[8] - Blanka\n\nEscolha: ")) - 1;
        console.clear();
        var p2 = Number(ask.question("---> P2\n\nEscolher Personagem\n\n[1] - Ryu\n[2] - Ken\n[3] - Bison\n[4] - Honda\n[5] - Zangief\n[6] - Dee Jay\n[7] - Cammy\n[8] - Blanka\n\nEscolha: ")) - 1;
        main(personagens[p1], personagens[p2], false);
>>>>>>> 7ef68acfc32a6116c15823e61a763066c2f04f1e
    }
}
function inicio() {
    console.clear();
    var nu = Number(ask.question("[1] -----Jogar Contra Bot-----\n\n[2] ------2 Jogadores------\n\n[3] ---------Sair---------\n\nEscolha: "));
    if (nu === 1) {
        escolhaPerson(1);
    }
    else if (nu === 2) {
        escolhaPerson(2);
    }
}
inicio();
