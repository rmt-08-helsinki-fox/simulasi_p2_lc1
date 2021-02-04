const bcrypt = require('bcryptjs')

function comparePassword(pass, dbPass){
  return bcrypt.compareSync(pass, dbPass)
}

module.exports = comparePassword