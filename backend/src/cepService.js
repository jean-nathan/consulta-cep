const axios = require('axios');

async function fetchCep(cep) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    } catch (error) {
        throw new Error('Erro na requisição:', error);
    }
}

module.exports = { fetchCep };
