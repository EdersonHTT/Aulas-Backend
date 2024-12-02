import { Agenda } from "./Agenda";
import { Contato } from "./Contato";

const ask = require('readline-sync');

function main (){
    let sustentaMenu = true;
    while (sustentaMenu) {
        console.log("Escolha uma opção:");
        console.log("1 - Adicionar contato");
        console.log("2 - Remover contato");
        console.log("3 - Listar todos os contatos");
        console.log("4 - Buscar contato");
        console.log("5 - Editar contato");
        console.log("6 - Sair");
        
        const opcao = ask.question("Digite a opção desejada: ");
        
        switch (opcao) {
            case "1":
                console.clear()
                agenda.adicionarContato(new Contato(ask.question("Nome: "), Number(ask.question("\nTelefone: ")), ask.question("\nEmail: ").mostrarContato()))
                ask.question("Enter para continuar...")
            break;
            case "2":
                console.log()
            break;
            case "3":

            break;
            case "4":

            break;
            case "5":

            break;
            case "6":
            sustentaMenu = false;
            console.log("Saindo do sistema...");
            break;
            default:
            console.log("Opção inválida. Tente novamente.");
            break;
        }
    }
}

const agenda = new Agenda()

main()