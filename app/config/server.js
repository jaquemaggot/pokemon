//Importando Express
const express = require('express');
const app = express();
//Buscando BD
require('./dbconnection');

app.use(express.json());
//Importando Rotas
const PokemonRoutes = require('../routes/PokemonRoutes');
app.use('/pokemon', PokemonRoutes);

//Informando em que porta vai rodar
app.listen(3000, () => {
    console.log('API ONLINE')
});

//Exportando os dados de app(server)
module.exports = app;