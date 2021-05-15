const repository = require('../repository/pokemonRepository');
const service = require('../service/PokemonService');

//Funções que serão exportadas para serem usadas em outros módulos.
module.exports = {
    getAll,
    findByNumber,
    impPlanilha
}

async function getAll(req, res){
    try {
        console.log(req.query)
        const pokemons = await repository.getAll(req.query);
        res.json({ message : "OK", pokemons });
    } catch(error) {
        res.status(500).json({ error });
    }
}

async function findByNumber(req, res){
    try {
        const pokemons = await repository.findByNumber(req.params.number);
        res.json({ pokemon: pokemons[0] });
    } catch(error) {
        res.status(500).json({ error });
    }
}

async function impPlanilha(req, res) {
    try {
        await service.readExcel(req.body.excel);
        res.json({ message: 'OK' })
    } catch(error) {
        res.status(500).json({ error });
    }
}
