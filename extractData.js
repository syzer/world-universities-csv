const fs = require('fs')
const parse = require('csv-parse')
const parser = parse({columns: ['code', 'name', 'url']}, function (err, records) {
  const result = {}
  records.forEach((e) => {
    e.url = e.url.split('//').pop().split('/').shift().split('www.').pop()
    result[e.url] = e.name
  })

  console.log(JSON.stringify(result))
})

fs.createReadStream(__dirname + '/world-universities.csv')
  .pipe(parser)