const express = require('express');

const { 
    httpGetConversationById,
    httpPostConversation,
 
 } = require('./conversation.controller')

//This route manage patient appointments and availability
const conversationRouter = express.Router();

// conversationRouter .get('/', httpGetPatientInfo);
conversationRouter.get('/:id', httpGetConversationById);
conversationRouter.post('/', httpPostConversation);
// conversationRouter .put('/:id', httpPutPatientInfo);
// conversationRouter .delete('/:id', httpDeletePatientInfo);

module.exports = conversationRouter ;