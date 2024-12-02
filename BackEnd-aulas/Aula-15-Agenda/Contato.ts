export class Contato {
    private nome: string
    private numero: number
    private email: string

    constructor(nome: string, numero: number, email: string){
        this.nome = nome
        this.numero = numero
        this.email = email
    }

    editarContato(nome: string, telefone: number, email: string): void {
        this.nome = nome
        this.numero = telefone
        this.email = email
    }

    mostrarContato(): void {
        console.clear()
        console.log(`Contato:\n\nNome: ${this.nome}\nNumero: ${this.numero}\nEmail: ${this}`)
    }

    public getNome(): string {
        return this.nome
    }

    public setNome(nome: string): void{
        this.nome = nome
    } 

    public getTelefone(): number {
        return this.numero
    } 

    public setTelefone(telefone: number): void {
        this.numero = telefone
    }

    public getEmail(): string {
        return this.email
    } 

    public setEmail(email: string): void {
        this.email = email
    }
}