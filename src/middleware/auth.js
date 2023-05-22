const jwt = require('jsonwebtoken');
const {redisClient } = require('../startup/mongo');

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
  
    if(!token) return res.status(401).send('Access denied. No token provided');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SEC);
        req.user = decoded;

        redisClient.get(token);
        next();
           
    } catch (error) {
        res.status(400).send('Invalid token');
    }
}

