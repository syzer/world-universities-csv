const lunr = require('lunr')
const idxData = require('./idx.json')
const idx = lunr.Index.load(idxData)
const universities = require('./world-universities.json')

module.exports = {
  search: str =>
    idx.search(str),
  find: str =>
    idx.search(str).map(({ref}) =>
      universities[ref]),
  findByEmail: str =>
    idx.search(str.split('@').pop())
      .map(({ref}) => ({
        value: ref,
        label: universities[ref]
      })),
  isUniversityEmail: str =>
    !!idx.search(str.split('@').pop())[0]
}