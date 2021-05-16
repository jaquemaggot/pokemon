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

    //Fazendo os filtros solicitados
    //Filtro por numero
    if(params.number) {
        query += ` AND NUMBER = ${params.number}`   
    }
    //Filtro por nome
    if(params.name) {
        query += ` AND NAME LIKE '%${params.name}%'`  
    }
    //Filtro por Tipo1
    if(params.type1) {
        query += ` AND TYPE1 = '%${params.type1}%'`  
    }
    //Filtro por Tipo2
    if(params.type2) {
        query += ` AND TYPE1 = '%${params.type2}%'`  
    }
    //Filtro pelo status
    if(params.spa) {
        query += ` AND SPA = '%${params.spa}%'`  
    }
    //Filtro pelo status
    if(params.spd) {
        query += ` AND SPD = '%${params.spd}%'`  
    }
    //Filtro pelo status
    if(params.spe) {
        query += ` AND SPE = '%${params.spe}%'`  
    }
    //Filtro pelo total status
    if(params.total_status) {
        query += ` AND TOTAL_STATUS = '%${params.total_status}%'`  
    }

    //Deixando a query ordenada por Name(Alfabetica)
    //Colocando um limite de dados a serem mostrados
    //OFFSET, Fazendo a paginação da consulta
    query += ` ORDER BY NAME LIMIT ${limit} OFFSET ${offset}`;
    return await mysql.executeQuery(query);
}
//Buscando pokemon pelo number
async function findByNumber(number) {
    return await mysql.executeQuery('SELECT * FROM POKEMONS WHERE NUMBER = ?', [number]);
}

//Função para realizar a inserção no banco dos pokemons 
async function insert(pokemon){
    await mysql.executeQuery('INSERT INTO POKEMONS SET ?', pokemon);
}
//Função para realizar o update no banco dos pokemons
async function update(pokemon){
    await mysql.executeQuery('UPDATE POKEMONS SET ? WHERE number = ?', [pokemon, pokemon.number]);
}