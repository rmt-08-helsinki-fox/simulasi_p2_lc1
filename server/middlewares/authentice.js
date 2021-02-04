const jwt = require('jsonwebtoken')

function authenticate(req, res, next){
    let access_token = req.headers.access_token
    try{
        let decoded = jwt.verify(access_token, 'secret')
        if(req.headers.access_token){
            req.headers.User = decoded
            next()
        }
    }catch(err) {
        res.status(401).json({msg: 'Invalid Token'})
    }
}

module.exports = authenticate