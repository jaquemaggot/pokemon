const express = require('express');
//Indentifica as rotas que estão chegando
const router = express.Router();
const PokemonController = require('../controller/PokemonController');


router.get('/', PokemonController.listar);
module.exports = router;