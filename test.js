const assert = require('assert')
const { isUniversityEmail, search, find } = require('./search')

assert(search('usb*')[0].ref)
assert(search('usb.ch')[0].ref)
assert(search('usb.ch')[0].ref)

assert(find('usb.ch')[0] === [ 'Universitatsspital of Basel' ][0])
assert(find('Universitatspital~2')[0] === [ 'Universitatsspital of Basel' ][0])

assert(isUniversityEmail('someone.else@usb.ch')) // true
assert(isUniversityEmail('someone.else@syr.edu')) // true
assert(isUniversityEmail('someone.else@migros.ch') === false) // false
assert(isUniversityEmail('42') === false) // false
