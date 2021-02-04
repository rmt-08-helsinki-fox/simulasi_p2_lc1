var jwt = require('jsonwebtoken');

function generateToken(payload) {
  return jwt.sign(payload, "helsinki");
}

module.exports = generateToken;