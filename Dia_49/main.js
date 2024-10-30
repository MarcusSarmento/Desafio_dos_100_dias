const express = require('express');
const routes = require('./routes/index.js'); 
const app = express();
const path = require('path');
const bodyParser = require('body-parser')



app.use((req, res, next) => {
    console.log("Foi lançado um Middleware");
    req.timeStamp = new Date().toString();
    next();// Permite o fluxo de rotas continuar
});

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", routes);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hjs"); 

app.listen(8080);
console.log("Servidor rodando na porta localhost:8080")
