"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blanka = void 0;
var Blanka = /** @class */ (function () {
    function Blanka() {
        this.nome = "Blanka";
        this.vida = 100;
        this.nacionalidade = "Africano";
        this.estiloLuta = "Capoeira";
    }
    Blanka.prototype.golpeLeve = function (inimigo) {
        var dano = 0;
        while (dano < 5) {
            dano = Number(Math.floor(Math.random() * 10));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Leve e causou ".concat(dano, " de dano"));
    };
    Blanka.prototype.golpePesado = function (inimigo) {
        var dano = 0;
        while (dano < 10) {
            dano = Number(Math.floor(Math.random() * 25));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Pesado e causou ".concat(dano, " de dano"));
    };
    Blanka.prototype.golpeEspecial = function (inimigo) {
        var dano = 0;
        while (dano < 25) {
            dano = Number(Math.floor(Math.random() * 40));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Especial e causou ".concat(dano, " de dano"));
    };
    Blanka.prototype.getNome = function () {
        return this.nome;
    };
    Blanka.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Blanka.prototype.getVida = function () {
        return this.vida;
    };
    Blanka.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Blanka.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Blanka.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Blanka.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Blanka.prototype.setEstiloLuta = function (nacionalidade) {
        this.estiloLuta = this.estiloLuta;
    };
    return Blanka;
}());
exports.Blanka = Blanka;
