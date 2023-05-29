function listen (io) {
    io.on('Connection', (socket) => {
        console.log('a user connected', socket.id);
        
        io.emit("Welcome", "hello this is socket server")
    })
}

module.exports = {
    listen
}
