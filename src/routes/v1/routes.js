const express = require('express')
const router = express.Router()
const routerAuth = require('./auth')
const routerUser = require('./user')

router
  .use('/auth', routerAuth)
  .use('/user', routerUser)
module.exports = router