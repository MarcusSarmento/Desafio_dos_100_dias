//npm run createDatabase
//npm run syncDatabase

//import express from 'express'; --Common JS Modules
const express = require('express');//ES Modules
const cors = require('cors');
const app = express();
const productRoutes = require('./routes/productRoutes')

// middlewares de configuração
app.use(cors());
app.use(express.json());

//rotas
app.use('/api',productRoutes);


// rodando o servidor
app.listen(3001,() => {
    console.log("Servidor rodando na porta http://localhost:3001");
});