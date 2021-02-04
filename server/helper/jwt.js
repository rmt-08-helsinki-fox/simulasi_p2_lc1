const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.SECRET_KEY


function generateToken(payload){
    console.log('jwt');
    const token = jwt.sign(payload,'secret')

    return token
}

function checkToken(token){
    const verify =  jwt.verify(token, 'secret')

    return verify
}


module.exports =  {
    generateToken,
    checkToken
}