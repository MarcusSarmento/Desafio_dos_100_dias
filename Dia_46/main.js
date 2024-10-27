const express = require('express');
const routes = require('./routes/index.js'); 
const app = express();
const path = require('path');

app.use('/', routes);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.listen(8080);
console.log("Servidor rodando na porta localhost:8080")
