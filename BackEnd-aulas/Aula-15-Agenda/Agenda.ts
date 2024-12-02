import { Contato } from "./Contato"

export class Agenda {
    contatos: Array<Contato> = []

    adicionarContato(contato: Contato):string {
        this.contatos.push(contato)
        return "Contato adicionado."
    }

    removerContato(nome: string): string {
        for(let i in this.contatos){
            if(this.contatos[i].getNome() === nome){
                this.contatos.splice(Number(i), 1)
            }
        }
        return "Contato excluido."
    }

    listarContatos(): void {
        this.contatos.forEach((contato, i)=>{
            console.log(`Contato ${i}\n\nNome: ${contato.getNome()}\nNumero: ${contato.getTelefone()}\nemail: ${contato.getEmail()}\n\n`)
        })
    }

    buscarContato(nome: string): void {
        for(let i in this.contatos){
            if(this.contatos[i].getNome() === nome){
                console.log(`Contato:\n\nNome: ${this.contatos[i].getNome()}\nNumero: ${this.contatos[i].getTelefone()}\nemail: ${this.contatos[i].getEmail()}\n\n`)
            } else {
                console.log("Contato nao encontrado")
            }
        }
    }

    editarContato(nome: string, novoContato: Contato): void {
        for(let i in this.contatos){
            if(this.contatos[i].getNome() === nome){
                this.contatos[i] = novoContato
            }
        }
    }
}