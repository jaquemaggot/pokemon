//Importando Express
const express = require('express');
const app = express();
const path = require('path');

// setando as variaveis de ambiente
require('dotenv').config({ path: path.join(__dirname, '../../.env') })

//fazendo a coxenão com o BD
require('./dbconnection');

//Transformando as urls de imagens em url static, para salvar no banco.
app.use('/public', express.static(path.resolve(__dirname, '../public')));

//Informando que vamos usar .json e que o limite de dados é 50mb
app.use(express.json({limit: '50mb'}));

//Importando Rotas
const PokemonRoutes = require('../routes/PokemonRoutes');
app.use('/pokemon', PokemonRoutes);

//Informando em que porta vai rodar
app.listen(3000, () => {
    console.log('API ONLINE')
});

//Exportando os dados de app(server)
module.exports = app;