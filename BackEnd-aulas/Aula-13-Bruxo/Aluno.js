"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aluno = void 0;
var aluno = /** @class */ (function () {
    function aluno(nome, idade, nacionalidade, classeMagica) {
        this.nome = nome;
        this.idade = idade;
        this.nacionalidade = nacionalidade;
        this.classeMagica = classeMagica;
    }
    aluno.prototype.sortearCasa = function () {
        var casas = ["Grifinória", "Sonserina", "Lufa-Lufa", "Corvinal"];
        this.casa = casas[Math.floor(Math.random() * 4)];
    };
    aluno.prototype.exibirInformacoes = function () {
        console.log("Aluno: ".concat(this.nome, "\nIdade: ").concat(this.idade, "\nNacionalidade ").concat(this.nacionalidade, "\nCasa: ").concat(this.casa, "\nClasse Magica: ").concat(this.classeMagica));
    };
    aluno.prototype.getNome = function () {
        return this.nome;
    };
    aluno.prototype.setNome = function (nome) {
        console.log("aa");
        this.nome = nome;
    };
    aluno.prototype.getIdade = function () {
        return this.idade;
    };
    aluno.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    aluno.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    aluno.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    aluno.prototype.getCasa = function () {
        return this.casa;
    };
    aluno.prototype.setCasa = function (casa) {
        this.casa = casa;
    };
    aluno.prototype.getClasseMagica = function () {
        return this.classeMagica;
    };
    aluno.prototype.setClasseMagica = function (classeMagica) {
        this.classeMagica = this.classeMagica;
    };
    return aluno;
}());
exports.aluno = aluno;
