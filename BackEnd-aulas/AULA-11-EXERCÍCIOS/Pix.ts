import { MetodosDePagamento } from "./MetodosDePagamento";

export class Pix implements MetodosDePagamento {
    Pagar(): string {
        return "Pago com: Pix"
    }
}