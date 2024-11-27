"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var Livro_1 = require("./Livro");
var Eletronicos_1 = require("./Eletronicos");
var Alimentos_1 = require("./Alimentos");
var CartaoDeCredito_1 = require("./CartaoDeCredito");
var Pix_1 = require("./Pix");
var Dinheiro_1 = require("./Dinheiro");
var cartaoDeCredito = new CartaoDeCredito_1.CartaoDeCredito();
var pix = new Pix_1.Pix();
var dinheiro = new Dinheiro_1.Dinheiro();
function comprarProduto(tipo) {
    var a;
    switch (tipo) {
        case 1:
            console.clear();
            a = new Alimentos_1.Alimento(readline.question("Qual Alimento?\nDigite: "), 8, 2);
            readline.question("Item adicionado: " + carrinho.push(a) + "\nEnter para prosseguir...");
            break;
        case 2:
            a = new Eletronicos_1.Eletronicos(readline.question("Qual Eletronico?\nDigite: "), 800, 20);
            readline.question("Item adicionado: " + carrinho.push(a) + "\nEnter para prosseguir...");
            break;
        case 3:
            a = new Livro_1.livro(readline.question("Nome\nDigite: "), 10, 10);
            readline.question("Item adicionado: " + carrinho.push(a) + "\nEnter para prosseguir...");
            break;
    }
}
function verCarrinho() {
    var total = 0;
    for (var i in carrinho) {
        console.log("Produto: ".concat(carrinho[i].nome, " - ").concat(carrinho[i].valorCusto, "R$\nTaxa: ").concat(carrinho[i].taxa));
        total += carrinho[i].valorCusto + carrinho[i].taxa;
    }
    console.log("Total: " + total);
    readline.question("Enter para prosseguir...");
}
function pagar(metodo) {
    switch (metodo) {
        case 1:
            readline.question(pix.Pagar() + "\nEnter para prosseguir");
            ask = 4;
            break;
        case 2:
            readline.question(cartaoDeCredito.Pagar() + "\nEnter para prosseguir");
            ask = 4;
            break;
        case 3:
            readline.question(dinheiro.Pagar() + "\nEnter para proseguir");
            ask = 4;
            break;
    }
}
var carrinho = [];
var ask;
do {
    console.clear();
    ask = Number(readline.question("[1] - Adicionar item no carrinho\n[2] - Ver carrinho\n[3] - Pagar\n[4] - Sair\nDigite um numero: "));
    switch (ask) {
        case 1:
            console.clear();
            console.log(comprarProduto(ask = Number(readline.question("[1] - Alimentos\n[2] - Eletronico\n[3] - livro\nDigite um numero: "))));
            break;
        case 2:
            console.clear();
            console.log(verCarrinho());
            break;
        case 3:
            console.clear();
            console.log(pagar(ask = Number(readline.question("[1] - Pix\n[2] - Cartao\n[3] - Dinheiro\nDigite um numero: "))));
            break;
    }
} while (ask != 4);
