const express = require('express')
const router = express.Router()
const user = require('../../controller/v1/user')
const verify = require('../../middleware/v1/auth')

router
  .get('/msg', verify.verifyAccess, user.getAllMsg)
  .get('/:id', verify.verifyAccess, user.getUserById)
  .get('/', verify.verifyAccess, user.getAllUser)
  // .put('/img/:id',  verify.verifyAccess, user.updateUser)
  .put('/:id', verify.verifyAccess, user.updateUser)

module.exports = router