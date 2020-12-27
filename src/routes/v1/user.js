const express = require('express')
const router = express.Router()
const user = require('../../controller/v1/user')
const verify = require('../../middleware/v1/auth')
const upload = require('../../middleware/v1/uploadImg')
const validation = require('../../middleware/v1/validationImg')

router
  .get('/msg', verify.verifyAccess, user.getAllMsg)
  .get('/:id', verify.verifyAccess, user.getUserById)
  .get('/', verify.verifyAccess, user.getAllUser)
  .put('/img/:id', verify.verifyAccess, upload.uploadMulter.single('img'), validation.validation, user.updateImg)
  .put('/:id', verify.verifyAccess, user.updateUser)
  .post('/msg', verify.verifyAccess, user.postMsg)
module.exports = router