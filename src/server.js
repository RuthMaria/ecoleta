const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const db = require('./database/db')
const PORT = 3000

// COONFIGURAÇÕES

/* Para trabalhar com arquivos estáticos, ignora a pasta public para poder acessar na url as pastas que estão
dentro de public, diretamente*/

server.use(express.static('public'))

// habilita o uso do body-parser
server.use(express.urlencoded({extended:true}))

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// ROTAS

server.get('/', (req, res) => {
    return res.render('pages/index.html')
})

server.get('/create-point', (req, res) => {
    return res.render('pages/create-point.html')
})

server.post('/savepoint', (req, res) => {

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);`
    
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData (err) {
        if (err) {
            console.log(err)
            return res.render("pages/create-point.html", {error: true})
        }
        return res.render("pages/create-point.html", {saved: true})
    }
//afterInsertData está sem parametro, pois não queremos que execute imediatamente, funcione apenas como callback
    db.run(query, values, afterInsertData)
})

server.get('/create-account', (req, res) => {
    return res.render('pages/create-account.html')
})

server.post('/save-account', (req, res) => {
    res.send('oi')
})

server.get('/login', (req, res) => {
    return res.render('pages/login.html')
})

server.get('/search', (req, res) => {

    const search = req.query.search

    if (search == "") {
        return res.render('pages/search-results.html', {total:0})
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length
        return res.render('pages/search-results.html', {places: rows, total:total})
    })

})

server.get('/All-places', (req, res) => {

    db.all(`SELECT * FROM places`, (err, rows) => {
        if (err) {
            return console.log(err)
        }
        
        const total = rows.length
        return res.render('pages/search-results.html', {places: rows, total: total})
    })

})

server.listen(PORT, () => {
    console.log("The server is running on URL http://localhost:" + PORT)
})