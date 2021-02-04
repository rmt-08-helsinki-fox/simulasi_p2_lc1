const jwt = require('jsonwebtoken')

function authenticate(req, res, next) {
    try {
        let token = req.headers.access_token
        let decoded = jwt.verify(token, process.env.SECRET);
        req.decoded = decoded
        next()
    } catch(err) {
        res.status(400).json({msg: "Token invalid"})
      // err
    }  
}

module.exports = authenticate