const http = require('http');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./startup/mongo');

const port = process.env.PORT || 5000;

const server = http.createServer(app);

mongoConnect()

server.listen(port, ()=> {console.log(`Listening on port ${port} ...`) })

module.exports = server;
