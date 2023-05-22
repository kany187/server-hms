const mongoose = require('mongoose');

const receptionistSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HospitalEmployee",
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
   
})


module.exports = mongoose.model('Receptionist', receptionistSchema);