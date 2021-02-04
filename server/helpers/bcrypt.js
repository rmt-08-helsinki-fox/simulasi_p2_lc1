const bcrypt = require("bcryptjs")

function hashPassword (pass) {
    const salt = bcrypt.genSaltSync(5)
    const hash = bcrypt.hashSync(pass,salt)

    return hash
}

function comparePassword(pass, hashPass) {
    return bcrypt.compareSync(pass, hashPass)
}

module.exports = {
    hashPassword,
    comparePassword
}