import { Personagem } from "./Personagem";

export class Ryu implements Personagem {
    
    private nome: string = "Ryu"
    private vida: number = 100
    private nacionalidade: string = "BR"
    private estiloLuta: string = "Dragão"
    
    golpeLeve(inimigo: Personagem): void{
        let dano:number = 0
        while(dano < 5){
            dano = Number(Math.floor(Math.random()*15))
        }
        inimigo.setVida(inimigo.getVida()-dano)
        console.log(`Você causou ${dano} de dano`)
    }

    golpePesado(inimigo: Personagem): void{
        let dano:number = 0
        while(dano < 5){
            dano = Number(Math.floor(Math.random()*30))
        }
        inimigo.setVida(inimigo.getVida()-dano)
        console.log(`Você causou ${dano} de dano`)
    }

    golpeEspecial(inimigo: Personagem): void{
        let dano:number = 0
        while(dano < 30){
            dano = Number(Math.floor(Math.random()*50))
        }
        inimigo.setVida(inimigo.getVida()-dano)
        console.log(`Você causou ${dano} de dano`)
    }
    
    public getNome(): string{
        return this.nome
    }
    public setNome(nome: string): void{
        this.nome = nome
    }

    public getVida(): number{
        return this.vida
    }
    public setVida(vida: number): void{
        this.vida = vida
    }

    public getNacionalidade(): string{
        return this.nacionalidade
    }
    public setNacionalidade(nacionalidade: string): void{
        this.nacionalidade = nacionalidade
    }

    public getEstiloLuta(): string{
        return this.estiloLuta
    }
    public setEstiloLuta(nacionalidade: string): void{
        this.estiloLuta = this.estiloLuta
    }
}