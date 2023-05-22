const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
    patientId: {
        
    },
    doctorId: {
        
    },
    date: {
        type: Date
    },
    purpose: {
        type: String,
    },
    notes: {
        type: String
    },
   
})


module.exports = mongoose.model('Visit', visitSchema);