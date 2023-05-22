const express = require('express');

const { 
        httpPostNewUser,
 } = require('./auth.controller')

//This route manage patient Users and availability
const userRouter = express.Router();

userRouter.post('/', httpPostNewUser);

module.exports = userRouter;