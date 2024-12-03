"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contato = void 0;
var Contato = /** @class */ (function () {
    function Contato(nome, numero, email) {
        this.nome = nome;
        this.numero = numero;
        this.email = email;
    }
    Contato.prototype.editarContato = function (nome, telefone, email) {
        this.nome = nome;
        this.numero = telefone;
        this.email = email;
    };
    Contato.prototype.mostrarContato = function () {
        console.clear();
        console.log("Contato:\n\nNome: ".concat(this.nome, "\nNumero: ").concat(this.numero, "\nEmail: ").concat(this.email));
    };
    Contato.prototype.getNome = function () {
        return this.nome;
    };
    Contato.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Contato.prototype.getTelefone = function () {
        return this.numero;
    };
    Contato.prototype.setTelefone = function (telefone) {
        this.numero = telefone;
    };
    Contato.prototype.getEmail = function () {
        return this.email;
    };
    Contato.prototype.setEmail = function (email) {
        this.email = email;
    };
    return Contato;
}());
exports.Contato = Contato;
