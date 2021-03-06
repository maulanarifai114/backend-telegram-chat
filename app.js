require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const PORT = process.env.PORT
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const socket = require('socket.io')
const helper = require('./src/helper/v1/help')
const routerServerV1 = require('./src/routes/v1/routes')
const model = require('./src/model/v1/user')

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(morgan('dev'))

// Main API
app.use('/v1', routerServerV1)
app.use('/v1/upload', express.static('./upload'))

app.use('*', (req, res) => {
  helper.response(res, null, 404, 'URL Not Found')
})

// Initial Socket
const io = socket(server, {
  cors: {
    origin: '*',
  }
})

// Run Socket.io
io.on("connection", (socket) => {
  console.log('there someone connected ' + socket.id)
  
  socket.on('sendMsg',(data)=>{
    socket.broadcast.emit('sendBack', data)
    // io.emit('sendBack', data)
    model.postMsg(data)
      .then((result) => {
        console.log(result);
        // socket.emit('sendBack')
        console.log('save data success')
      })
      .catch((err) => {
        console.log(err);
        // socket.emit('sendBack')
        console.log('save data failed')
      })
  })

  socket.on("disconnect", (data) => {
    console.log('logout', data);
    console.log('client disconnected')
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})