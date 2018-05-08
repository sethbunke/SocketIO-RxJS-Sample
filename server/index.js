let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

let getRandomArbitrary = (min=0, max=10) => {
    let num = Math.random() * (max - min) + min;
    console.log(num);
}

let getRandomInt = (min=0, max=10) => {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(num);
}

function myFunc(arg) {
    console.log(`arg was => ${arg}`);
}

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {
        console.log(message);
    });

    function intervalFunc() {
        let data = new Date().toLocaleString();
        socket.emit('update', data);
        console.log(data);
    }
      
    // setTimeout(myFunc, 1000);
    setInterval(intervalFunc, 1000);

    setInterval(getRandomInt, 1000);
    
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});