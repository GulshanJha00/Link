const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
var cors = require('cors')
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
app.use(cors({
    origin: "http://localhost:3000"
}))



app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});



io.on('connection', (socket) => {
    socket.on('chatmessage', (msg) => {
      console.log('message: ' + msg);
      socket.join(msg.roomId.id)
      console.log(msg.message)
      console.log(msg.roomId.id)
      socket.emit("new_message",msg.message)
    });
});


server.listen(3001, () => {
  console.log('server running at http://localhost:3001');
});