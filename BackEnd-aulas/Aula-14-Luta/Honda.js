"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Honda = void 0;
var Honda = /** @class */ (function () {
    function Honda() {
        this.nome = "Honda";
        this.vida = 100;
        this.nacionalidade = "Japones ";
        this.estiloLuta = "Sumo";
    }
    Honda.prototype.golpeLeve = function (inimigo) {
        var dano = 0;
        while (dano < 5) {
            dano = Number(Math.floor(Math.random() * 10));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Leve e causou ".concat(dano, " de dano"));
    };
    Honda.prototype.golpePesado = function (inimigo) {
        var dano = 0;
        while (dano < 10) {
            dano = Number(Math.floor(Math.random() * 20));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Pesado e causou ".concat(dano, " de dano"));
    };
    Honda.prototype.golpeEspecial = function (inimigo) {
        var dano = 0;
        while (dano < 20) {
            dano = Number(Math.floor(Math.random() * 40));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Especial e causou ".concat(dano, " de dano"));
    };
    Honda.prototype.getNome = function () {
        return this.nome;
    };
    Honda.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Honda.prototype.getVida = function () {
        return this.vida;
    };
    Honda.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Honda.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Honda.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Honda.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Honda.prototype.setEstiloLuta = function (nacionalidade) {
        this.estiloLuta = this.estiloLuta;
    };
    return Honda;
}());
exports.Honda = Honda;
