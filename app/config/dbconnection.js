//Importando biblioteca MYSQL
const mysql = require('mysql');
//Atribuindo valor nulo a variavel que vai receber a conexão com o banco
let db = null;

//criando a conexão
function init() {
  //Se db = null ou vazio; cria a conexão
  if(!db){
    //Configurando um Pool para gerenciar as conexões ao banco(Simultaneas)
    db = mysql.createPool({
        connectionLimit : 1,
        host            : 'localhost',
        user            : 'root',
        password        : '',
        database        : 'pokemon'
      });
    }
}
//Inicializa a conexão com o banco
init();
//Exporta o modulo de conexão com o banco
module.exports = db;