//importar http do node.js, para criar servidor

const { error } = require("console");
const http = require("http")

const PORT = 3000

const server = http.createServer((req, res)=>{

    res.setHeader("Content-Type", "application/json")

    if(req.method === "GET" && req.url === "/api/mensagem"){
        res;statusCode = 200

        res.end(JSON.stringify({mensagem: "Hello World!"}))
    } else if(req.method === "POST" && req.url === "/api/mensagem") {
        let body = ""

        req.on("data", (chunk) =>{
            body += chunk.toString()
        })

        req.on("end", (chunk) =>{
            const data = JSON.parse(body)

            res.statusCode = 201
            res.end(JSON.stringify({mensagem: "Dados recebidos via POST", dados: data}))
        })
    } else {
        res.statusCode = 404
        res.end(JSON.stringify({erro: "Rota não encontrada"}))
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);

})