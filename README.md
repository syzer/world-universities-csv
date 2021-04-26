# University search
Fast and fuzzy search for universities around the world
Provides email verification

# Usage

```js
const {isUniversityEmail} = require('world-universities-search')
isUniversityEmail('someone.else@usb.ch') // true
isUniversityEmail('someone.else@migros.ch') // flase
isUniversityEmail('42') // flase
```

## Fuzzy match
```js
// Universitatsspital => Universitatsspital
const {find} = require('world-universities-search')
find('Universitatspital~2')
```



It's a forked version of forked version:

world-universities-csv
======================
This is a forked copy of two CSV files with universities in the US and around the world.

I have modified this to only include the University name and the .edu domain name that is associated with the university.  This is useful for identifying a college based on an email address.


