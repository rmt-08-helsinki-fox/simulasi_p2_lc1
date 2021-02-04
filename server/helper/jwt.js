const jwt = require('jsonwebtoken')
const SECRET_KEY = 'rahasia'

function generateToken (payload){
  return jwt.sign(payload, SECRET_KEY)
}

module.exports = generateToken