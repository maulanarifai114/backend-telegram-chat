const express = require('express')
const router = express.Router()
const userAuth = require('../../controller/v1/auth')

router
.post('/signup', userAuth.signUp)
.post('/login', userAuth.login)

module.exports = router