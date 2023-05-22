const User = require('../../models/user/user.mongo');
const {redisClient} = require('../../startup/mongo');
const bcrypt = require('bcrypt')
User
const setToken = (key, value) => {
    return Promise.resolve(redisClient.set(key, value))
}

async function httpPostNewUser(req,res){
    try {
        let user = await User.findOne({email: req.body.email})
        if(!user) return res.status(400).send('Invalid email or password')

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send('Invalid email or password')

        const token = user.generateAuthToken();

        await setToken(token, user._id.toString());
  
        return res.status(200).send(token);

    } catch (error) {
        res.status(500).json(error)
    } 
}

module.exports = {
    httpPostNewUser,
}

