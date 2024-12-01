"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ryu = void 0;
var Ryu = /** @class */ (function () {
    function Ryu() {
        this.nome = "Ryu";
        this.vida = 100;
        this.nacionalidade = "BR";
        this.estiloLuta = "Dragão";
    }
    Ryu.prototype.golpeLeve = function (inimigo) {
        var dano = 0;
        while (dano < 5) {
            dano = Number(Math.floor(Math.random() * 15));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Leve e causou ".concat(dano, " de dano"));
    };
    Ryu.prototype.golpePesado = function (inimigo) {
        var dano = 0;
        while (dano < 5) {
            dano = Number(Math.floor(Math.random() * 30));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Pesado e causou ".concat(dano, " de dano"));
    };
    Ryu.prototype.golpeEspecial = function (inimigo) {
        var dano = 0;
        while (dano < 30) {
            dano = Number(Math.floor(Math.random() * 50));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Especial e causou ".concat(dano, " de dano"));
    };
    Ryu.prototype.getNome = function () {
        return this.nome;
    };
    Ryu.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Ryu.prototype.getVida = function () {
        return this.vida;
    };
    Ryu.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Ryu.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Ryu.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Ryu.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Ryu.prototype.setEstiloLuta = function (nacionalidade) {
        this.estiloLuta = this.estiloLuta;
    };
    return Ryu;
}());
exports.Ryu = Ryu;
