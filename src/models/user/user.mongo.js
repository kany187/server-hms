const jwt = require('jsonwebtoken');
require('dotenv').config();
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
   name: {
    type: String,
   //  required: true,
    minlength: 3,
    maxlength: 10
   },
   email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
    unique: true
   },
   password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    unique: true
   },
   isAdmin: {
    type: Boolean,
    default: false
   },
   roles: [],
   operations: []
   
})

userSchema.methods.generateAuthToken = function() {
   const token = jwt.sign({
      _id: this._id,
      isAdmin: this.isAdmin,
      name: this.name
     }, 
     process.env.JWT_SEC,
     {expiresIn: "3d"}
     )

     return token;
}

module.exports = mongoose.model('User', userSchema);