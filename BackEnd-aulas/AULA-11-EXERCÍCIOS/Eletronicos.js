"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronicos = void 0;
var Eletronicos = /** @class */ (function () {
    function Eletronicos(nome, valorCusto, taxa) {
        this.nome = nome;
        this.valorCusto = valorCusto;
        this.taxa = taxa;
    }
    Eletronicos.prototype.calcularValorTotal = function () {
        return this.taxa + this.valorCusto;
    };
    return Eletronicos;
}());
exports.Eletronicos = Eletronicos;
