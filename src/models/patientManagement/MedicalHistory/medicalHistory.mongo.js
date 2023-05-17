const mongoose = require('mongoose');

const medicalHistorySchema = new mongoose.Schema({
    patientId: {
        
    },
    condition: {
        type: String,
    },
    surgery: {
        type: String,
    },
    allergies: {
        type: String,
    },
    medications: {
        type: String,
    }
   
})


module.exports = mongoose.model('MedicalHistory', medicalHistorySchema);