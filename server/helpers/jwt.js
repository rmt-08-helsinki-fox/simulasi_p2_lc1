const jwt = require('jsonwebtoken')

function generateToken(payload) {
    jwt.sign(payload, process.env.JWT)
}

function fixToken(payload) {
    jwt.verify(payload, process.env.JWT)
}

module.exports = {
    generateToken
}