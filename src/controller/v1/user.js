const model = require('../../model/v1/user')
const helper = require('../../helper/v1/help')

const user = {

  getUserById(req, res) {
    const id = req.params.id
    model.getUserById(id)
      .then((result) => {
        helper.response(res, result, 200, null)
      })
      .catch((err) => {
        helper.response(res, null, 400, err)
      })
  },
  getAllUser(req, res) {

  }
}

module.exports = user