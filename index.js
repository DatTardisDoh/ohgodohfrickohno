const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg, user) => { //takes in string 'msg' on event 'chat message'
        io.emit('chat message', msg, user); //sends to all listening sockets 'msg' as event 'chat message'
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});