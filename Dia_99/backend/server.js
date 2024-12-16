const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


//fake db
const produtos = [
    {
        id: 1,
        nome:"Teclado Gamer",
        precoUnitario: 500,
        quantidade: 50,
        categoria: "Periféricos",
        fabricante: "Toyota"
    },
    {
        id: 2,
        nome: "Mouse Gamer",
        precoUnitario: 200,
        quantidade: 50,
        categoria: "Periféricos",
        fabricante: "Ace"
    },
    {
        id: 3,
        nome: "Fone Gamer", 
        precoUnitario: 180,
        quantidade: 20,
        categoria: "Periféricos",
        fabricante: "Multilaser"
    },
]

//obter produtos
app.get('/produtos',(req, res) => {
    res.status(200).json(produtos);
})

//obter produto especifico
app.get('/produtos/:id', (req, res) => {
    const produtoId = parseInt(req.params.id);
    const produto = produtos.find(produto => produto.id == produtoId);

    if(produto){
        res.status(200).json(produtos);
    }else{
        res.status(404).send("Produto não encontrado");
        novoProduto.id = produtos.length + 1;
        produto.push(novoProduto);
        res.status(201).json(novoProduto);
    }
})

//criar produto
app.post('/produtos', (req, res) => {
    const novoProduto = req.body;
})

//atualizar produto
app.put('/produtos/:id', (req, res) => {
    const produtoId = parseInt(req.params.id);
    const produtoIndex = produtos.findIndex(produto => produto.id == produtoId);

    if (produtoIndex !== -1) {
        produtos[produtoIndex] = {...produtos[produtoIndex], ...req.body};
        res.status(200).json(produtos[produtoIndex]);  
    }else{
        res.status(404).json({message: 'Produto não encotrado'});
    }
})


//deletar produto
app.delete('/produtos/:id', (req, res) => {
    const produtoId = parseInt(req.params.id);
    const produtoIndex = produtos.findIndex(produto => produto.id == produtoId);

    if (produtoIndex !== -1) {
        produtos.splice(produtoIndex, 1);
        res.status(200).json({message: 'Produto deletado com sucesso'});
    } else {
        res.status(404).json({ message: 'Produto não encotrado' });
    }
})

//rodar o servidor
const porta = 3000

app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
})