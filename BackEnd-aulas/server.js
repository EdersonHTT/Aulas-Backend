//Importar o módulo express
const express = require("express")

// Criar uma aplicação express (nosso servidor)
const app = express()

// Definir a porta que o servidor vai usar
const PORT = 5000

// Falar ao express para servir arquivos estáticos da pasta "public"
app.use(express.static("Public"))

//iniciar o servidor na porta 5000 
app.listen(PORT, ()=> {
    console.log(`Servidor iniciado em http://localhost:${PORT}`)
})
