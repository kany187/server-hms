const express = require('express');

const { httpGetAllUser,
        httpGetMe,
        httpPostNewUser,
        httpDeleteUser,
        httpPutUser
 } = require('./user.controller')

 const auth = require('../../middleware/auth');
 const admin = require('../../middleware/admin');

//This route manage patient Users and availability
const userRouter = express.Router();

userRouter.get('/me',  httpGetMe);
userRouter.get('/', httpGetAllUser);
userRouter.post('/', httpPostNewUser);
userRouter.put('/:id', httpPutUser);
userRouter.delete('/:id', httpDeleteUser);

module.exports = userRouter;