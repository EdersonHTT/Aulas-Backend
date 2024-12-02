"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeeJay = void 0;
var DeeJay = /** @class */ (function () {
    function DeeJay() {
        this.nome = "Dee Jay";
        this.vida = 100;
        this.nacionalidade = "Angolano";
        this.estiloLuta = "Muay Thai Kickboxing";
    }
    DeeJay.prototype.golpeLeve = function (inimigo) {
        var dano = 0;
        while (dano < 5) {
            dano = Number(Math.floor(Math.random() * 10));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Leve e causou ".concat(dano, " de dano"));
    };
    DeeJay.prototype.golpePesado = function (inimigo) {
        var dano = 0;
        while (dano < 10) {
            dano = Number(Math.floor(Math.random() * 20));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Pesado e causou ".concat(dano, " de dano"));
    };
    DeeJay.prototype.golpeEspecial = function (inimigo) {
        var dano = 0;
        while (dano < 30) {
            dano = Number(Math.floor(Math.random() * 50));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Especial e causou ".concat(dano, " de dano"));
    };
    DeeJay.prototype.getNome = function () {
        return this.nome;
    };
    DeeJay.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    DeeJay.prototype.getVida = function () {
        return this.vida;
    };
    DeeJay.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    DeeJay.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    DeeJay.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    DeeJay.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    DeeJay.prototype.setEstiloLuta = function (nacionalidade) {
        this.estiloLuta = this.estiloLuta;
    };
    return DeeJay;
}());
exports.DeeJay = DeeJay;
