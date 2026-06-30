const express = require('express');
const server = express();

server.use(express.json());

const livros = ["O Senhor dos Anéis", "Harry Potter", "O Hobbit"];

server.get('/livros', (req, res) => {
    return res.json(livros);
});

server.get('/livros/:id', (req, res) => {
    const id = req.params.id;

    if (!livros[id]) {
        return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    return res.json(livros[id]);
});

server.post('/livros', (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({
            erro: 'O nome do livro é obrigatório'
        });
    }

    livros.push(nome);

    return res.status(201).json(livros);
});

server.put('/livros/:id', (req, res) => {
    const id = req.params.id;
    const  nome  = req.body.nome;

    if (!nome) {
        return res.status(400).json({
            erro: 'O nome do livro é obrigatório'
        });
    }

    if (!livros[id]) {
        return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    livros[id] = nome;

    return res.json(livros[id]);
});

server.delete('/livros/:id', (req, res) => {
    const index = req.params.index;

    livros.splice(index, 1);

    return res.json(livros);

});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});