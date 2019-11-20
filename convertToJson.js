const fs = require('fs')
const path = require('path')

const fileIn = path.join('./file.csv')
const fileOut = path.join('./file.json')

fs.readFile(fileIn, { encoding: 'utf8' }, depoisQueLerArquivoChamaIsso)

function depoisQueLerArquivoChamaIsso (err, data) {
  if (err) return console.log(err)
  const result = []
  const dataRow = data.split('\r\n')
  const fields = dataRow[0].split('|')

  dataRow.forEach((row, index) => {
    if (index) {
      const obj = {}
      row.split('|').forEach((line, index) => {
        obj[[fields[index]]] = line
      })
      result.push(obj)
    }
  })

  fs.writeFile(fileOut, JSON.stringify(result, null, 1), function (err) {
    if (err) return console.log('Não foi possível salvar arquivo')

    console.log('Arquivo convertido com sucesso!')
  })
}
