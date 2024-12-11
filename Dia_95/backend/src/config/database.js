const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./src/config/database.sqlite', (error) => {
    if (error)
        console.log("Erro ao criar banco de dados" + error.message);
    console.log("Banco de dados criado/conectado com sucesso");    
});

//export  deffault db; -- ES MODULES
module.exports = db; //Common JS