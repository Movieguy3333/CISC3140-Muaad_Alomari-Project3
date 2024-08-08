
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




server.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
