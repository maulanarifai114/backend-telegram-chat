const fs = require('fs')
const helper = require('../../helper/v1/help')

const valid = (req, res, next) => {
  if (!(req.file.mimetype).includes('jpeg') && !(req.file.mimetype).includes('png') && !(req.file.mimetype).includes('jpg')) {
    fs.unlinkSync(`./upload/${req.file.filename}`)
    return helper.response(res, null, 400, 'File not supported, file must JPG/JPEG/PNG')
  }
  if (req.file.size > 1024 * 1024 * 3) {
    fs.unlinkSync(`./upload/${req.file.filename}`)
    return helper.response(res, null, 400, 'File is too big, image must be under 3 MB')
  }
  next()
}

module.exports = {
  validation: valid,
}