//Funções que serão exportadas para serem usadas em outros módulos.
module.exports = {
    listar
}
//Importando Banco
var db = require('../config/dbconnection');
function listar(req,res){
    db.query('SELECT * FROM POKEMONS', function (error, results) {
        if (error){
            return res.status(500).json({
                error
            });
        }
        res.json({
            message : "OK",
            pokemons : results
        });
    });
}
