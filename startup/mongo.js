require('dotenv').config();

const mongoose = require('mongoose');
const redis = require('redis');

const testdb = process.env.MONGODB_TEST_URL;
const db = process.env.MONGODB_URL;
const redisClient = redis.createClient(process.env.REDIS);

redisClient.on("connect", () => {
    console.log('Client connected to redis...')
});

redisClient.on("error", (error) => {
    console.error(error);
});
 
redisClient.connect();

mongoose.connection.once('open', () => {
    console.log('Database connected...')
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})

mongoose.set('strictQuery', true);

async function mongoConnect() {
    mongoose.connect(db)

    const session = await mongoose.startSession();
    return session;
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
    redisClient
}