"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
var ask = require("readline-sync");
var Mago = /** @class */ (function () {
    function Mago(nome, vida, forca, defesa) {
        this._nome = nome;
        this._vida = vida;
        this.forca = forca;
        this.defesa = defesa;
    }
    Mago.prototype.atacar = function (inimigo) {
        console.clear();
        var dano = Math.floor(Math.random() * 10) - (inimigo.defesa / 3);
        ask.question("Bola de fogo - Dano: " + Number(Number(dano).toFixed(0)));
        inimigo.perderVida(Number(Number(dano).toFixed(0)));
    };
    Mago.prototype.perderVida = function (dano) {
        console.clear();
        this._vida -= dano;
        if (this._vida < 0) {
            this._vida = 0;
        }
        ask.question("".concat(this.nome, " - Vida: ").concat(this.vida));
    };
    Object.defineProperty(Mago.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mago.prototype, "vida", {
        get: function () {
            return this._vida;
        },
        set: function (vida) {
            this._vida = vida;
        },
        enumerable: false,
        configurable: true
    });
    return Mago;
}());
exports.Mago = Mago;
