const express = require('express');
const path = require('path');
const http = require('http');


const app = express();
const server = http.Server(app);
const io = require('socket.io')(server)


app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})


const COLORS = ["#d100ff", "#ff00aa", 
                "#A66100", "#D636C9"]



let connections = 0; 


io.on("connection", function(client) {
    console.log('New websocket connection');

    client.on("new user", (username) => {
        client.username = username
        client.color = COLORS[Math.floor(Math.random() * COLORS.length)]
        connections++

        console.log(connections)

        client.prefix = `<span style="color: ${client.color}">${username}</span>`
        io.emit('messageFromServer', `${client.prefix} присоединился к чату`)
        io.emit('members', connections)
    })


    client.on('messageFromClient', msg => {
        io.emit('messageFromServer', client.prefix + ": " + msg);
    });

    client.on('type', (username) => {
        client.broadcast.emit('typing', username)
    })

   client.on('disconnect', () => {
        connections--;
        io.emit('members', connections)
        io.emit('messageFromServer', client.prefix + " отключился от сервера")
        console.log('New websocket disconnected');
  });
})

io.on("connection_error", (err) => {
    console.log(err);
});

server.listen(3000,()=>{
    console.log(`Server is up on port 3000!`);
})
