import express from 'express';
import routes from './routes';

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(routes);

io.on('connection', (socket: any) => {


    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('message', (msg: string) => {
        console.log('message: ' + msg);
    });
});
  
http.listen(3333, () => {
    console.log('listening on *:3000');
});