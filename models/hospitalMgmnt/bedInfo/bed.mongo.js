const mongoose = require('mongoose');

const bedSchema = new mongoose.Schema({
    roomId: {
        
    },
    bedNumber: {
        type: Number
    },
    type: {
        type: String,
    },
    notes: {
        type: String
    },
   
})


module.exports = mongoose.model('Bed', bedSchema);