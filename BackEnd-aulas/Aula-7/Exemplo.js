// Definindo a classe cachorro (sem construtor)
class cachorro {
    // Metodo latir ("AU AU")
    latir(){
        console.log("AU AU!")
    }

    // Método aniversário que aumenta a idade do cachorro em 1 ano
    aniversario(){
        this.idade += 1 //Incrementa a idade do cachorro
    }
}

// Criando uma intância da classe cachorro
const meuCachorro = new cachorro()

meuCachorro.nome = "Maia" //definiu o nome diretamente
meuCachorro.idade = 4 // definindo a idade diretamente

// chamando o método latir e aniversário
meuCachorro.latir()
meuCachorro.aniversario()

//imprimir
console.log(`Idade da ${meuCachorro.nome} é ${meuCachorro.idade}`)
console.log("-----------------------------------------------------")



