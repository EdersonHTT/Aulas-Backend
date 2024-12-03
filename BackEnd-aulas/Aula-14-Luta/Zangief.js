"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zangief = void 0;
var Zangief = /** @class */ (function () {
    function Zangief() {
        this.nome = "Zangief";
        this.vida = 100;
        this.nacionalidade = "Russo";
        this.estiloLuta = "Luta Livre";
    }
    Zangief.prototype.golpeLeve = function (inimigo) {
        var dano = 0;
        while (dano < 5) {
            dano = Number(Math.floor(Math.random() * 15));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Leve e causou ".concat(dano, " de dano"));
    };
    Zangief.prototype.golpePesado = function (inimigo) {
        var dano = 0;
        while (dano < 15) {
            dano = Number(Math.floor(Math.random() * 30));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Pesado e causou ".concat(dano, " de dano"));
    };
    Zangief.prototype.golpeEspecial = function (inimigo) {
        var dano = 0;
        while (dano < 35) {
            dano = Number(Math.floor(Math.random() * 50));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Especial e causou ".concat(dano, " de dano"));
    };
    Zangief.prototype.getNome = function () {
        return this.nome;
    };
    Zangief.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Zangief.prototype.getVida = function () {
        return this.vida;
    };
    Zangief.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Zangief.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Zangief.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Zangief.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Zangief.prototype.setEstiloLuta = function (nacionalidade) {
        this.estiloLuta = this.estiloLuta;
    };
    return Zangief;
}());
exports.Zangief = Zangief;
