const {verifyToken} = require('../helpers/jwt')

const authenticate = (req,res,next) => {
  try {
    const access_token = req.headers.access_token
    const decoded = verifyToken(access_token)
    // console.log('middleware >>>>>>>>>>>');
    
    req.user = decoded
    next()
    // console.log(req.user);
  } catch (error) {
    next(error)
  }
}

module.exports = authenticate