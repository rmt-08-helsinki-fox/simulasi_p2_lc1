const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
  try {
    const access_token = req.headers.access_token;
    const decoded = jwt.verify(access_token, "helsinki");
    req.decoded = decoded;

    next()
  } catch (err) {
    const error = { msg: 'Invalid Token', status: 401 }
    next(error);
  }
}

module.exports = authentication;