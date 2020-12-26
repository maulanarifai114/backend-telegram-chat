const model = require('../../model/v1/auth')
const helper = require('../../helper/v1/help')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {
  v4: uuidv4
} = require('uuid')


const users = {

  // Sign Up
  signUp: (req, res) => {
    const id = uuidv4() // Make id to uuidv4
    // Take value from Body
    const {
      username,
      email,
      password
    } = req.body
    // Check Email from Database
    model.checkUser(email)
      .then((result) => {
        // If Email is registered
        if (result.length > 0) {
          return helper.response(res, null, 400, {
            error: 'Email is already registered'
          })
        } else { // Else, do register
          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
              // Hass Password
              const data = {
                id,
                username,
                email,
                password: hash,
              }
              // If Body is empty
              if (data.username === '' || data.email === '' || data.password === '') {
                return helper.response(res, null, 401, {
                  message: `Cannot add register, some or all data is empty`
                })
              } else { // Else, Add User to Database
                model.insertUser(data)
                  .then((result) => {
                    // Return success if success register
                    console.log(result);
                    return helper.response(res, 'Success Register', 200, null)
                  })
                  .catch((err) => {
                    // Return failed if failed register
                    console.log(err);
                    return helper.response(res, 'Failed Register', 400, err)
                  })
              }
              console.log(err) // Error of Hash Password
            })
            console.log(err) // Error of Generate Salt
          })
        }
      })
      .catch((err) => {
        console.log('database error', err);
        return helper.response(res, 'database error', 400, err)
      })
  },

  login: (req, res) => {
    // Take data from body
    const {
      email,
      password
    } = req.body

    // Error handling
    const data = {
      email,
      password
    }

    // If Body is empty
    if (data.email === '' || data.password === '') {
      return helper.response(res, null, 401, {
        message: `Cannot login, some or all data is empty`
      })
    } else {
      // Check user from database
      model.checkUser(email)
        .then((result) => {
          const user = result[0]
          console.log('user =', user);

          // Check user if not registered
          if (!user) {
            return helper.response(res, null, 401, {
              message: 'Your account is not registered '
            })
          }

          // Compare Password
          bcrypt.compare(password, user.password, function (err, resCheck) {
            if (!resCheck) {
              return helper.response(res, null, 401, 'Password Wrong!')
            }
            delete user.password
            delete user.pin
            // JSON Web Token
            const payload = {
              userID: user.id,
              email: user.email,
            }
            const option = {
              expiresIn: '24h'
            }
            const secret = process.env.SECRET_KEY
            const getToken = function (err, token) {
              user.token = token
              console.log('error get token =', err);
              return helper.response(res, user, 200, null)
            }
            jwt.sign(payload, secret, option, getToken)
            console.log('err bcrypt =', err)
          })
        })
        .catch((err) => {
          console.log('error checking user', err);
          return helper.response(res, null, 400, err)
        })
    }
  },
}
module.exports = users