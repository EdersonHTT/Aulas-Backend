import { Contato } from "./Contato"

export class Agenda {
    contatos: Array<Contato> = []

    adicionarContato(contato: Contato):string {
        this.contatos.push(contato)
        return "Contato adicionado."
    }

    removerContato(nome: string): string {
        for(let i in this.contatos){
            if(this.contatos[i].getNome().toLocaleLowerCase() === nome.toLocaleLowerCase()){
                this.contatos.splice(Number(i), 1)
                return "Contato excluido\n"
            }
        }
        return "Contato nao encontrado\n"
    }

    listarContatos(): void {
        this.contatos.forEach((contato, i)=>{
            console.log(`---------------> Contato ${i+1}\n\nNome: ${contato.getNome()}\nNumero: ${contato.getTelefone()}\nEmail: ${contato.getEmail()}\n`)
        })
    }

    buscarContato(nome: string): void {
        for(let i in this.contatos){
            if(this.contatos[i].getNome().toLocaleLowerCase() === nome.toLocaleLowerCase()){
                console.clear()
                console.log(`Contato:\n\nNome: ${this.contatos[i].getNome()}\nNumero: ${this.contatos[i].getTelefone()}\nemail: ${this.contatos[i].getEmail()}\n\n`)
                return
            }
        }
        console.log("Contato nao encontrado\n")
    }

    editarContato(nome: string, novoContato: Contato): void {
        let localizar: boolean = false
        for(let i in this.contatos){
            if(this.contatos[i].getNome().toLocaleLowerCase() === nome.toLocaleLowerCase()){
                this.contatos[i] = novoContato
                localizar = true
            }
        }
        if(localizar != true){
            console.log("Contato nao encontrado\n")
        } else {
            console.log("Contato editado")
        }
    }
}