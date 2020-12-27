const jwt = require('jsonwebtoken')
const helper = require('../../helper/v1/help')

const verify = {
  verifyAccess(req, res, next) {
    const authorization = req.headers.authorization
    if (!authorization) {
      return helper.response(res, null, 401, 'Server need token')
    }
    const header = authorization.split(' ')
    const token = header[1]
    // JWT Verify
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        if (err.name === 'JsonWebTokenError') {
          return helper.response(res, null, 401, 'Invalid Token')
        } else if (err.name === 'TokenExpiredError') {
          return helper.response(res, null, 401, 'Token Expired')
        }
      } else {
        next()
      }
    })
  }
}

module.exports = verify