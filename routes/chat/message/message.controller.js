const Message = require('../../../models/chats/message.mongo');

async function httpPostMessage(req,res){

    try {
        const message = new Message(req.body);

        await message.save();    
        return res.status(200).json(message)

    } catch (error) {
        res.status(500).json(error)
    } 
}

async function httpGetMessageById(req,res){

    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId,
        })
          
        return res.status(200).json(messages)

    } catch (error) {
        res.status(500).json(error)
    } 
}

module.exports = {
    httpPostMessage,
    httpGetMessageById,

}