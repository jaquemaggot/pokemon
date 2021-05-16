const express = require('express');
//Indentifica as rotas que estão chegando
const router = express.Router();
const PokemonController = require('../controller/PokemonController');

//Rotas que serão usadas no projeto
router.get('/', PokemonController.getAll);
router.get('/:number', PokemonController.findByNumber);
router.post('/excel', PokemonController.impPlanilha);
module.exports = router;