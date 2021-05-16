const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
const repository = require('../repository/pokemonRepository');

module.exports = {
    readExcel
}

//Lendo a planilha e obtendo os dados dela
async function readExcel(excelBase64) {
    //Pegando o caminho absoluto
    const filePath = path.resolve(__dirname, '../public/planilha/Pokedex.xlsx');
    //Fazendo o Upload da planilha
    uploadLocalFile(excelBase64, filePath)
    //Colocando os dados da planilha em uma var
    var planilha = XLSX.readFile(filePath);
    //convertendo os dados para exibir em .json
    const workbook = XLSX.utils.sheet_to_json(planilha.Sheets.Planilha1, { raw: false });
    //Chamando a função de Insert para inserir os dados no banco
    await insert(workbook);
    //Removendo a planilha da pasta após a inserção
    removeFileFromLocalFolder(filePath);
}

//Função que realiza a importação da planilha
function uploadLocalFile(excelBase64, filePath) {
    fs.writeFileSync(filePath, excelBase64, 'base64')
}
//Função para remover a planilha da pasta
function removeFileFromLocalFolder(filePath) {
    //Se existir remova;
    if (fs.existsSync(filePath))
      fs.unlinkSync(filePath);
  }

//Função que realiza a inserção no banco de dados
async function insert(workbook) {

    for (let [i, row] of workbook.entries()) {
        //Transformando nosso Id em inteiro
        const number = parseInt(row['#']);
        
        let pokemon = {
            number,
            name : row.Pokemon,
            image: getPokemonImagePath(number),
            type1 : row['Type I'],
            type2 : row['Type II'],
            hp : row.HP,
            atk : row.Atk,
            def : row.Def,
            spa : row.SpA,
            spd : row.SpD,
            spe : row.Spe,
            total_status : row['Total Status']
        }

        //Fazendo a tratativa de possiveis erros com Try Cath
        try {
            const pok = await repository.findByNumber(number);
            //Se existir o registro(Faz um update) se não um insert
            if(pok[0]) {
                await repository.update(pokemon);
            } else {
                await repository.insert(pokemon);
            }
        } catch(error) {
            console.log(error);
            throw error;
        }
        
    }
}

//Função para vincular a imagem ao pokemon do banco
//Feito isso pelo número da imagem, encontrando o correspondente no banco
function getPokemonImagePath(value) {
    //Pegando o caminho absoluto
    const filePath = path.resolve(__dirname, '../public/images');
    //Salvando em uma const a url da pasta
    const url = 'http://localhost:3000/public/images';

    const files = fs.readdirSync(filePath);
    //encontrando a imagem correspondente ao number do pokemon
    const file = files.find(function (file) {
        return file == `${value}.png`
    })
    //Se não encontrar colocar a imagem 0
    if(!file) {
        return `${url}/0.png`;
    }
    //retornando a imagem
    return `${url}/${value}.png`;
}