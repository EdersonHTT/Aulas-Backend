"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ryu_1 = require("./Ryu");
var Ken_1 = require("./Ken");
var ask = require("readline-sync");
function main(jogador, inimigo) {
    console.clear();
    if (Number(ask.question("".concat(jogador.getNome(), " VS ").concat(inimigo.getNome(), "\n[1] - Lutar\n[2] - Sair"))) === 1) {
        var fimBatalha = "continua";
        do {
            console.clear();
            console.log("".concat(jogador.getNome(), " - Vida: ").concat(jogador.getVida(), "\n").concat(inimigo.getNome(), " - Vida: ").concat(inimigo.getVida()));
            if (jogador.getVida() > 0 && inimigo.getVida() > 0) {
                switch (Number(ask.question("\n\n[1] - Ataque Leve\n[1] - Ataque Pesado\n[1] - Ataque Especial"))) {
                    case 1:
                        jogador.golpeLeve(inimigo);
                        inimigo.golpeLeve(jogador);
                        break;
                    case 2:
                        jogador.golpePesado(inimigo);
                        inimigo.golpePesado(jogador);
                        break;
                    case 3:
                        jogador.golpeEspecial(inimigo);
                        inimigo.golpeEspecial(jogador);
                        break;
                }
            }
            else {
                fimBatalha = "acabou";
            }
        } while (fimBatalha != "acabou");
        if (jogador.getVida() <= 0) {
            ask.question();
        }
    }
    else {
        (escolhaPerson());
    }
}
function inimigoAleatorio(jogador) {
    var personagens = [new Ryu_1.Ryu(), new Ryu_1.Ryu()];
    var refazer = "não";
    do {
        switch (Number(Math.floor(Math.random() * 2))) {
            case 1:
                if (jogador != personagens[0]) {
                    main(jogador, personagens[0]);
                    refazer = "sim";
                }
                break;
            case 2:
                if (jogador != personagens[1]) {
                    main(jogador, personagens[1]);
                    refazer = "sim";
                }
                break;
        }
    } while (refazer != "sim");
}
function escolhaPerson() {
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
