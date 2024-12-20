import { aluno } from "./Aluno"
const ask = require("readline-sync")

function classeMag(): string{
    let classesMagicas: Array<string> = [
        "Feitiçaria e Encantamentos",
        "Poções",
        "Transfiguração",
        "Defesa Contra as Artes das Trevas",
        "Herbologia",
        "Astronomia",
        "História da Magia",
        "Cuidado de Criaturas Mágicas",
        "Voo",
        "Magia Experimental",
        "Divinação",
        "Runas Antigas"
    ]
    console.clear()
    classesMagicas.forEach((classe, i)=> {
        console.log(`[${i+1}] - ${classe}`)
    });

    for(let i in classesMagicas){
        if(Number(ask.question("\nQual classe: ")) === Number(i)+1){
            return classesMagicas[i]
        }
    }

    return "Clsse nao encontrada"
}

function Main (){
    let sair:number = 0
    do{
        console.clear()
        console.log("[1] - Cadastrar\n[2] - Ver alunos cadastrados\n[3] - Editar dados de um aluno\n[4] - Deletar um aluno\n[5] - Sair\n")
        switch(Number(ask.question("Digite um numero: "))){
            case 1:
                console.clear()
                const alunoCadastro = new aluno(ask.question("Nome: "), Number(ask.question("Idade: ")), ask.question("Nacionalidade: "), classeMag())
                alunos.push(alunoCadastro)
                alunoCadastro.sortearCasa()
                console.clear()
                alunoCadastro.exibirInformacoes()
                ask.question("\nEnter para continuar... ")
                break
            case 2:
                console.clear()
                for(let i in alunos){
                    console.log(`${Number(i)+1})\nAluno: ${alunos[i].getNome()}\nIdade: ${alunos[i].getIdade()}\nNacionalidade ${alunos[i].getNacionalidade()}\nCasa: ${alunos[i].getCasa()}\nClasse Magica: ${alunos[i].getClasseMagica()}\n`)
                }
                ask.question("Enter para continuar...")
                break
            case 3:
                console.clear()
                for(let i in alunos){
                    console.log(`${Number(i)+1})\nAluno: ${alunos[i].getNome()}\nIdade: ${alunos[i].getIdade()}\nNacionalidade ${alunos[i].getNacionalidade()}\nCasa: ${alunos[i].getCasa()}\nClasse Magica: ${alunos[i].getClasseMagica()}\n`)
                }
                let nuAluno: number = Number(ask.question("Numero aluno: "))-1
                console.clear()
                if((ask.question("Editar nome?\n[1] - Sim                [2] - Não\n") === "1")){
                    alunos[nuAluno].setNome(ask.question("Nome: "))
                }
                if((ask.question("Editar idade?\n[1] - Sim                [2] - Não\n") === "1")){
                    alunos[nuAluno].setIdade(Number(ask.question("Idade: ")))
                }
                if((ask.question("Editar nacionalidae?\n[1] - Sim                [2] - Não\n") === "1")){
                    alunos[nuAluno].setNacionalidade(ask.question("Nacionalidade: "))
                }
                if((ask.question("Editar casa?\n[1] - Sim                [2] - Não\n") === "1")){
                    alunos[nuAluno].setCasa(ask.question("Casa: "))
                }
                if((ask.question("Editar classe magica?\n[1] - Sim                [2] - Não\n") === "1")){
                    alunos[nuAluno].setClasseMagica(ask.question("Classe Magica: "))
                }
                console.clear()
                for(let i in alunos){
                    console.log(`${Number(i)+1})\nAluno: ${alunos[i].getNome()}\nIdade: ${alunos[i].getIdade()}\nNacionalidade ${alunos[i].getNacionalidade()}\nCasa: ${alunos[i].getCasa()}\nClasse Magica: ${alunos[i].getClasseMagica()}\n`)
                }
                ask.question("Enter para continuar...")
                break
            case 4:
                console.clear()
                for(let i in alunos){
                    console.log(`${Number(i)+1})\nAluno: ${alunos[i].getNome()}\nIdade: ${alunos[i].getIdade()}\nNacionalidade ${alunos[i].getNacionalidade()}\nCasa: ${alunos[i].getCasa()}\nClasse Magica: ${alunos[i].getClasseMagica()}\n`)
                }
                alunos.splice(Number(ask.question("Numero aluno: ")-1), 1)
                console.clear()
                for(let i in alunos){
                    console.log(`${Number(i)+1})\nAluno: ${alunos[i].getNome()}\nIdade: ${alunos[i].getIdade()}\nNacionalidade ${alunos[i].getNacionalidade()}\nCasa: ${alunos[i].getCasa()}\nClasse Magica: ${alunos[i].getClasseMagica()}\n`)
                }
                ask.question("Enter para continuar...")
                break
            case 5:
                sair = 5
            break
        }
    }while(sair != 5)
}

let alunos: Array<aluno> = []

Main()