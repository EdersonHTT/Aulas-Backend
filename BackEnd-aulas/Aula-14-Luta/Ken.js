"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ken = void 0;
var Ken = /** @class */ (function () {
    function Ken() {
        this.nome = "Ken";
        this.vida = 100;
        this.nacionalidade = "BR";
        this.estiloLuta = "Ken";
    }
    Ken.prototype.golpeLeve = function (inimigo) {
        var dano = 0;
        while (dano < 5) {
            dano = Number(Math.floor(Math.random() * 15));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Leve e causou ".concat(dano, " de dano"));
    };
    Ken.prototype.golpePesado = function (inimigo) {
        var dano = 0;
        while (dano < 5) {
            dano = Number(Math.floor(Math.random() * 30));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Pesado e causou ".concat(dano, " de dano"));
    };
    Ken.prototype.golpeEspecial = function (inimigo) {
        var dano = 0;
        while (dano < 25) {
            dano = Number(Math.floor(Math.random() * 45));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Especial e causou ".concat(dano, " de dano"));
    };
    Ken.prototype.getNome = function () {
        return this.nome;
    };
    Ken.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Ken.prototype.getVida = function () {
        return this.vida;
    };
    Ken.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Ken.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Ken.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Ken.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Ken.prototype.setEstiloLuta = function (nacionalidade) {
        this.estiloLuta = this.estiloLuta;
    };
    return Ken;
}());
exports.Ken = Ken;
