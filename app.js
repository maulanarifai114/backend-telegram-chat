const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const PORT = 4000
const cors = require('cors')
const morgan = require('morgan')
const socket = require('socket.io')

app.use(cors())
app.use(morgan('dev'))

// Initial Socket
const io = socket(server, {
  cors: {
    origin: '*',
  }
})

// Run Socket.io
io.on("connection", (socket) => {
  console.log('there someone connected '+socket.id);

  socket.on("disconnect", () => {
    console.log('client disconnected')
  });
});

server.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})