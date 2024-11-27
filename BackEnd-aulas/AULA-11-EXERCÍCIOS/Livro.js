"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livro = void 0;
var livro = /** @class */ (function () {
    function livro(nome, valorCusto, taxa) {
        this.nome = nome;
        this.taxa = taxa;
        this.valorCusto = valorCusto;
    }
    livro.prototype.calcularValorTotal = function () {
        return this.taxa + this.valorCusto;
    };
    return livro;
}());
exports.livro = livro;
