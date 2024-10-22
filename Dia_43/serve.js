const express = require('express')

const cors = require('cors')

const app = express()
app.use (express.json())
app.use (cors()) 


// rota com http get

//app.get('/users',(request, response) => {
//    return response.send('Lista de usuários')
//})

// rota com parametros

app.get('/users/:id',(request, response) => {
    const userId = request.params.id;
    return response.send(`User ID: ${userId}`)
})

app.listen(8080, () => console.log('Servidor conectado na porta 8080'))