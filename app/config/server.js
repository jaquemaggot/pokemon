const express = require('express');
const app = express();

app.use(express.json());
//criando rota
//navegador sempre executa GET


const PokemonRoutes = require('../routes/PokemonRoutes');
//Colocando o arquivo que irá ter todas as rotas dentro da API
app.use('/pokemon', PokemonRoutes);

//Informando em que porta vai rodar
app.listen(3000, () => {
    console.log('API ONLINE')
});

module.exports = app;