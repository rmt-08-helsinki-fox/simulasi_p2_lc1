const bcrypt =require('bcrypt')

class HelperBcrypt {
  static hashPass (password) {
    return bcrypt.hashSync(password, 8)
  }

  static comparePass(password, hassPass) {
    return bcrypt.compareSync(password, hassPass)
  }
}

module.exports = HelperBcrypt