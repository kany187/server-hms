const User = require('../../models/user/user.mongo');
const bcrypt = require('bcrypt')


async function httpPostNewUser(req,res){
    try {
        let user = await User.findOne({email: req.body.email})
        if(!user) return res.status(400).send('Invalid email or password')

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send('Invalid email or password')

        const token = user.generateAuthToken();

        return res.status(200).send(token);

    } catch (error) {
        res.status(500).json(error)
    } 
}

module.exports = {
    httpPostNewUser,
}

