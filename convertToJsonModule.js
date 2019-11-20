const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')

const fileIn = path.join('./file.csv')
const fileOut = path.join('./file.json')

csv({ delimiter: '|' }).fromFile(fileIn).then(result => {
  fs.writeFile(fileOut, JSON.stringify(result, null, 1), function (err) {
    if (err) return console.log('Não foi possível salvar arquivo')

    console.log('Arquivo convertido com sucesso!')
  })
})
