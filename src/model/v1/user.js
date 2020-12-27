const {
  actionQuery
} = require('../../helper/v1/help')

const user = {
  getUserById: (id) => {
    return actionQuery('SELECT * FROM users WHERE id = ?', id)
  },
  getAllUser: () => {
    return actionQuery('SELECT * FROM users')
  }
}
module.exports = user