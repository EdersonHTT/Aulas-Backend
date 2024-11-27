import { Produtos } from "./Produto";

export class Alimento implements Produtos{
    nome: string
    valorCusto: number
    taxa: number

    constructor(nome: string, valorCusto: number, taxa: number){
        this.nome = nome
        this.valorCusto = valorCusto
        this.taxa = taxa
    }

    calcularValorTotal(): number {
        return this.taxa + this.valorCusto
    }
}