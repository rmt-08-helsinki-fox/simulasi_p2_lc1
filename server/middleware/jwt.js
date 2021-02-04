var jwt = require('jsonwebtoken');

function newToken(payload){
  var token = jwt.sign(payload, process.env.SECRET);

  return token
}

module.exports = {newToken}