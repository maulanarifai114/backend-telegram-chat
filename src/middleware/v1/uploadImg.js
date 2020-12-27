const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  cb(null, true)
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
})

module.exports = {
  uploadMulter: upload
}