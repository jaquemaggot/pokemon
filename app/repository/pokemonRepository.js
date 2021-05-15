//Importando Banco
var mysql = require('../utils/mysql');

module.exports = {
    getAll,
    findByNumber,
    insert,
    update
}

async function getAll(params){
    const limit = params.limit || 10;
    const page = params.page || 1;
    const offset = (page * limit) - limit;

    let query = `SELECT * FROM POKEMONS WHERE 1 = 1`;

    if(params.number) {
        query += ` AND NUMBER = ${params.number}`   
    }

    if(params.name) {
        query += ` AND NAME LIKE '%${params.name}%'`  
    }

    query += ` ORDER BY NAME LIMIT ${limit} OFFSET ${offset}`;
    return await mysql.executeQuery(query);
}

async function findByNumber(number) {
    return await mysql.executeQuery('SELECT * FROM POKEMONS WHERE NUMBER = ?', [number]);
}

async function insert(pokemon){
    await mysql.executeQuery('INSERT INTO POKEMONS SET ?', pokemon);
}

async function update(pokemon){
    await mysql.executeQuery('UPDATE POKEMONS SET ? WHERE number = ?', [pokemon, pokemon.number]);
}