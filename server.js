const express = require('express');
const app = express();

app.use(express.json());


let produtos = [
    { id: 1, nome: "Notebook", preco: 3500.00 },
    { id: 2, nome: "Mouse Gamer", preco: 150.00 }
];

app.get('/produtos', (req, res) => {
    return res.status(200).json(produtos);
});

app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;

    if (!nome || !preco) {
        return res.status(400).json({ mensagem: "Nome e preço são obrigatórios." });
    }

    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco: Number(preco)
    };

    produtos.push(novoProduto);

    return res.status(201).json({
        mensagem: "Produto cadastrado com sucesso!",
        produto: novoProduto
    });
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
});
