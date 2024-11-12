class livro {
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
    }

    exibir(){
        console.log(`Titulo: ${this.titulo}\nAutor: ${this.autor}`)
    }
}
const qualLivro = new livro("One Piece", "Oda")

qualLivro.exibir()
