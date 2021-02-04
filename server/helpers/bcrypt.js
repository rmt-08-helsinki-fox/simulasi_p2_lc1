const bcrypt = require('bcryptjs');

function bcryptFile(password){
  var salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

function compare(password, hashPassword){
  return bcrypt.compareSync(password, hashPassword);
}

module.exports = {
  bcryptFile,
  compare
}