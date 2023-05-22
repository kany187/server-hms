const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: Number
    },
    type: {
        type: String,
    },
    notes: {
        type: String
    },
   
})


module.exports = mongoose.model('Room', roomSchema);