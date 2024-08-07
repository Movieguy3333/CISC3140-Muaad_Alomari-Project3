const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('client'));

io.on('connection', (socket) => {
    console.log('User just connected');

    socket.on('message instance', (msg) => {
        io.emit('message instance', msg);
    });

    socket.on('disconnect', () => {
        console.log('User just disconnected');
    });
    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });
});

server.on('error', (err) => {
    console.error('Server error:', err);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err);
});
