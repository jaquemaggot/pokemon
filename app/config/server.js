//Importando Express
const express = require('express');
const app = express();
const path = require('path');
//Buscando BD
require('./dbconnection');

app.use('/public', express.static(path.resolve(__dirname, '../public')));
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