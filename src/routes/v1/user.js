const express = require('express')
const router = express.Router()
const user = require('../../controller/v1/user')
const verify = require('../../middleware/v1/auth')

router
  .get('/:id', verify.verifyAccess, user.getUserById)
  .get('/', verify.verifyAccess, user.getAllUser)

module.exports = router