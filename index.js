const http = require('http');
const app = require('./app');
const cors = require('cors');

const { Server } = require('socket.io')
const sockets = require('./socket');

require('dotenv').config();

const { mongoConnect } = require('./startup/mongo');
mongoConnect()

const httpServer = http.createServer(app);
const socketServer = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET', 'POST']
    }
});

app.use(cors());

const port = process.env.PORT || 5000;
httpServer.listen(port, ()=> {console.log(`Listening on port ${port} ...`) })

//sockets.listen(socketServer);

socketServer.on('Connection', (socket) => {
    console.log('a user connected');
    
    io.emit("Welcome", "hello this is socket server")
})



module.exports = httpServer;
