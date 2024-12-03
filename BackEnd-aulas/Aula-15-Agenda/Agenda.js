"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.contatos = [];
    }
    Agenda.prototype.adicionarContato = function (contato) {
        this.contatos.push(contato);
        return "Contato adicionado.";
    };
    Agenda.prototype.removerContato = function (nome) {
        for (var i in this.contatos) {
            if (this.contatos[i].getNome().toLocaleLowerCase() === nome.toLocaleLowerCase()) {
                this.contatos.splice(Number(i), 1);
                return "Contato excluido\n";
            }
        }
        return "Contato nao encontrado\n";
    };
    Agenda.prototype.listarContatos = function () {
        this.contatos.forEach(function (contato, i) {
            console.log("---------------> Contato ".concat(i + 1, "\n\nNome: ").concat(contato.getNome(), "\nNumero: ").concat(contato.getTelefone(), "\nEmail: ").concat(contato.getEmail(), "\n"));
        });
    };
    Agenda.prototype.buscarContato = function (nome) {
        for (var i in this.contatos) {
            if (this.contatos[i].getNome().toLocaleLowerCase() === nome.toLocaleLowerCase()) {
                console.clear();
                console.log("Contato:\n\nNome: ".concat(this.contatos[i].getNome(), "\nNumero: ").concat(this.contatos[i].getTelefone(), "\nemail: ").concat(this.contatos[i].getEmail(), "\n\n"));
                return;
            }
        }
        console.log("Contato nao encontrado\n");
    };
    Agenda.prototype.editarContato = function (nome, novoContato) {
        var localizar = false;
        for (var i in this.contatos) {
            if (this.contatos[i].getNome().toLocaleLowerCase() === nome.toLocaleLowerCase()) {
                this.contatos[i] = novoContato;
                localizar = true;
            }
        }
        if (localizar != true) {
            console.log("Contato nao encontrado\n");
        }
        else {
            console.log("Contato editado");
        }
    };
    return Agenda;
}());
exports.Agenda = Agenda;
