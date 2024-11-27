const ask = require("readline-sync")
import { Personagem } from "./Personagem";

export class Guerreiro implements Personagem {
    private _nome: string 
    private _vida: number 
    forca: number 
    defesa: number 

    constructor(nome: string, vida: number, forca: number, defesa: number,){
        this._nome = nome
        this._vida = vida
        this.forca = forca
        this.defesa = defesa
    }

    atacar(inimigo: Personagem): void{
        console.clear()
        let dano = Math.floor(Math.random()*10) - (inimigo.defesa / 3)
        ask.question("Golpe Cortante - Dano: "+ Number(Number(dano).toFixed(0)))
        inimigo.perderVida(Number(Number(dano).toFixed(0)))
    } 

    perderVida(dano: number): void {
        console.clear()
        this._vida -= dano
        if(this._vida < 0){
            this._vida = 0
        }
        ask.question(`${this.nome} - Vida: ${this.vida}`)
    }

    public get nome(): string{
        return this._nome
    }

    public set nome(nome: string){
        this._nome = nome
    }

    public get vida(): number {
        return this._vida
    }

    public set vida(vida: number){
        this._vida = vida
    }
}