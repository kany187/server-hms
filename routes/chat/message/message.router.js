const express = require('express');

const { 
    httpGetMessageById,
    httpPostMessage,
 
 } = require('./message.controller')

//This route manage patient appointments and availability
const messageRouter = express.Router();

//messageRouter.get('/', httpGetMessage);
messageRouter.get('/:conversationId', httpGetMessageById);
messageRouter.post('/', httpPostMessage);
// messageRouter.put('/:id', httpPutPatientInfo);
// messageRouter.delete('/:id', httpDeletePatientInfo);

module.exports = messageRouter ;