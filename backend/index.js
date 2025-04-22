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
io.on('connection', (socket) => {
  socket.on("join_room",(msg)=>{
    socket.join(msg.roomId)
  })
    socket.on('chatmessage', (msg) => {
      console.log(msg.roomId)
      if(msg.message){
        console.log(msg.message)
        console.log("Emmitting to frontend ")
        io.to(msg.roomId).emit("new_message",msg.message)
      }
    });
});


server.listen(3001, () => {
  console.log('server running at http://localhost:3001');
});