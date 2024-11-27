"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alimento = void 0;
var Alimento = /** @class */ (function () {
    function Alimento(nome, valorCusto, taxa) {
        this.nome = nome;
        this.valorCusto = valorCusto;
        this.taxa = taxa;
    }
    Alimento.prototype.calcularValorTotal = function () {
        return this.taxa + this.valorCusto;
    };
    return Alimento;
}());
exports.Alimento = Alimento;
