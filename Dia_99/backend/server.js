const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json()); // Middleware para processar JSON
app.use(bodyParser.json());

// Fake DB
const produtos = [
    { id: 1, nome: "Teclado Gamer", precoUnitario: 500, quantidade: 50, categoria: "Periféricos", fabricante: "Toyota" },
    { id: 2, nome: "Mouse Gamer", precoUnitario: 200, quantidade: 50, categoria: "Periféricos", fabricante: "Ace" },
    { id: 3, nome: "Fone Gamer", precoUnitario: 180, quantidade: 20, categoria: "Periféricos", fabricante: "Multilaser" },
];

// Obter todos os produtos
app.get('/produtos', (req, res) => {
    res.status(200).json(produtos);
});

// Obter um produto específico
app.get('/produtos/:id', (req, res) => {
    const produtoId = parseInt(req.params.id);
    const produto = produtos.find(produto => produto.id === produtoId);

    if (produto) {
        res.status(200).json(produto);
    } else {
        res.status(404).json({ message: "Produto não encontrado" });
    }
});

// Criar um novo produto
app.post('/produtos', (req, res) => {
    const novoProduto = req.body;

    if (!novoProduto.nome || !novoProduto.precoUnitario || !novoProduto.quantidade) {
        return res.status(400).json({ message: "Dados inválidos" });
    }

    novoProduto.id = produtos.length + 1;
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// Atualizar um produto existente
app.put('/produtos/:id', (req, res) => {
    const produtoId = parseInt(req.params.id);
    const produtoIndex = produtos.findIndex(produto => produto.id === produtoId);

    if (produtoIndex !== -1) {
        produtos[produtoIndex] = { ...produtos[produtoIndex], ...req.body };
        res.status(200).json(produtos[produtoIndex]);
    } else {
        res.status(404).json({ message: "Produto não encontrado" });
    }
});

// Deletar um produto
app.delete('/produtos/:id', (req, res) => {
    const produtoId = parseInt(req.params.id);
    const produtoIndex = produtos.findIndex(produto => produto.id === produtoId);

    if (produtoIndex !== -1) {
        produtos.splice(produtoIndex, 1);
        res.status(200).json({ message: "Produto deletado com sucesso" });
    } else {
        res.status(404).json({ message: "Produto não encontrado" });
    }
});

// Rodar o servidor
const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});

//npm i body-parser