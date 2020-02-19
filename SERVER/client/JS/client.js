const socket = io();
var id;
socket.on('greet', writeMsg);
socket.on('msg', writeMsg);
socket.on('greetToAll', addPlayerAndGreet);

function writeMsg(source, text) {

    let chat = document.getElementById('chat');
    let messageElement = document.createElement('div');

    messageElement.classList.add('messages');
    messageElement.innerHTML += `<h4 id="user">${source}</h4> \n
                                <p id="text">${text}</p>`;

    chat.appendChild(messageElement);  
}

function addPlayerAndGreet(source, text, num) {
    id = num;
    let chat = document.getElementById('chat');
    let messageElement = document.createElement('div');

    messageElement.classList.add('messages');
    messageElement.innerHTML += `<h4 id="user">${source}</h4> \n
                                <p id="text">${text}</p>`;

    chat.appendChild(messageElement);  
}

document.getElementById('send').addEventListener('click', sendMessage);

document.getElementById('message').addEventListener('keyup', (ev) => {
    if(ev.keyCode == 13 && !ev.shiftKey) {
        ev.preventDefault();
        sendMessage();
    }
})

function sendMessage() {
    let input = document.getElementById('message');
    let value = input.value;
    input.value = '';
    console.log(id);
    console.log(value);
    
    if(value !== '') {
        socket.emit('msg', id, value)
    }
}

socket.on('redirect', function(destination) {
    window.location.href = destination;
});