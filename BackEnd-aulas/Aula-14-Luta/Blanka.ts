import { Personagem } from "./Personagem";

export class Blanka implements Personagem {
    
    private nome: string = "Blanka"
    private vida: number = 100
    private nacionalidade: string = "Africano"
    private estiloLuta: string = "Capoeira"
    
    golpeLeve(inimigo: Personagem): void{
        let dano:number = 0
        while(dano < 5){
            dano = Number(Math.floor(Math.random()*10))
        }
        inimigo.setVida(inimigo.getVida()-dano)
        console.log(`Usou Golpe Leve e causou ${dano} de dano`)
    }

    golpePesado(inimigo: Personagem): void{
        let dano:number = 0
        while(dano < 10){
            dano = Number(Math.floor(Math.random()*25))
        }
        inimigo.setVida(inimigo.getVida()-dano)
        console.log(`Usou Golpe Pesado e causou ${dano} de dano`)
    }

    golpeEspecial(inimigo: Personagem): void{
        let dano:number = 0
        while(dano < 25){
            dano = Number(Math.floor(Math.random()*40))
        }
        inimigo.setVida(inimigo.getVida()-dano)
        console.log(`Usou Golpe Especial e causou ${dano} de dano`)
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