// Importa o módulo 'express' para criar o servidor e manipular rotas
const express = require('express')

// Importa o método 'uuidv4' da biblioteca 'uuid', que gera um identificador único
const { v4: uuidv4 } = require('uuid')

// Cria uma instância do aplicativo Express
const app = express()

// Configura o servidor para aceitar requisições com dados JSON no corpo
app.use(express.json())

// Array onde armazenaremos temporariamente os projetos criados
const projects = []

// Middleware que registra as rotas e métodos das requisições no console

function logRoutes(request, response, next) {
    // Extrai o método e a URL da requisição
    const { method, url } = request

    // Formata uma string com o método e a URL
    const route = `[${method.toUpperCase()}] ${url}`

    // Exibe a string no console
    console.log(route)

    // Executa o próximo middleware ou rota
    return next()
}

// Habilita o uso do middleware de log de rotas em todas as requisições

//app.use(logRoutes)

// Rota para obter a lista de projetos

app.get('/projects', function(request, response) {
    // Retorna o array de projetos como resposta em formato JSON
    return response.json(projects)
})

// Rota para adicionar um novo projeto, com o middleware de log aplicado

app.post('/projects', logRoutes, function(request, response) {
    // Extrai 'nome' e 'responsáve' do corpo da requisição
    const { nome, responsável } = request.body

    // Cria um novo projeto com ID único, nome e dono
    const project = {
        id: uuidv4(),
        nome,
        responsável    
    }

    // Adiciona o novo projeto ao array de projetos
    projects.push(project)

    // Retorna o projeto criado com status 201 (criado)
    return response.status(201).json(project)
})

// Rota para atualizar um projeto existente pelo 'id'
app.put('/projects/:id', function(request, response) {
    // Extrai o 'id' dos parâmetros da URL
    const { id } = request.params

    // Extrai 'nome' e 'responsáve' do corpo da requisição
    const { nome, responsável } = request.body

    // Encontra o índice do projeto no array que tem o ID igual ao passado
    const projectIndex = projects.findIndex(p => p.id === id)

    // Verifica se o projeto existe; se não, retorna um erro 404
    if (projectIndex < 0) {
        return response.status(404).json({ error: 'Projeto não encontrado' })
    }

    // Verifica se 'nome' e 'responsáve' foram informados; se não, retorna erro 400
    if (!nome || !responsável) {
        return response.status(400).json({ error: 'Nome e responsável são necessários' })
    }

    // Cria o novo objeto do projeto com os dados atualizados
    const project = {
        id,
        nome,
        responsável
    }

    // Atualiza o projeto existente no array
    projects[projectIndex] = project

    // Retorna o projeto atualizado
    return response.json(project)
})

// Rota para deletar um projeto pelo 'id'
app.delete('/projects/:id', function(request, response) {
    // Extrai o 'id' dos parâmetros da URL
    const { id } = request.params

    // Encontra o índice do projeto no array com o ID especificado
    const projectIndex = projects.findIndex(p => p.id === id)

    // Verifica se o projeto existe; se não, retorna um erro 404
    if (projectIndex < 0) {
        return response.status(404).json({ error: 'Projeto não encontrado' })
    }

    // Remove o projeto do array
    projects.splice(projectIndex, 1)

    // Retorna uma resposta com status 204 (sem conteúdo), indicando exclusão
    return response.status(204).send()
})

// Configurando o servidor na porta respectiva
app.listen(3000, ()=>{
    console.log("Servidor iniciado na porta 3000!😊")
})