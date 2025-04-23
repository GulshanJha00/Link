const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
var cors = require('cors')
const router = require("./routes/route")
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
app.use(express.json()); 
app.use(router)

app.get("/",(req,res)=>{
  res.send("Running")
})
io.on('connection', (socket) => {
  socket.on("join_room",(msg)=>{
    socket.join(msg.roomId)
  })
    socket.on('chatmessage', (msg) => {
      console.log(msg.roomId)
      if(msg.message){
        console.log(msg.message)
        io.to(msg.roomId).emit("new_message",msg.message)
      }
    });
});

const PORT = process.env.PORT || 3001;


server.listen(PORT, () => {
  console.log('server running at http://localhost:3001');
});