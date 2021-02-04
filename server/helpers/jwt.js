const jwt = require('jsonwebtoken');

const generateAccessToken = (payload) => {
    return jwt.sign(payload, 'jwtsecret');
}

const verifyToken = (access_token) => {
    return jwt.verify(access_token, 'jwtsecret');
}

module.exports = {
  generateAccessToken,
  verifyToken
}