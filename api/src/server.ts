import express from 'express';
import socket from 'socket.io';
import routes from './routes';

const app = express();

const http = require("http").createServer(app);
const io = socket.listen(http);

io.on("connection", socket => {
    console.log(`a user connected `);
    socket.on('new message', data => {
        console.log(data);
    });
});

app.use(express.json());
app.use(routes);

http.listen(3333, ()=>{
    console.log(`connected in 3333`);
});