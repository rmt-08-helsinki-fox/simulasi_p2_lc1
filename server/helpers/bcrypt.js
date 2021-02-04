const bcrypt = require('bcryptjs')

function hashPassword(userPassword){
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(userPassword, salt)
  return hashedPassword
}

function comparePassword(userPassword, hashedPassword){
  const compared = bcrypt.compareSync(userPassword, hashedPassword)
  return compared
}

module.exports = {
  hashPassword,
  comparePassword
}