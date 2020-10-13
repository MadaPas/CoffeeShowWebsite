let open = false;

function showChatForm() {
    if (!open) {
        document.getElementById('chatForm').style.display = 'block';
        open = true;
    } else {
        document.getElementById('chatForm').style.display = 'none';
        open = false;
    }

}


const socket = io.connect('http://localhost:5000');

$('#submit').click(() => {
    const message = $('#message').val();
    const username = user;
    $('#message').val('');
    socket.emit(`a client wrote this`, {
        message,
        username
    });
});

socket.on('A client said', data => {
    $('#conversation').append(`<div>${data.username}: ${data.message}</div>`);
});