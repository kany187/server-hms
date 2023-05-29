const Conversation = require('../../../models/chats/conversation.mongo');

async function httpPostConversation(req,res){

    try {
        const conversation = new Conversation(
         {members: [req.body.senderId, req.body.recieverId]}
        );
        await conversation.save(); 

        return res.status(200).send(conversation)
            
    } catch (error) {
        res.status(500).json(error)
    } 
}

async function httpGetConversationById(req,res){

    try {
        const conversation = await Conversation.find({
            members: { $in: [req.params.id]}
        })

        if (!conversation) {
            return res.status(404).json({ message: "Conversation not found" });
          }

        return res.status(200).json(conversation)

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    } 
}

module.exports = {
    httpPostConversation,
    httpGetConversationById
}