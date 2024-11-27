import { MetodosDePagamento } from "./MetodosDePagamento";

export class Dinheiro implements MetodosDePagamento {
    Pagar(): string {
        return "Pago com: Dinheiro"
    }
}