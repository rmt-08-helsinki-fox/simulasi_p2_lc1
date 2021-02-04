const jwt = require("jsonwebtoken")
const authenticate = function auth(req, res, next){
    try {
        const token = req.headers.access_token
        const decoded = jwt.verify(token, process.env.SECRET)
        req.decoded = decoded
        console.log(decoded)
        console.log(req.decoded)
        next()
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = authenticate