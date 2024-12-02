"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cammy = void 0;
var Cammy = /** @class */ (function () {
    function Cammy() {
        this.nome = "Cammy";
        this.vida = 100;
        this.nacionalidade = "Reino Unido";
        this.estiloLuta = "Forças Especiais";
    }
    Cammy.prototype.golpeLeve = function (inimigo) {
        var dano = 0;
        while (dano < 5) {
            dano = Number(Math.floor(Math.random() * 15));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Leve e causou ".concat(dano, " de dano"));
    };
    Cammy.prototype.golpePesado = function (inimigo) {
        var dano = 0;
        while (dano < 15) {
            dano = Number(Math.floor(Math.random() * 25));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Pesado e causou ".concat(dano, " de dano"));
    };
    Cammy.prototype.golpeEspecial = function (inimigo) {
        var dano = 0;
        while (dano < 20) {
            dano = Number(Math.floor(Math.random() * 40));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Especial e causou ".concat(dano, " de dano"));
    };
    Cammy.prototype.getNome = function () {
        return this.nome;
    };
    Cammy.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Cammy.prototype.getVida = function () {
        return this.vida;
    };
    Cammy.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Cammy.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Cammy.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Cammy.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Cammy.prototype.setEstiloLuta = function (nacionalidade) {
        this.estiloLuta = this.estiloLuta;
    };
    return Cammy;
}());
exports.Cammy = Cammy;
