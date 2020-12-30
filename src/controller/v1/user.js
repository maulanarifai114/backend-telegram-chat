const model = require('../../model/v1/user')
const helper = require('../../helper/v1/help')

const user = {

  // Get User By Id
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

  // Get All User
  getAllUser(req, res) {
    model.getAllUser()
      .then((result) => {
        helper.response(res, result, 200, null)
      })
      .catch((err) => {
        helper.response(res, null, 400, err)
      })
  },

  // Get All Messages
  getAllMsg(req, res) {
    model.getAllMsg()
      .then((result) => {
        console.log(result);
        helper.response(res, result, 200, null)
      })
      .catch((err) => {
        helper.response(res, null, 400, err)
      })
  },

  // Update User (Except Image)
  updateUser(req, res) {
    // Get data from Body
    const {
      status,
      fullName,
      phone,
      username,
      bio,
      lat,
      lng
    } = req.body
    // Initialization Data
    const data = {}
    // Checking Body
    if (status) {
      data.status = status
    }
    if (fullName) {
      data.fullName = fullName
    }
    if (phone) {
      data.phone = phone
    }
    if (username) {
      data.username = username
    }
    if (bio) {
      data.bio = bio
    }
    if (lat) {
      data.lat = lat
    }
    if (lng) {
      data.lng = lng
    }
    if (data.hasOwnProperty('status') || data.hasOwnProperty('fullName') || data.hasOwnProperty('phone') || data.hasOwnProperty('username') || data.hasOwnProperty('bio') || data.hasOwnProperty('lat') || data.hasOwnProperty('lng') ) {
      const id = req.params.id
      model.updateUser(data, id)
        .then((result) => {
          const resultUpdateUser = result
          if (resultUpdateUser.affectedRows === 0) {
            helper.response(res, resultUpdateUser, 404, 'Id not found, cannot update data')
          } else {
            helper.response(res, 'Data has been updated', 200, null)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      return helper.response(res, null, 401, 'Cannot update data, some or all data is empty')
    }
  },

  // Update Image
  updateImg(req, res) {
    const img = req.file
    const data = {}
    if (img) {
      data.img = `${process.env.BASE_URL}/upload/${req.file.filename}`
    }
    const id = req.params.id
    model.updateUser(data, id)
      .then((result) => {
        const resultUpdateUser = result
        if (resultUpdateUser.affectedRows === 0) {
          helper.response(res, resultUpdateUser, 404, 'Id not found, cannot update image')
        } else {
          helper.response(res, 'Image has been updated', 200, null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },

  // Post Messages (Unfunctinaly)
  postMsg(req, res) {
    const {
      time,
      msg,
      senderId,
      receiverId
    } = req.body

    const data = {
      time,
      msg,
      senderId,
      receiverId
    }

    if (data.msg === '' || data.senderId === '' || data.receiverId === '') {
      helper.response(res, null, 400, 'Data must be added')
    }

    model.postMsg(data)
      .then((result) => {
        console.log(result);
        helper.response(res, data, 200, null)
      })
      .catch((err) => {
        console.log(err);
        helper.response(res, null, 400, err)
      })

  }
}

module.exports = user