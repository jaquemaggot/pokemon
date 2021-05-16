const repository = require('../repository/pokemonRepository');
const service = require('../service/PokemonService');

//Funções que serão exportadas para serem usadas em outros módulos.
module.exports = {
    getAll,
    findByNumber,
    impPlanilha
}
//Bucando pokemons
async function getAll(req, res){
    try {
        const pokemons = await repository.getAll(req.query);
        res.json({ message : "OK", pokemons });
    } catch(error) {
        res.status(500).json({ error });
    }
}
//Encontrando Pokemons pelo Number
async function findByNumber(req, res){
    try {
        const pokemons = await repository.findByNumber(req.params.number);
        res.json({ pokemon: pokemons[0] });
    } catch(error) {
        res.status(500).json({ error });
    }
}
//Importando a Planilha
async function impPlanilha(req, res) {
    try {
        //Pegando excel do Body
        await service.readExcel(req.body.excel);
        res.json({ message: 'OK' })
    } catch(error) {
        res.status(500).json({ error });
    }
}
