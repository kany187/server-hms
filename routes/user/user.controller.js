const User = require('../../models/user/user.mongo');
const bcrypt = require('bcrypt');

async function httpGetMe(req, res){
    try {
        const user = await User.findById(req.user._id).select('-password -isAdmin')
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function httpGetAllUser(req, res){
    try {
        const user = await User.find({}, {'_v': 0})
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function httpPostNewUser(req,res){
    try {
        let user = await User.findOne({email: req.body.email})
        if(user) return res.status(400).send('User already registed');

        user = new User(req.body);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save()

        const token = user.generateAuthToken();
        return res
        .header('x-auth-token', token)
        .header("access-control-expose-headers", "x-auth-token")
        .send(user)
        
    } catch (error) {
        res.status(500).json(error)
    } 
}

async function httpPutUser(req, res){
    try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);

    if(!user) return res.status(404).send('The user with the given id does not exist!');

    res.status(200).json("User has been modified.")  
    } catch (error) {
        res.status(500).json(error)
    }  
}

async function httpDeleteUser(req, res){
    try {
        const user = await User.findByIdAndRemove(req.params.id);

        if(!user) return res.status(404).send('No user was found!');
        res.status(200).json("user has been deleted.")  
    } catch (error) {
        res.status(500).json(error)
    }

}


module.exports = {
    httpGetMe,
    httpGetAllUser,
    httpPostNewUser,
    httpPutUser,
    httpDeleteUser
}

