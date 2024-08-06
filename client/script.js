const socket = io();

let form = document.getElementById('form');

let input = document.getElementById('input');

let allMessages = document.getElementById('chat-messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        
        socket.emit('message instance', input.value);
        input.value = '';

    }
});

socket.on('message instance', (msg) => {
    let messageContent= document.createElement('li');
    messageContent.innerText = msg;
    allMessages.appendChild(messageContent);
  
});
