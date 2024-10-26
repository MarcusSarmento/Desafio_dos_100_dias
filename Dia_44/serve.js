const sqlite3 = require('sqlite3')
const cors = require('cors')
const express =  require('express')


const app = express()
app.use(express.json())
app.use(cors())

const db =new sqlite3.Database('./database.db')

// criando a tabela do banco de dados
db.serialize(() => {
    db.run(`create table if not exists users (
        id text primary key,
        name text,
        email text)`)
})

const users = {
    id: new Date().toISOString(),
    name: 'João',
    email: 'example@example.com'
}

//inserindo e cadastrando usurarios no banco de dados
db.run(`insert into users(id, name, email) values (?, ?, ?)`,
    [users.id, users.name, users.email], (err) => {
        if (err){
            console.log(err)
        } else {
            console.log('Usuário criado com sucesso')
        }
    }
)

//obtendo os usuários para vizualizarmos com json
app.get('/users', (req, res) => {
    db.all(`select * from users`, (err, rows))
    if (err) {
        return res.status(500).json(err)
    } else {
        return res.status(200).json(rows)
    }

})

app.listen(8080, () => console.log('Servidor rodando na porta 8080'))