const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const ACTIONS = require("./Actions");
const cors = require("cors");
const redis = require("redis");

app.use(cors());

const client = redis.createClient({
  url: 'redis://redis:6379'  // The URL should match the service name in your Docker Compose
});
const subClient = redis.createClient({
  url: 'redis://redis:6379'  // The URL should match the service name in your Docker Compose
});
async function startRedis() {
  try {
    await client.connect();
    console.log("Connected to Redis");
    await subClient.connect();
    console.log("Connected to Redis for subscribing");
  } catch (error) {
    console.error("Failed to connect to Redis", error);
  }
}

startRedis();

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Create a new instance of the Socket.io server by passing the HTTP server
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Map to store the association between user socket IDs and their usernames
const userSocketMap = {};

// Function to get all connected clients in a specific room
function getAllConnectedClients(roomId) {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        userName: userSocketMap[socketId],
      };
    },
  );
}

// Event listener for when a new socket connection is established
io.on("connection", (socket) => {
  console.log("got a connection on server", socket.id);
  // Event listener for the "JOIN" action
  socket.on(ACTIONS.JOIN, ({ roomId, userName }) => {
    // Map the user's socket ID to their username
    userSocketMap[socket.id] = userName;

    // Make the socket join a specific room
    socket.join(roomId);

    // Get a list of all connected clients in the room
    const clients = getAllConnectedClients(roomId);
    console.log("clients", clients);
    clients.forEach((socketId) => {
      io.to(socketId.socketId).emit(ACTIONS.JOINED, {
        clients,
        userName,
        socketId,
      });
    });
  });
  socket.on(ACTIONS.SEND_MESSAGE, (data) => {
    socket.in(data.room).emit(ACTIONS.RECEIVE_MESSAGE, data);
  });
  socket.on(ACTIONS.RUN_CODE, async ({ code, roomId }) => {
    try {
      await client.lPush("codeForProcessing", JSON.stringify({ code, roomId }));
      console.log("Code pushed to Redis queue for processing");
    } catch (error) {
      console.error("Redis error:", error);
    }

    subClient.subscribe("task_updates", function (message, channel) {
      console.log("Subscribed to task_updates channel");
      console.log("Received message in channel %s: %s", channel, message);
      const { messageRoomId, codeOutput } = JSON.parse(message);
      console.log("messageRoomId", messageRoomId);
      console.log("roomId", roomId);
      console.log("codeOutput", codeOutput);
      if (messageRoomId === roomId) {
        socket.in(roomId).emit(ACTIONS.OUTPUT, { data: codeOutput });
        console.log("Output sent to room", roomId);
      }
    });
  });

  socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
    socket.in(roomId).emit(ACTIONS.CODE_CHANGE, { code });
  });
  socket.on("disconnecting", () => {
    const rooms = [...socket.rooms];
    rooms.forEach((roomId) => {
      socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
        socketId: socket.id,
        userName: userSocketMap[socket.id],
      });
    });
    delete userSocketMap[socket.id];
    socket.leave();
  });
});

// Start the server
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
