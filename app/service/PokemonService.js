const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
const repository = require('../repository/pokemonRepository');

module.exports = {
    readExcel
}

async function readExcel(excelBase64) {
    const filePath = path.resolve(__dirname, '../public/planilha/Pokedex.xlsx');
    uploadLocalFile(excelBase64, filePath)
    var planilha = XLSX.readFile(filePath);
    const workbook = XLSX.utils.sheet_to_json(planilha.Sheets.Planilha1, { raw: false });
    await insert(workbook);
    removeFileFromLocalFolder(filePath);
}

function uploadLocalFile(excelBase64, filePath) {
    fs.writeFileSync(filePath, excelBase64, 'base64')
}

function removeFileFromLocalFolder(filePath) {
    if (fs.existsSync(filePath))
      fs.unlinkSync(filePath);
  }

async function insert(workbook) {
    for (let [i, row] of workbook.entries()) {

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

        try {
            const pok = await repository.findByNumber(number);

            if(pok[0]) {
                await repository.update(pokemon);
            } else {
                await repository.insert(pokemon);
            }
        } catch(error) {
            console.log(error)
            throw error;
        }
        
    }
}

function getPokemonImagePath(value) {
    const filePath = path.resolve(__dirname, '../public/images');
    const url = 'http://localhost:3000/public/images';

    const files = fs.readdirSync(filePath);

    const file = files.find(function (file) {
        return file == `${value}.png`
    })

    if(!file) {
        return `${url}/0.png`;
    }

    return `${url}/${value}.png`;
}