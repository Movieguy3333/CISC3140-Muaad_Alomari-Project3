const socket = io();





let allMessages = document.getElementById('chat-messages');

document.getElementById('form').addEventListener('submit', sendMessage);

function sendMessage (e){
    e.preventDefault();
    let input = document.getElementById('input');
    if (input.value) {
        
        socket.emit('message instance', input.value);
        input.value = '';

    }
    input.focus();
}



socket.on('message instance', (message) => {
    let messageContent= document.createElement('li');
    messageContent.innerText = message;
    allMessages.appendChild(messageContent);
  
});
