export class aluno {
    private nome: string 
    private idade: number
    private nacionalidade: string 
    private casa: string | null 
    private classeMagica: string

    constructor(nome: string, idade: number, nacionalidade: string, classeMagica: string){
        this.nome = nome 
        this.idade = idade 
        this.nacionalidade = nacionalidade 
        this.classeMagica = classeMagica 
    }

    sortearCasa(): void{
        let casas = ["Grifinória", "Sonserina", "Lufa-Lufa", "Corvinal"]

        this.casa = casas[Math.floor(Math.random()*4)]
    }

    exibirInformacoes(): void{
        console.log(`Aluno: ${this.nome}\nIdade: ${this.idade}\nNacionalidade ${this.nacionalidade}\nCasa: ${this.casa}\nClasse Magica: ${this.classeMagica}`)
    }

    public getNome():string {
        return this.nome
    }

    public setNome(nome:string){
        console.log("aa")
        this.nome = nome
    }

    public getIdade():number {
        return this.idade
    }

    public setIdade(idade:number){
        this.idade = idade
    }

    public getNacionalidade():string {
        return this.nacionalidade
    }

    public setNacionalidade(nacionalidade:string){
        this.nacionalidade = nacionalidade
    }

    public getCasa():string | null {
        return this.casa
    }

    public setCasa(casa:string){
        this.casa = casa
    }

    public getClasseMagica():string {
        return this.classeMagica
    }

    public setClasseMagica(classeMagica:string){
        this.classeMagica = this.classeMagica
    }
}