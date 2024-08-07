The project consists of a server-side implementation to manage WebSocket connections and a client-side interface for user interactions. The goal of the project was to create a simple, responsive chat application where messages can be sent and received in real-time by all connected clients.

Backend: I set up the server (index.js) using boiler-plate Node.js, Express and Socket IO. The app wil also serve static files from the client directory. There are multiple logsto the console letting the developer know about user connects and disconnects.Logs when a user connects. The main purpose of this app emits received messages to all clients that are connected. The server listens on port 3000, and the application can be started with typing "node server/index.js" in the terminal. Then copy/paste the following link into a web browser and hit enter: http://localhost:3000

Frontend: Since this is a simple app, the frontend (html, css and javascript) is simple as well. The HTML provides the structure, the CSS is simple yet visually appealing, and the JavaScript is there to handle interactions with the Socket.IO server and to update the chat UI.