const express = require('express');
const router = express.Router();
const db = require('../src/config/database');

//buscar
router.get('/products',(req,res) => {
    db.all('SELECT * FROM products',(err,rows) => {
        if(err){
            console.log(err.message);
            res.status(500).send('Erro ao obter produtos do banco de dados');

        }else{
            res.json(rows);
        }
    });
});

//criar
router.post("/products", (req,res) => {
    const {name, description, price, imageUrl} = req.body;
    const query = "INSERT INTO products (name, description, price, imageUrl) VALUES (?, ?, ?, ?)";
    db.run(querry, [name, description, price, imageUrl], function(error){
        if (error) return res.status(500).send(error.message);
        res.status(201).send({id: this.lastID});
    });
});

//alterar
router.put("/products/:id", (req, res) => {
    const { name, description, price, imageUrl } = req.body;
    const {id} = req.params;
    const query = "UPDATE products SET name = ?, description = ?, price = ?, imageUrl = ?";
    db.run(querry, [name, description, price, imageUrl], function (error) {
        if (error) return res.status(500).send(error.message);
        res.send({ message:"Produto atualizado com sucesso" });
    });
});

//deletar
router.delete("/products/:id", (req, res) => {
    const { name, description, price, imageUrl } = req.body;
    const { id } = req.params;
    const query = "DELETE FROM products WHERE id = ?";
    db.run(querry, id, function (error) {
        if (error) return res.status(500).send(error.message);
        res.send({ message: "Produto deletado com sucesso" });
    });
});


module.exports = router;