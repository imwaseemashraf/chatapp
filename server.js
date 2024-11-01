// Import the WebSocket library
const WebSocket = require('ws');

// Create a WebSocket server that listens on port 8080
const server = new WebSocket.Server({ port: 8080 });

// Event listener for new connections
server.on('connection', (socket) => {
  console.log('A new client connected');

  // Event listener for receiving messages from clients
  socket.on('message', (message) => {
    console.log('Received:', message);

    // Broadcast the message to all connected clients
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Event listener for client disconnection
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
