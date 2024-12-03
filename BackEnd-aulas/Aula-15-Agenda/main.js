"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Agenda_1 = require("./Agenda");
var Contato_1 = require("./Contato");
var ask = require('readline-sync');
function main() {
    var sustentaMenu = true;
    while (sustentaMenu) {
        console.clear();
        console.log("Escolha uma opção:");
        console.log("1 - Adicionar contato");
        console.log("2 - Remover contato");
        console.log("3 - Listar todos os contatos");
        console.log("4 - Buscar contato");
        console.log("5 - Editar contato");
        console.log("6 - Sair");
        var opcao = ask.question("Digite a opcao desejada: ");
        switch (opcao) {
            case "1":
                console.clear();
                var contato = new Contato_1.Contato(ask.question("Nome: "), Number(ask.question("\nTelefone: ")), ask.question("\nEmail: "));
                console.clear();
                console.log(agenda.adicionarContato(contato));
                contato.mostrarContato();
                ask.question("Enter para continuar...");
                break;
            case "2":
                console.clear();
                console.log("=========================\n");
                agenda.listarContatos();
                console.log("=========================");
                console.log(agenda.removerContato(ask.question("Nome do contato para ser excluido: ")));
                ask.question("Enter para continuar...");
                break;
            case "3":
                console.clear();
                console.log("=========================\n");
                agenda.listarContatos();
                console.log("=========================");
                ask.question("Enter para continuar...\n");
                break;
            case "4":
                console.clear();
                agenda.buscarContato(ask.question("Nome do contato: "));
                ask.question("Enter para continuar...\n");
                break;
            case "5":
                console.clear();
                console.log("=========================\n");
                agenda.listarContatos();
                console.log("=========================");
                var nome = ask.question("Nome do contato para editar: ");
                for (var i in agenda.contatos) {
                    if (agenda.contatos[i].getNome().toLocaleLowerCase() === nome.toLocaleLowerCase()) {
                        console.clear();
                        agenda.contatos[i].editarContato(ask.question("Nome: "), Number(ask.question("\nTelefone: ")), ask.question("\nEmail: "));
                        console.clear();
                        agenda.editarContato(nome, agenda.contatos[i]);
                        ask.question("\nEnter para Continuar...");
                    }
                }
                break;
            case "6":
                console.clear();
                sustentaMenu = false;
                console.log("Saindo do sistema...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}
var agenda = new Agenda_1.Agenda();
main();
