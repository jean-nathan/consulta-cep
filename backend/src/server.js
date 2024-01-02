const cors = require('cors');
const express = require('express');
const { fetchCep } = require('./cepService');
const app = express();

app.use(cors());

app.get('/cep/:cep', async (req, res) => {
    try {
        const { cep } = req.params; 
        const data = await fetchCep(cep); 
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
