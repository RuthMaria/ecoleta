// importar as depêndencias do projeto

const sqlite3 = require('sqlite3').verbose()

// criar objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db

db.serialize( () => {
    
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fullname TEXT,
            email TEXT,
            password TEXT
        );
    `)

    db.all(`SELECT * FROM users`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Here are your registers")
        console.log(rows)
    })
})

/*
db.serialize( () => {
    
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

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
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "Nº 260",
        "Santa Catarina",
        "Ria do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData (err) {
        if (err) {
            return console.log(err)
        }

        console.log('Places added with success!')
        console.log(this)
    }
//afterInsertData está sem parametro, pois não queremos que execute imediatamente, funcione apenas como callback
    db.run(query, values, afterInsertData) 

    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Here are your registers")
        console.log(rows)
    })
   
    db.run(`DELETE FROM places WHERE id = ?`, [3], function (err) {
        if (err) {
            return console.log(err)
        }

        console.log('Register deleted with success!')
    })
})
*/
