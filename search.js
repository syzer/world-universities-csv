const lunr = require('lunr')
const idxData = require('./idx.json')
const idx = lunr.Index.load(idxData)

module.exports = {
  search: str => idx.search(str),
  find: str => idx.search(str).map(({ref}) =>
    require('./world-universities.json')[ref]),
  isUniversityEmail : str => !!idx.search(str.split('@').pop())[0]
}