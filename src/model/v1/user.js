const {
  actionQuery
} = require('../../helper/v1/help')

const user = {
  getUserById: (id) => {
    return actionQuery('SELECT * FROM users WHERE id = ?', id)
  },
  getAllUser: () => {
    return actionQuery('SELECT * FROM users')
  },
  getAllMsg: () => {
    return actionQuery('SELECT * FROM messages')
  },
  updateUser: (data, id) => {
    return actionQuery('UPDATE users SET ? WHERE id = ?', [data, id])
  }
}
module.exports = user