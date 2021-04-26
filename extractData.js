const fs = require('fs')
const parse = require('csv-parse')
const parser = parse({columns: ['code', 'name', 'url']}, function (err, records) {

  const result = records.map((e) => {
    e.url = e.url.split('//').pop().split('/').shift().split('www.').pop()
    return e
  })

  console.log(JSON.stringify(result))
})

fs.createReadStream(__dirname + '/world-universities.csv')
  .pipe(parser)