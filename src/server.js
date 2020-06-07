const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const PORT = 3000

// Configuration

/* Para trabalhar com arquivos estáticos, ignora a pasta public para poder acessar na url as pastas que estão
dentro de public, diretamente*/

server.use(express.static('public')) 

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// routes

server.get('/', (req, res) => {
    return res.render('index.html')
})

server.get('/create-point', (req, res) => {
    return res.render('create-point.html')
})

server.get('/search', (req, res) => {
    return res.render('search-results.html')
})

server.listen(PORT, () => {
    console.log("The server is running on URL http://localhost:"+PORT)
})