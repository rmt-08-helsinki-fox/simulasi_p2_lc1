const bcrypt = require('bcryptjs')

function hashing(input) {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(input, salt)
    return hash
}

function comparePass(password, passwordDB) {
    let result =  bcrypt.compareSync(password, passwordDB)
    return result
}


module.exports = { hashing, comparePass }