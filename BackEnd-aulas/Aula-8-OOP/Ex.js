// Criando uma classe pai veiculo
class veiculo{
    constructor(velocidade){
        this.velocidade = velocidade // A propriedade velocidade é definida no construtor
    }

    // Criar método para acelerar
    acelerar(){
        this.velocidade += 1 //adiciomamdo velocidade
        console.log("a velocidade "+this.velocidade+" km/h")
    }
}

// Herdar a classe veiculo
class Carro extends veiculo {
    constructor(velocidade){
        super(velocidade)// Chama o constructor da classe veiculo para inicializar velocidade
    }

    buzinar(){
        console.log("buzinando")
    }
}

// Crindo istância de "Carro" com velocidade inicial 70km/h
const carro1 = new Carro(70)

carro1.acelerar()
carro1.buzinar()

