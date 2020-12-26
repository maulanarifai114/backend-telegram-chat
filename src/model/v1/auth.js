const {
  actionQuery
} = require('../../helper/v1/help')

const auth = {
  checkUser: (email) => {
    return actionQuery('SELECT * FROM users WHERE email = ?', email)
  },
  insertUser: (data) => {
    return actionQuery('INSERT INTO users SET ?', data)
  }
}
module.exports = auth