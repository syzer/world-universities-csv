const lunr = require('lunr')
const universities = require('./world-universities.json')


const idx = lunr(function () {
  this.ref('u')
  this.field('n')
  this.field('u')

  Object.keys(universities).forEach(url => {
    this.add({
      u: url,
      n: universities[url]
    })
  })

})

console.log(JSON.stringify(idx))
