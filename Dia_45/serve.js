const express = require('express');
const cors = require('cors');
const axios = require('axios');

//live_UUHDuMUZ58zL2ABASDwjgLDOnFD6egB6RSJ7XTBttbr1kpmavJ2matNtGDFxrZQQ


const api_key = 'live_UUHDuMUZ58zL2ABASDwjgLDOnFD6egB6RSJ7XTBttbr1kpmavJ2matNtGDFxrZQQ'

const app = express();
app.use(cors());
app.use(express.json());

//Rota pra obter os dados da API
app.get('/radom-cats', async (req, res) => {
    try{
        //Consome a api com axios
        const response = await axios.get('http://api.thecatapi.com/v1/imagens/search?limit=10', {
            headers: {
                "x-api-key": api_key
            }
        });

        //Exibindo a resposta da requisição
        res.json(response.data);
    } catch(error) {
        console.log("Erro ao consumir a Api:", error);
        res.status(500).json({error:"Erro ao consumir a API"});
    }
});



//criando o servidor
const port =8081;
app.listen(port, () =>{
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});