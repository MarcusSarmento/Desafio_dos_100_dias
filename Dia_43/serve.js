const express = requier('express')

const cors = requier('cors')

const app = express()
app.use (express.json())
app.use (cors()) 

app.listen(8080, () => console.log('Servidor conectado na porta 8080'))