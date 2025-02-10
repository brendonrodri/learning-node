const axios = require('axios');

async function autenticar() {
    try {
        const response = await axios.post('http://localhost:3000/api/auth', {
            token: 'meu-token-seguro' // Token de autorização
        });

        console.log('Chave recebida:', response.data.chave);
    } catch (error) {
        console.error('Erro na autenticação:', error.response ? error.response.data : error.message);
    }
}

autenticar();