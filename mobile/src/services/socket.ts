import io from 'socket.io-client';

const socketIo = io('http://192.168.0.101:3333',{ 
    reconnection: true,
    reconnectionDelay: 500,
    jsonp: true,
    reconnectionAttempts: Infinity,
    transports: ['websocket']
});
socketIo.on('connect', msg => {
    console.log('enviado'+ msg);
})

export default socketIo;