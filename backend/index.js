const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
var cors = require("cors");
const router = require("./routes/route");
const app = express();
const connectDB = require("./config/db");
const codeSchema = require("./schema/codeSchema");
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://cheated.vercel.app",
    methods: ["GET", "POST"],
  },
});

app.use(
  cors({
    origin: "https://cheated.vercel.app",
  })
);
app.use(express.json());
app.use(router);
app.get("/", (req, res) => {
  res.send("Running");
});
connectDB();

io.on("connection", (socket) => {
  socket.on("join_room", async (msg) => {
    socket.join(msg.roomId);
    try {
      const response = await codeSchema.findOne({ url: msg.roomId });
      if (response) {
        socket.emit("load_existing_code", response.code);
      } else {
        socket.emit("load_existing_code", null);
      }
    } catch (error) {
      console.error("Error fetching code:", error);
      socket.emit("load_existing_code", null);
    }
  });

  socket.on("chatmessage", async (msg) => {
    if (msg.message) {
      try {
        let existing = await codeSchema.findOne({ url: msg.roomId });

        if (existing) {
          existing.code = msg.message;
          await existing.save();
        } else {
          const newCode = new codeSchema({
            url: msg.roomId,
            code: msg.message,
          });
          await newCode.save();
        }
        io.to(msg.roomId).emit("new_message", msg.message);
      } catch (error) {
        console.error("Error saving code:", error);
      }
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log("server running at http://localhost:3001");
});




///swEkoKI1vtP3etid
// gk4763549

// 