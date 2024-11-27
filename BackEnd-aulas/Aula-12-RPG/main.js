"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ask = require("readline-sync");
var Mago_1 = require("./Mago");
var Guerreiro_1 = require("./Guerreiro");
var termino = false;
var guerreiro = new Guerreiro_1.Guerreiro("Roberto", 15, 3, 10);
var mago = new Mago_1.Mago("Patolino", 10, 7, 5);
do {
    console.clear();
    if (guerreiro.vida > 0) {
        ask.question("Guerreiro: ".concat(guerreiro.nome, "\nAtaca \nMago: ").concat(mago.nome));
        guerreiro.atacar(mago);
    }
    console.clear();
    if (mago.vida > 0) {
        ask.question("Mago: ".concat(mago.nome, "\nAtaca Guerreiro: ").concat(guerreiro.nome));
        mago.atacar(guerreiro);
    }
    if (guerreiro.vida <= 0) {
        console.clear();
        ask.question("Mago ".concat(mago.nome, " Ganhou"));
        termino = true;
    }
    else if (mago.vida <= 0) {
        console.clear();
        ask.question("Guerreiro ".concat(guerreiro.nome, " Ganhou"));
        termino = true;
    }
} while (!termino);
