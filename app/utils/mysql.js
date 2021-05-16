const db = require('../config/dbconnection')

module.exports = {
  executeQuery
}

//Função para executar a query
async function executeQuery(query, params) {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, results) => {
      if(err)
        return reject(err);

      resolve(results);
    });
  });
}