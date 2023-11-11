const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const ACTIONS = require("./Actions");

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Create a new instance of the Socket.io server by passing the HTTP server
const io = new Server(server);

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
    }
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
