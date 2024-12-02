"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bison = void 0;
var Bison = /** @class */ (function () {
    function Bison() {
        this.nome = "Bison";
        this.vida = 100;
        this.nacionalidade = "BR";
        this.estiloLuta = "Bison";
    }
    Bison.prototype.golpeLeve = function (inimigo) {
        var dano = 0;
        while (dano < 10) {
            dano = Number(Math.floor(Math.random() * 20));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Leve e causou ".concat(dano, " de dano"));
    };
    Bison.prototype.golpePesado = function (inimigo) {
        var dano = 0;
        while (dano < 15) {
            dano = Number(Math.floor(Math.random() * 30));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Pesado e causou ".concat(dano, " de dano"));
    };
    Bison.prototype.golpeEspecial = function (inimigo) {
        var dano = 0;
        while (dano < 30) {
            dano = Number(Math.floor(Math.random() * 50));
        }
        inimigo.setVida(inimigo.getVida() - dano);
        console.log("Usou Golpe Especial e causou ".concat(dano, " de dano"));
    };
    Bison.prototype.getNome = function () {
        return this.nome;
    };
    Bison.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Bison.prototype.getVida = function () {
        return this.vida;
    };
    Bison.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Bison.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Bison.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Bison.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Bison.prototype.setEstiloLuta = function (nacionalidade) {
        this.estiloLuta = this.estiloLuta;
    };
    return Bison;
}());
exports.Bison = Bison;
