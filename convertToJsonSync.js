const fs = require('fs')
const csv = require('csvtojson')

const fileIn = process.argv[2]

if (!fileIn) {
  console.log('Arquivo origem não informado!')
  process.exit(1)
}

const fileOut = process.argv[3] || fileIn.replace('.csv', '.json')

async function exec () {
  const result = await csv({ delimiter: '|' }).fromFile(fileIn)
  fs.writeFileSync(fileOut, JSON.stringify(result, null, 1))
  console.log('Arquivo convertido com sucesso!')
  process.exit(0)
}

module.exports.exec = exec
