import { Produtos } from "./Produto";

export class livro implements Produtos{
    nome: string
    valorCusto: number
    taxa:number

    constructor(nome: string, valorCusto: number, taxa: number){
        this.nome = nome
        this.taxa = taxa
        this.valorCusto = valorCusto
    }

    calcularValorTotal(): number {
        return this.taxa + this.valorCusto
    }
}