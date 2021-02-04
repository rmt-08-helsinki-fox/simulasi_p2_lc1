require('dotenv').config()
const jwt = require('jsonwebtoken')

function authenticated(req, res, next) {
  try {
    const token = req.headers.access_token
    const decode = jwt.verify(token, process.env.SECRET_JWT)
    req.decode = decode
  } catch(err) {
    res.status(401).json({
      message: 'Invalid Token'
    })
  }
}

module.exports = authenticated