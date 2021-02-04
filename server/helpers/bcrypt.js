const bcrypt = require('bcryptjs')

function hash(input){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(input,salt)
}

function compare(inputPass, passDB){
    return bcrypt.compareSync(inputPass, passDB)
}

module.exports = {hash, compare}