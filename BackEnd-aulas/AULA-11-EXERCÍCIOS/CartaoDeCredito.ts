import { MetodosDePagamento } from "./MetodosDePagamento";

export class CartaoDeCredito implements MetodosDePagamento {
    Pagar(): string {
        return "Pago com: Cartao de Credito"
    }
}